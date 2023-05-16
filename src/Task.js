import React from "react";
import { formatDistanceToNow ,differenceInDays} from 'date-fns';
import {tr} from "date-fns/locale";
const Task = ({ taskObj, onComplete }) => {
  const deadline=new Date(taskObj.deadline);
  const formatDeadline=formatDistanceToNow(deadline,{
    addSuffix:true,
    locale:tr
  });
  const isCloseToDeadline=differenceInDays(deadline,new Date())<=3;
  

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="text-xs pt-1">
        son teslim: {""}
        <span className={isCloseToDeadline ? "bg-[#ffd9d4]":""}>{formatDeadline}</span>
      </div>
  
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
