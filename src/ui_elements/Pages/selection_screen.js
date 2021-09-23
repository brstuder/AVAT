
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import MainUpload from './main_upload'
import MainMultiview from './main_muiltiview'
import { Container, Jumbotron } from "react-bootstrap";
import Instructions from "../Components/instructions";

//<img src={process.env.PUBLIC_URL + '/favicon.ico'} alt="logo" style={{width: "30%"}} />
function SelectionScreen(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
    const [upload, setUpload] = useState(false)
    const handleUpload = (event) => {
        setUpload(!upload)
    }

    const [multiview, setMultiview] = useState(false)
    const handleMultiview = (event) => {
        setMultiview(!multiview)
    }

    if(upload){
        return (<MainUpload/>)
    }else if(multiview){
        return (<MainMultiview/>)
    }else{
        return (
            <div>
                <Modal show={show} onHide={handleClose} size='lg'>
                    <Modal.Header closeButton>
                    <Modal.Title>Instructions</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><Instructions></Instructions></Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
                <Jumbotron fluid>
                    <Container>
                        <div class="row align-items-center">
                            <div class="pb-4 col-md-6 col-lg-7">
                                <h0 style={{fontSize: "50px"}}>
                                    AVAT{"  "}
                                    <img class="" src={process.env.PUBLIC_URL + '/favicon.ico'} alt="logo" style={{width: "9%"}}/>
                                </h0>
                                <h5 > Online tool to mass annotate videos for AI/ML Research</h5>
                                <Button size="lg" onClick={handleShow}>Instructions</Button>
                            </div> 

                            <div class="col-md-6 col-lg-5">
                                <div class="row">
                                    <div class="col">
                                        <div class="card my-2">
                                            <Button onClick={handleUpload} variant="outline-success">Video Upload</Button>
                                        </div> 
                                    </div>
                                    <div class="col-12">
                                        <div class="card my-2">
                                            <Button onClick={handleMultiview} variant="outline-success">Multiview</Button>
                                        </div> 
                                    </div>
                                </div>
                            </div> 
                        </div> 
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}

export default SelectionScreen;