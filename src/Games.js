import React from 'react';
import style from './games.module.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
const Games=({hname,aname,wpitcherFirst,wpitcherLast,lpitcherFirst,lpitcherLast,ven})=>
{
return (
<div className={style.games}>
    
   {/* <Table>
      <Thead>
        <Tr>
           <Th>Game Number :</Th>
          <Th>Home Team Name :</Th>
          <Th>Away Team Name :</Th>
          <Th>Winning Pitcher :</Th>
          <Th>Losing Pitcher : </Th>
          <Th>Venue :</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
            <Td>{}</Td>
          <Td>{hname}</Td>
          <Td>{aname}</Td>
          <Td>{wpitcherFirst}{wpitcherLast}</Td>
          <Td>{lpitcherFirst}{lpitcherLast}</Td>
          <Td>{ven}</Td>
        </Tr>
      </Tbody>
    </Table> */}
    <h4>Home Team Name : <label>{hname}</label></h4>
    
    <h4>Away Team Name : <label>{aname}</label></h4>
    
    <h4>Winning Pitcher : <label>{wpitcherFirst}{wpitcherLast}</label></h4>
    
    <h4>Losing Pitcher : <label>{lpitcherFirst}{lpitcherLast}</label></h4>
    
    <h4>Venue :  <label>{ven}</label></h4>
   
   
</div>

);

};

export default Games;
