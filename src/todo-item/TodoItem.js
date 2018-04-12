import React from 'react';

const TodoItem = ({ value, status, onRemove, onComplete }) => {
  const isCompleted = status === 'completed';
  return (
    <div className="flex justify-between mh2 f3 fw1 pa1">
      <span className={isCompleted ? 'strike center' : 'center'}>{value}</span>
      <div className="">
        <i className="fa fa-remove mr2 red" onClick={onRemove} />
        {!isCompleted && (
          <i className="fa fa-check green" onClick={onComplete} />
        )}
      </div>
    </div>
  );
};

export default TodoItem;
