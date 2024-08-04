import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Event_Btn = () => {
  return (
    <Event>
      <Link to={'/Events'}>
        <button class="Btn">
            <div class="sign">
                <i class="fas fa-bullhorn"></i>
            </div>
                
                <div class="text">Upcomming Events!</div>
        </button>
      </Link>
    </Event>
  )
}

export default Event_Btn

const Event = styled.div `
.Btn {
  --black: #000000;
  --ch-black: #141414;
  --eer-black: #1b1b1b;
  --night-rider: #2e2e2e;
  --white: #ffffff;
  --af-white: #f3f3f3;
  --ch-white: #e1e1e1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2px;
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition-duration: .3s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
  background-color: #fb5b21;
}

/* plus sign */
.sign {
  width: 100%;
  transition-duration: .3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sign i {
  width: 20px;
  color: white;
  font: 20px;
}
/* text */
.text {
  /* position: absolute; */
  right: 0%;
  width: 0%;
  opacity: 0;
  color: var(--af-white);
  font-size: 1.2rem;
  font-weight: 500;
  transition-duration: .3s;
}
/* hover effect on button width */
.Btn:hover {
  width: 220px;
  border-radius: 5px;
  transition-duration: .3s;
}

.Btn:hover .sign {
  width: 20%;
  transition-duration: .3s;
  padding-left: 5px;
}
/* hover effect button's text */
.Btn:hover .text {
  opacity: 1;
  width: 100%;
  white-space: nowrap;
  transition-duration: .3s;
  padding-right: 10px;
}
/* button click effect*/
.Btn:active {
  transform: translate(2px ,2px);
}
`;