import React, { useState } from 'react'
import PopUp_Context from './PopUp_Context'

const PopUp_Provider = (props) => {
    const [showPopUp, setShowPopUp] = useState(false);
    
  return (
    <PopUp_Context.Provider value={{showPopUp, setShowPopUp}}>
        {props.children}
    </PopUp_Context.Provider>
  )
}

export default PopUp_Provider
