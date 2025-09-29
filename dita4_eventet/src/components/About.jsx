import React, { useState } from 'react'

export default function About() {
    const [name, setName] = useState('Erjon')
  return (
    <>
        <h1>About Page</h1>
        <p>This is the About Page.</p>

        <button onClick={() => setName("Arianit")}>Change Name</button>
        <button onClick={() => setName("Erjon")}>Change name2</button>
        <p>{name}</p>
    </>
  )
}
