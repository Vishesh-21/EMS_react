import React from 'react'
import { EmpHeader } from '../others/EmpHeader'
import { CreateTask } from '../others/CreateTask'
import { AllTask } from '../others/Alltask'
// bg-[#1c1c1c]
export const AdminDashboard = (props) => {
  return (
    <div id='admin' className='px-10 py-6 h-[100vh] overflow-y-auto'>
        <EmpHeader changeUser={props.changeUser}/>
        <div className='h-[90vh] w-full'>
        <CreateTask/>
        <AllTask/>  
        </div>
    </div>
  )
}
