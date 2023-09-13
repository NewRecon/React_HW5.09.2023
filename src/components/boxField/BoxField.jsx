import React, { useState } from 'react'
import "./BoxField.css"

export default function BoxField() {

    const [arr, setArr] = useState([]);
    const [count, setCount] = useState(0);

    const add = () => {
        setArr([...arr,
            {
                red: Math.floor(Math.random()*255),
                green: Math.floor(Math.random()*255),
                blue: Math.floor(Math.random()*255)
            }]
        )
        setCount(count+1);
        console.log(arr);
    }

    const del = () => {
        setArr(arr.slice(0,arr.length-1));
        setCount(count-1);
    }

  return (
    <div className="App">
      <button onClick={add}>ADD</button>
      <button onClick={del}>DEL</button>

      <div className="colors">
      {arr.map((el) => {
					return <div className="block"
						key={el.count}
						style={{ backgroundColor: `rgb(${el.red}, ${el.green}, ${el.blue})` }}
					/>
				})}
      </div>
    </div>
  );
}
