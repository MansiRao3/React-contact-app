import React,{useRef} from 'react';
import Contactcard from "./Contactcard";

const ContactList = (props) => {
    console.log(props);
    const inputE1=useRef("");

   /*const contacts =[
        {
            id:"1",
            name:"Sanju",
            email:"cs@gmail.com",
        },
    ];*/
    const renderContactList = props.contacts.map((contact) => {
        return <Contactcard contact={contact} /> ;
    });

    /*const getSearchTerm = () =>{
       //console.log(inputE1.current.value);
       props.searchKeyword(inputE1.current.value);
    };*/
    return (
        <React.Fragment>
  { /*<div className="ui search">
        <div className="ui icon input">
            <input ref={inputE1} type="text" placeholder="Search contacts" className="prompt" value={props.term} onChange={getSearchTerm} />
            <i className="search icon"></i>
        </div>
    </div>*/}
    <div className="ui celled list"> {renderContactList /*>0 ? renderContactList:"No contacts available"*/} </div> 
    </React.Fragment>
    );
};

export default ContactList;