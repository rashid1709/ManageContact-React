import React from 'react'

function ContactList({contact}) {
    
  return (
    <div>
      <h1>Contact List</h1>
      {
        contact.map((data)=>{
            return(
                <div className='contacts'>
                    <div style={{marginLeft:'2px'}}>{data.name}</div>
                    <div className='email'>{data.email}</div>
                </div>
            )
        })
      }
    </div>
  )
}

export default ContactList
