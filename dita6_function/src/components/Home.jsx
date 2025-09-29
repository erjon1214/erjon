import React from 'react'
import { useState } from 'react'
import BlogList from './BlogList.jsx'
function Home() {
  const deleteButton = (id) => {
    const newList = list.filter(list=> list.id !== id);
    setList(newList)
  }
        const [list, setList] = useState([
        {id: 1,name: "Erjon",age:17,city:"Prizren"},
        {id: 2,name: "Arianit",age:31,city:"Prishtine"},
        {id: 3,name: "Arbnor",age:28,city:"Prishtine"},
        {id: 4,name: "Arlind",age:24,city:"Prizren"},
        {id: 5,name: "Amr",age:23,city:"Prizren"},

    ])

  return (
    <>
       {/* <h1>Contact Page</h1>
        <p>This is the Contact Page.</p> */}
        {/* {list.map((item) =>(
            <div key={item.id}>
                <h2>{item.id}</h2>
                <p>Age: {item.age}</p>
                <p>City: {item.city}</p>
            </div>
        ))} */}
        <BlogList list={list} x = "Lista e nxenesve" deleteButton={deleteButton}/>
    </>

  )
}

export default Home