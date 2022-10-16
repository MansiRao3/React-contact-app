import React,{useState,useEffect}  from "react";
//import {BrowserRouter as Router, swtich ,Route} from "react-router-dom";
//import {uuid} from "uuidv4";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
function App() {
  const LOCAL_STORAGE_KEY ="contacts";
  {/*const contacts=[
    {
      id:"1",
      name:"Mansi",
      email:"mansi.burugupalli@gmail.com",
    },
    {
      id:"2",
      name:"Bhavana",
      email:"bhavanagopu@gmail.com",
    },
  ];*/}
  const [contacts , setContacts]=useState([]);
  //const[searchTerm,setSearchTerm]=useState("");
  //const[searchResults,setSearchResults]=useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts,contact]);
  };
   
  /*const searchHandler =(searchTerm) =>{
    //console.log(searchTerm);
    setSearchTerm(searchTerm);
    if(searchTerm !== ""){
      const newContactList = contacts.filter((contact) => {
      return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    }
    else{
      setSearchResults(contacts);
    }
  };*/
  useEffect(() => {
    const retriveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) setContacts(retriveContacts);
  },[]);

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);
  return (
   <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={/*searchTerm.length<1 ? contacts:searchResults*/ contacts}
      /*term={searchTerm}
      searchkeyword={searchHandler}*/
      />
    </div>
  );
}

export default App;
