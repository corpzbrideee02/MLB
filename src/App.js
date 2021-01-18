import React,{useState}  from 'react';
import "./App.css";
import Select from 'react-select';
import monthsJS from './months';
import daysJS from './days'
import yearsJS from './years'
import DarkTheme from 'react-dark-theme';
import Ripples from 'react-ripples'
import helpButton from './help1.png'

//for toggle Theme
const lightTheme = {
  background: 'white',
  text: 'black',
}

const darkTheme = {
  background: 'black',
  text: 'white',
}

const App=()=>{

  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
    let [gamesArray, setGames]=useState([]);
  
  //handle onChange event of the dropdown
      const handleChange = e => {
        setSelectedYear(e);
      }

      const handleChange2 = e=>{
        setSelectedMonth(e);
      }
      const handleChange3 = e=>{
        setSelectedDay(e);
      }

 
  //Search 
      const [input,setInput]=useState("");
      const handleChangeSearch=(e)=>
      {
        e.preventDefault();
        setInput(e.target.value);
      };

      if(input.length>0)
      {
        gamesArray=gamesArray.filter((i)=>{
          return (i.home_team_name.toLowerCase().match(input)||i.home_team_name.match(input));
        })
      }

 
//retrieve Data
 const HandleRetrieveClick=async()=>
 {
    const response= await fetch(
      `http://gd2.mlb.com/components/game/mlb/year_${selectedYear.value}/month_${selectedMonth.value<10?'0'+selectedMonth.value:selectedMonth.value}/day_${selectedDay.value<10?'0'+selectedDay.value:selectedDay.value}/master_scoreboard.json`
    )
    const dataG=await response.json();
    //if there is a game on that date then retrieve, if not, alert
      (dataG.data.games.game) ?setGames(dataG.data.games.game):alert("Oooops! No game on that day");
 }; 

  return (
    <div className="App" >
      <DarkTheme light={lightTheme} dark={darkTheme} />
          <h1>MAJOR LEAGUE BASEBALL <img id="helpB" alt="Help Button" src={helpButton} width="50px" onClick={()=>alert("Select Year,Month and Day first before clicking Retrieve Button") }></img></h1>
          
            <div className="selectDate">
                    <Select placeholder="Select Year" value={selectedYear} options={yearsJS} onChange={handleChange} /> 
                    <Select placeholder="Select Month" value={selectedMonth} options={monthsJS} onChange={handleChange2} />
                    <Select placeholder="Select Day" value={selectedDay} options={daysJS} onChange={handleChange3} />
                    <Ripples><button className="retButton" type="button" value="Retrieve" onClick={async () => {await HandleRetrieveClick()}}>Retrieve</button></Ripples>
                    <h2>Number of Games: {gamesArray.length}</h2>
                    <input placeholder="    ....Search Home Team" className="search-bar" type="text" value={input} onChange={handleChangeSearch}  />
            </div>
      {/* shows retrieved data */}
            {gamesArray.map((gm, index)=>
              {return (
                <div key={index} className="gamesClass">
                      <h4>Game Number: {index+1}</h4>
                      <h4>Home Team Name : {gm.home_team_name}</h4>
                      <h4>Away Team Name : {gm.away_team_name}</h4>
                      <h4>Home Win-Loss : {gm.home_win}{'-'}{gm.home_loss}</h4>
                      <h4>Away Win-Loss : {gm.away_win}{'-'}{gm.away_loss}</h4>
                      <h4>Venue : {gm.venue}{', '}{gm.location}</h4>
                      <h4>Winning Pitcher : {gm.winning_pitcher.first===""?"N/A":gm.winning_pitcher.first}{' '}{gm.winning_pitcher.last}</h4>
                      <h4>Losing Pitcher : {gm.losing_pitcher.first===""?"N/A":gm.losing_pitcher.first}{' '}{gm.losing_pitcher.last}</h4>
                      </div>
                      )
              })}
    </div> //end of DIV classname="App"
    
  );
};//end App()

export default App;