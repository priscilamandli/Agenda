import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import db from "../firebase";
 
function CreateContacts(props) {
    const [contact, setContact] = useState({
        nombre:"",
        telefono:"",
        mail:""
    });

    function handleChange(event){
        const {value, name} = event.target;
        
       setContact(prevValue => {
               return { 
                ...prevValue,   
                [name] : value
               }
            })     
    }

    function handleClick(event){
        db.collection("contacts").add(contact)
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id)
         });
      event.preventDefault();
      setContact({nombre:"", telefono:"", mail:""}) 
    }

    return (
      <div className="input_container">
        <Form >
            <h2>Nuevo contacto</h2>
            <Form.Control className="input" onChange={handleChange} name="nombre" type="text" placeholder="Nombre y Apellido" value={contact.nombre} />
            <Form.Control className="input" onChange={handleChange} name="telefono" type="text" placeholder="Telefono" value={contact.telefono} />
            <Form.Control className="input" onChange={handleChange} name="mail" type="email" placeholder="Email" value={contact.mail} />         
            <Button type="submit" className="add_button" onClick={handleClick} variant="outline-danger">Agregar</Button>
           
        </Form>
      </div>
    )
}
export default CreateContacts;