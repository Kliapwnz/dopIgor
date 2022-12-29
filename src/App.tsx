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

            <SuperButton callBack={()=>{}} color={"red"}>Red SuperButton</SuperButton>
            <SuperButton callBack={()=>{}} color={"secondary"}>Red SuperButton</SuperButton>
            <SuperButton callBack={()=>{}} disabled={true}>Red SuperButton</SuperButton>
            <SuperTodolist tasks={tasks}>{"Im Children"}</SuperTodolist>
            <SuperTodolist tasks={tasks}>
                <button>X</button>
                <button>Y</button>
                <button>Z</button>
                <input type="Hello"/>
                <SuperButton callBack={()=>{}} disabled={true}>Red SuperButton</SuperButton>
            </SuperTodolist>
            <SuperTodolist tasks={tasks}>
                <span>Some text...</span>
                <span>Some text...</span>
                <span>Some text...</span>
                <button>X</button>
                <SuperButton callBack={()=>{}} color={"secondary"}>Red SuperButton</SuperButton>
                <button>Y</button>
                <button>Z</button>
                <input type="Hello"/>
                <SuperButton callBack={()=>{}} disabled={true}>Red SuperButton</SuperButton>
            </SuperTodolist>
        </div>
    );
}



export default App;
