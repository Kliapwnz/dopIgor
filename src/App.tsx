import React, {useState} from 'react';
import './App.css';
import {SuperButton} from "./components/SuperButton";
import {SuperTodolist} from "./components/SuperTodolist";





function App() {

    const tasks = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ]


    return (
        <div>
            <SuperTodolist tasks={tasks}/>
            <SuperButton callBack={()=>{}} color={"red"}>Red SuperButton</SuperButton>
            <SuperButton callBack={()=>{}} color={"secondary"}>Red SuperButton</SuperButton>
            <SuperButton callBack={()=>{}} disabled={true}>Red SuperButton</SuperButton>
        </div>
    );
}



export default App;
