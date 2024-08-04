import React, { useState } from 'react'
import ShowFooter_Context from './ShowFooter_Context'

const ShowFooter_Provider = (props) => {

    const [showFooter, setShowFooter] = useState(true);

  return (
      <ShowFooter_Context.Provider value={{showFooter, setShowFooter}}>
        { props.children }
      </ShowFooter_Context.Provider>
  )
}

export default ShowFooter_Provider
