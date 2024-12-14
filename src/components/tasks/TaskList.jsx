import React from 'react'
import { AcceptTask } from './AcceptTask'
import { NewTask } from './NewTask'
import { CompleteTask } from './CompleteTask'
import { Failed } from './Failed'

export const  TaskList= ({data}) => {
  return (
    <div id='tasklist' className='w-full flex gap-8 overflow-x-auto flex-nowrap items-center justify-start h-[50%] mt-8 py-4'>
        {data.tasks.map((ele,idx) => {
          if(ele.active){
            return <AcceptTask key={idx} data={ele} />
          }
          if(ele.newTask){
            return <NewTask key={idx} data={ele}/>
          }
          if(ele.completed){
            return <CompleteTask key={idx} data={ele}/>
          }
          if(ele.failed){
            return <Failed key={idx} data={ele}/>
          }
        })}
    </div>
  )
}


// 🔴 for high
// 🟢 for low
// 🟡 for medium
// 🔥 for urgent