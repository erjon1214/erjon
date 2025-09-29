import React from 'react'

function BlogList(props) {
  const list = props.list
  const x = props.x
  return (
   <>
       
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

export default BlogList