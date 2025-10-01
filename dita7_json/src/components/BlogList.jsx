import React from 'react'

function BlogList(props) {
  const list = props.list
  const x = props.x
  const deleteButton = props.deleteButton
  return (
   <>
   <table border="1" cellPadding="10">
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
    <th>Actinon</th>
   </table>
       
        {list.map((item) =>(
            <td key={item.id}>
                <td>{item.id}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
                <button onClick={() => deleteButton(item.id)}>Delete</button>
                <button>View</button>
            </td>
            ))}
   </>
  )
}

export default BlogList