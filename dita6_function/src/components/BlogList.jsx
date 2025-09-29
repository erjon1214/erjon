import React from 'react'

function BlogList(props) {
  const list = props.list
  const x = props.x
  const deleteButton = props.deleteButton
  return (
   <>
       
        {list.map((item) =>(
            <div key={item.id}>
                <h2>{item.id}</h2>
                <p>Age: {item.age}</p>
                <p>City: {item.city}</p>
                <button onClick={() => deleteButton(item.id)}>Delete</button>
            </div>
            ))}
   </>
  )
}

export default BlogList