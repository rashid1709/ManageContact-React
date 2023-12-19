import React, { useState } from 'react'

function AddContact({addContact}) {
    const [contactData,setContactData]=useState({
        name:'',
        email:''
    })
    const handleChange =(e) =>{
            if(e.target.name ==='name'){
                setContactData({...contactData,name:e.target.value})
            }
            else {
                setContactData({...contactData,email:e.target.value})
            }
    }
    const handleAdd =(e) => {
        if(contactData.name ==="" || contactData.email=== ""){
            alert("Please fill all the field");
            return
        }
        addContact(contactData);
        setContactData({name:'',email:''})
    }
  return (
    <div className='formHeader'>
      <div className='add-contact'>Add Contact</div>
      <form>
        <label>Name:</label><br />
        <input type='text' placeholder='Enter Name' name='name'
        value={contactData.name} onChange={handleChange} /><br />
        <label>Email:</label><br />
        <input type='email' placeholder='Enter email' name='email' 
         value={contactData.email} onChange={handleChange} />
      </form>
      <button className='btn btn-primary my-2' onClick={handleAdd}>Add Contact</button>
    </div>
  )
}

export default AddContact
