import React from 'react'
import AdminNav from '../../components/AdminNav/AdminNav'
import AdminMenu from '../../components/AdminMenu/AdminMenu';
import AdminContacts from '../../components/AdminContacts/AdminContacts';

const AdminHome = () => {
  return (
    <div>
      <AdminNav/>
      <AdminMenu/>
      <AdminContacts/>
    </div>
  )
}

export default AdminHome
