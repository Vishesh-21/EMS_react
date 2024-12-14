import React, { useState } from 'react';

export const CreateTask = () => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    description: '',
    assignTo: '',
    category: '',
  });

  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const { title, date, description, assignTo, category } = formData;

    if (!title || !date || !description || !assignTo || !category) {
      alert('Please fill in all fields.');
      return;
    }

    const newTask = {
      title,
      description,
      date,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    const data = JSON.parse(localStorage.getItem('employees')) || [];

    const matchedEmployee = data.find((employee) => employee.firstName.toLowerCase() === assignTo.toLowerCase());

if (!matchedEmployee) {
  alert('Assigned employee does not exist.');
  return;
}

    const updatedData = data.map((employee) => {
      if (matchedEmployee) {
        return {
          ...employee,
          tasks: [...(employee.tasks || []), newTask],
        };
      }
      return employee;
    });

    localStorage.setItem('employees', JSON.stringify(updatedData));

    setTasks((prevTasks) => [...prevTasks, newTask]);

    setFormData({
      title: '',
      date: '',
      description: '',
      assignTo: '',
      category: '',
    });
  };

  return (
    <div className='bg-[#1c1c1c] py-6 px-10 rounded-md mt-6'>
      <form className='flex justify-around' onSubmit={submitHandler}>
        <div className='flex flex-col w-[40%]'>
          <label htmlFor='taskTitle' className='text-sm mb-1'>Task title</label>
          <input
            type='text'
            id='taskTitle'
            name='title'
            placeholder='Make a UI design'
            className='bg-transparent border-[1px] px-2 text-sm py-1 rounded-lg focus:border-emerald-600 duration-150'
            value={formData.title}
            onChange={handleChange}
          />
          <label htmlFor='taskDate' className='text-sm mb-1 mt-2'>Date</label>
          <input
            type='date'
            id='taskDate'
            name='date'
            className='bg-transparent border-[1px] px-2 text-sm py-1 rounded-lg focus:border-emerald-600 duration-150'
            value={formData.date}
            onChange={handleChange}
          />
          <label htmlFor='assignTo' className='text-sm mb-1 mt-2'>Assign to</label>
          <input
            type='text'
            id='assignTo'
            name='assignTo'
            className='bg-transparent border-[1px] px-2 text-sm py-1 rounded-lg focus:border-emerald-600 duration-150'
            placeholder='Employee name'
            value={formData.assignTo}
            onChange={handleChange}
          />
          <label htmlFor='catg' className='text-sm mb-1 mt-2'>Category</label>
          <input
            type='text'
            id='catg'
            name='category'
            className='bg-transparent border-[1px] px-2 text-sm py-1 rounded-lg focus:border-emerald-600 duration-150'
            placeholder='Design, dev etc'
            value={formData.category}
            onChange={handleChange}
          />
        </div>

        <div className='flex flex-col w-[40%] justify-between'>
          <label htmlFor='taskDesc' className='text-sm'>Description</label>
          <textarea
            id='taskDesc'
            name='description'
            placeholder='Description...'
            className='bg-transparent border-[1px] text-sm rounded-lg h-[70%] w-full px-2 py-2 resize-none focus:border-emerald-600 duration-150'
            value={formData.description}
            onChange={handleChange}
          ></textarea>
          <button className='border-2 border-emerald-600 rounded-md py-1 hover:bg-emerald-600 duration-200 transition-all ease-linear font-semibold'>
            Create task
          </button>
        </div>
      </form>
    </div>
  );
};
