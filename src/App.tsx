import React, {useState} from 'react';
import './App.css';
import {SuperButton} from "./components/SuperButton";





function App() {
    return (
        <div>
            <SuperButton callBack={()=>{}} color={"xXx"}/>

            <SuperButton callBack={()=>{}} color={"Where"}>{"My name is Button"}</SuperButton>
        </div>
    );
}



export default App;
