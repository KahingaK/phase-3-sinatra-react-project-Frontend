import React from 'react'
import { useState } from 'react'

function NewClient() {
    const [clientName, setClientName] =  useState("")

 function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:9292/clients", {
        method : "POST",
        headers: {
          "Content-type": "application/json", 
        },
        body: JSON.stringify({
          name: clientName
          
        }),
      })
  
 }
  
  return (
    <div classname = "submission">
    <form  onSubmit={handleSubmit}>
    <input
    type="text"
    value = {clientName}
    placeholder = "new client.."
    onChange = {(e) => setClientName(e.target.value)}
   />
   <button className='new' type = "submit"> Add Client</button>

    </form>
    </div>
  )
}

export default NewClient