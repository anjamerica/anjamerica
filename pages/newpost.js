import React from 'react'
import CreateJobForm from '../components/admin/CreateJobForm'
import AuthLayout from '../components/layout/AuthLayout';

export default function CreateJob() {
  return (
    <div><CreateJobForm/></div>
  )
}


CreateJob.getLayout=AuthLayout;