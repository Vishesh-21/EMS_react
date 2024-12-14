import React from 'react'
import { EmpHeader } from '../others/EmpHeader'
import { TasksNumbers } from '../others/TasksNumbers'
import { TaskList } from '../tasks/TaskList'

export const EmployeeDashboard = (props) => {
  return (
    <div className='px-10 py-6 bg-[#1c1c1c] h-screen'>
    <EmpHeader changeUser={props.changeUser} data={props.data}/>
    <TasksNumbers data={props.data}/>
    <TaskList data={props.data}/>
    </div>
  )
}
