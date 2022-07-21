import React from 'react'
import Applications from '../components/admin/Applications'
import AuthLayout from '../components/layout/AuthLayout';

export default function Application() {
  return (
    <div><Applications/></div>
  )
}

Application.getLayout=AuthLayout;
