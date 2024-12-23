import React from "react";
import Subscribers from "../components/admin/Subscribers";
import AuthLayout from '../components/layout/AuthLayout';

export default function subscribers() {
  return (
    <div>
      <Subscribers />
    </div>
  );
}

subscribers.getLayout = AuthLayout;
