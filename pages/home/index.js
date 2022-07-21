import React from 'react'
import Home from '../../components/admin/Home'
import AuthLayout from '../../components/layout/AuthLayout'

export default function HomePage() {
  return (
    <div>
        <Home/>
    </div>
  )
}


HomePage.getLayout=AuthLayout;