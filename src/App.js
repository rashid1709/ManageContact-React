
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header';
import AddContact from './Components/AddContact';
import ContactList from './Components/ContactList';
import { useState } from 'react';

function App() {
  const [contact,setContact] = useState([]);

  const addContact = (data) => {
   setContact([...contact,data]);
  }
  
  return (
    <div className="container">
        <Header />
        <AddContact addContact ={addContact}/>
        <ContactList contact={contact} />
    </div>
  );
}

export default App;
