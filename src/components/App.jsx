import React, { useState, useEffect } from "react";
import Contact from "./Contact";
import Input from "./CreateContact";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import db from "../firebase";


function App() {
    
    const [contactBook, setContactBook] = useState([]);

    useEffect(()=>{
        const contactRef = db.collection("contacts")
        contactRef
            .onSnapshot(contacts => {
                    setContactBook([]);
                    contacts.forEach(contact => {
                    const data = contact.data()
                    const id = contact.id
                                        
                    let allData = {...data, id}
                    setContactBook(prevContacts => [...prevContacts, allData])
                   })
                  })             
    }, [])     
                      
    function deleteItem(id) {
       const contactRef = db.collection("contacts") 
       contactRef.doc(id).delete().then(
           () => {console.log("deleted")})
        }
   
    return (
       <div className="container-gral">
            <div className="heading_container"></div>
                <Container fluid >
                    <Row> 
                        <Col lg="auto" md="auto" sm={12}>
                            <Input />
                        </Col>
                        <Col key="contact_card">
                            <Container fluid className="contact_container">
                                <Row>    
                                    {contactBook.map((contact) =>
                                        <Col key={contact.id} lg={3} md={12} xs={12} >
                                            <Contact 
                                                key={contact.id}
                                                id={contact.id}
                                                nombre={contact.nombre}
                                                telefono={contact.telefono}
                                                mail={contact.mail}
                                                onClickDelete={deleteItem}                                                              
                                            />
                                        </Col>
                                    )}   
                                </Row>
                            </Container> 
                        </Col> 
                    </Row>  
                </Container>
            <div className="footer_container"></div>   
        </div>   
    );       
}

export default App;