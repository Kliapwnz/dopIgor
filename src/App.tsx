import React, {useState} from 'react';
import './App.css';
import {SuperButton} from "./components/SuperButton";





function App() {
    return (
        <div>
            <SuperButton callBack={()=>{}} color={"red"}>Red SuperButton</SuperButton>
            <SuperButton callBack={()=>{}} color={"secondary"}>Red SuperButton</SuperButton>
            <SuperButton callBack={()=>{}} disabled={true}>Red SuperButton</SuperButton>


        </div>
    );
}



export default App;
