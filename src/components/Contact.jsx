import React from "react";
import Button from 'react-bootstrap/Button'


function Contact(props) {

  function handleClick(event) {
   props.onClickDelete(props.id);
   event.preventDefault();  
  }
    return (
      <div className="card_container">
        <div className="contact_name"><h3><strong>{props.nombre}</strong></h3></div>
        <div className="contact_content">
          <p>{props.telefono}</p>
          <p>{props.mail}</p>
          <Button className="delete_button" variant="link" onClick={handleClick} type="submit">Borrar</Button>
        </div>
      </div>
    ) 
}

export default Contact;

