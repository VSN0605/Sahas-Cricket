import React, { useState } from 'react'
import { AdminContext } from './AdminContext'

const AdminContext_Provider = (props) => {
    const [isAdmin, setIsAdmin] = useState(true);
  return (
    <AdminContext.Provider value={{isAdmin, setIsAdmin}}>
      {props.children}
    </AdminContext.Provider>
  )
}

export default AdminContext_Provider
