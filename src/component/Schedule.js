import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import { AdminContext } from '../Context/AdminContext';

const Schedule = () => {
    const [currentDay, setCurrentDay] = useState(new Date().getDay());
    const schedule = [
        { day: 'Sunday', openingTime: '10:00 AM', closingTime: '5:00 PM' },
        { day: 'Monday', openingTime: '9:00 AM', closingTime: '5:00 PM' },
        { day: 'Tuesday', openingTime: '9:00 AM', closingTime: '5:00 PM' },
        { day: 'Wednesday', openingTime: '9:00 AM', closingTime: '5:00 PM' },
        { day: 'Thursday', openingTime: '9:00 AM', closingTime: '5:00 PM' },
        { day: 'Friday', openingTime: '9:00 AM', closingTime: '5:00 AM' },
        { day: 'Saturday', openingTime: '10:00 AM', closingTime: '5:00 AM' }
      ];

      const{setIsAdmin} = useContext(AdminContext);
      useEffect(()=>{
        setIsAdmin(false)
      },[])
  return (
    <Schedule_Container>
        <div className="schedule-container">
            <h2>Club Schedule</h2>
            <table className="schedule-table">
                <thead>
                <tr>
                    <th>Day</th>
                    <th>Opening Time</th>
                    <th>Closing Time</th>
                </tr>
                </thead>
                <tbody>
                    {schedule.map(({ day, openingTime, closingTime }, index) => (
                        <tr key={index} className={currentDay === index ? 'active-day' : null}>
                        <td>{day}</td>
                        <td>{openingTime}</td>
                        <td>{closingTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </Schedule_Container>
  )
}

export default Schedule

const Schedule_Container = styled.div `

margin: 50px 0;

.schedule-container {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;



    h2{
        text-align: center;
        margin: 30px 0;
    }

}

.schedule-table {
  width: 100%;
  border-collapse: collapse;
}

.schedule-table th, .schedule-table td {
  padding: 10px;
  text-align: center;
}

.schedule-table th {
  background-color: #333;
  color: #fff;
}

.schedule-table td {
  border: 1px solid #ddd;
}

.active-day {
  background-color: #ffcab7;
} 

.active-day:hover{
    transform: scale(1.02);
}

`;