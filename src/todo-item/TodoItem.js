import React from 'react';
import './styles.css';

const TodoItem = ({ value, status, onRemove, onComplete }) => {
  const isCompleted = status === 'completed';
  const isDeleted = status === 'deleted';
  return (
    <div className={`flex justify-between mh2 f3 fw1 pa1 ${isDeleted ? 'deleted' : ''}`}>
      <span className={isCompleted ? 'strike center' : 'center'}>{value}</span>
      <div className="">
        {!isDeleted && <i className="fa fa-remove mr2 red" onClick={onRemove} />}
        {!isCompleted && !isDeleted && (
          <i className="fa fa-check green" onClick={onComplete} />
        )}
        {isDeleted && <i className="fa fa-trash mr2 red" />}
      </div>
    </div>
  );
};

export default TodoItem;
