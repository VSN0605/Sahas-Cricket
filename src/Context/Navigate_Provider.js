import React, { useState } from 'react'
import Navigate_Context from './Navigate_Context'
// import { useNavigate } from 'react-router-dom';

const Navigate_Provider = (props) => {
    const [navi,setNavi] = useState(false);
    const [about,setAbout] = useState(false);
    const[ids, setIds] = useState('default');
    // const navigate = useNavigate();
    const handalaboutclick=()=>{
        // navigate('/');
        setNavi(!navi);
        console.log('abs', navi)
      }
      console.log(ids)
  return (
    <Navigate_Context.Provider value={{setNavi, navi, about, setAbout, handalaboutclick, ids, setIds}}>
      {props.children}
    </Navigate_Context.Provider>
  )
}

export default Navigate_Provider
