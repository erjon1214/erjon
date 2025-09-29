import React, { useState } from 'react'

export default function Contact() {
    const [list, setList] = useState([
        {id: 1,name: "Erjon",age:17,city:"Prizren"},
        {id: 2,name: "Arianit",age:31,city:"Prishtine"},
        {id: 3,name: "Arbnor",age:28,city:"Prishtine"},
        {id: 4,name: "Arlind",age:24,city:"Prizren"},
        {id: 5,name: "Amr",age:23,city:"Prizren"},

    ])
  return (
    <>
        <h1>Contact Page</h1>
        <p>This is the Contact Page.</p>
        {list.map((item) =>(
            <div key={item.id}>
                <h2>{item.id}</h2>
                <p>Age: {item.age}</p>
                <p>City: {item.city}</p>
            </div>
        ))}
    </>
  )
}
