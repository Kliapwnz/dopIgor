import React from 'react';

type PropsType={
    tasks:TasksType[]
    children?:React.ReactNode
}

type TasksType={
    id:number
    title:string
    isDone:boolean
}

export const SuperTodolist:React.FC<PropsType> = () => {
    return (
        <div>
            
            </div>
    );
};

