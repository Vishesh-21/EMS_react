import React from 'react'

export const TasksNumbers = ({data}) => {
  return (
    <div className='flex gap-5 mt-8'>
        <div className='w-1/3 px-4 py-2 bg-green-400 rounded-lg'>
            <h1 className='text-[5rem] leading-[80px] font-bold'>{data.taskNumbers.newTask}</h1>
            <h2 className='text-xl font-bold'>New Task</h2>
        </div>
        <div className='w-1/3 px-4 py-2 bg-blue-400 rounded-lg'>
            <h1 className='text-[5rem] leading-[80px] font-bold'>{data.taskNumbers.completed}</h1>
            <h2 className='text-xl font-bold'>Complete tasks</h2>
        </div>
        <div className='w-1/3 px-4 py-2 bg-yellow-400 rounded-lg'>
            <h1 className='text-[5rem] leading-[80px] font-bold'>{data.taskNumbers.active}</h1>
            <h2 className='text-xl font-bold'>Acitve Tasks</h2>
        </div>
        <div className='w-1/3 px-4 py-2 bg-red-400 rounded-lg'>
            <h1 className='text-[5rem] leading-[80px] font-bold'>{data.taskNumbers.failed}</h1>
            <h2 className='text-xl font-bold'>Failed Tasks</h2>
        </div>
    </div>
  )
}
