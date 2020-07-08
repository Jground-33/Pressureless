import React from 'react';
import TaskElement from './TaskElement';

function Tasks({todoList}) {
    return (
        <>
        <div className='tasks--subheader--container'>
            <h2 className='tasks--subheader'>June 25 Tasks</h2>
            <div className='tasks--filter--container'>
                <div className="filter-bar filter-top"/>
                <div className="filter-bar filter-middle"/>
                <div className="filter-bar filter-bottom"/>
            </div>    
        </div>

        <div className='tasks--container'>
            {todoList.map((task, idx)=> {
               return <TaskElement key={idx} title={task.title} description={task.description} idx={idx} /> 
            })}
        </div>
        </>
    );
}

export default Tasks;