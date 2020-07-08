import React from 'react';

function TaskElement({title, description, idx}) {
    return(
        <div className={`tasks--task-card ${idx % 2 === 0 ? '' : 'task-card-secondary' }`}>
            <h3 className='tasks--title' >{title}</h3>
            <p className='tasks--description'>{description}</p>
        </div>
    )
}

export default TaskElement;