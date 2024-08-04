import React, { useState } from 'react'
import Scroll_Context from './Scroll_Context'

const Scroll_Provider = (props) => {

    const[ids, setIds] = useState();
    console.log(ids);

  return (
    <Scroll_Context.Provider value={{ids, setIds}}>
      {props.children}
    </Scroll_Context.Provider>
  )
}

export default Scroll_Provider
