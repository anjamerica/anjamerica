import React from 'react'
import CreateJobForm from '../../components/admin/CreateJobForm'
import AuthLayout from '../../components/layout/AuthLayout';

export default function Index() {

  return (
    <div>
        <CreateJobForm/>
    </div>
  )
}

Index.getLayout=AuthLayout;