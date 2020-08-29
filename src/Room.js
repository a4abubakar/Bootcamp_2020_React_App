import React, { useState } from 'react';
import './Room.css'
function Room() {
    const [isLit, setLit] = useState(true)
    let [age, setAge] = useState(24)
    function updateLit() {
        setLit(!isLit)
    }
    // function increaseAge() {
    //     setAge(++age)
    // }
    return (
        <div className={`room ${isLit ? 'lit' : 'dark'}`}>
            This Room is {isLit ? 'lit' : 'dark'}<br />
            <button onClick={updateLit}>Toggle Light</button><br />
            Age : {age}<br />
            <button onClick={() => { setAge(++age) }}>Increase Age</button><br />
        </div>
    );
}

export default Room;
