import React, {useState} from "react";
import "./App.css";
type counterProps = {
    title: string;
    initValue: number;
};
function Counter({ title, initValue }: counterProps) {
    // let countState = useState(initValue);
    // let count = countState[0]
    // let setCount = countState[1];
    const [count, setCount] = useState(initValue)
    return (
        <div>
            <h1>{title}</h1>
            <button
                onClick={() => {
                setCount(count+1)}}
            >
                +
            </button>
            {count}
        </div>
    );
}

function App() {
    return (
        <div>
            <Counter title="카운터" initValue={10}></Counter>
        </div>
    );
}

export default App;
