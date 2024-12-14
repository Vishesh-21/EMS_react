import React from 'react'

export const CompleteTask = ({data}) => {
  return (
    <div>
        <div className='w-[350px] h-[230px] bg-yellow-600 flex-shrink-0 px-6 py-6 rounded-lg relative'>
            <div className='flex items-center justify-between'>
                <h1 className='font-semibold'>Category : {data.category}</h1>
                <p className='text-sm font-semibold'><i class="ri-calendar-2-line"></i> : {data.date}</p>
            </div>
            <div className='py-4'>
                <h1 className='text-xl font-semibold'>{data.title}</h1>
                <h2>{data.description}</h2>
            </div>
            <div className='absolute bottom-4 '>
                <button className='px-3 py-1 bg-green-500 rounded '>Mark as completed</button>
                <button className='px-3 py-1 ml-4 bg-red-500 rounded'>Mark as failed</button>
            </div>
        </div>
    </div>
  )
}
