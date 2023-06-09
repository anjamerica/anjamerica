import React from 'react'
import Subscribers from '../components/admin/Subscribers'

export default function subscribers() {
  return (
    <div><Subscribers/></div>
  )
}

subscribers.getLayout=AuthLayout;