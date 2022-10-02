import React from 'react'
import {
  FaEnvelope,
  FaFemale,
  FaMale,
  FaMapMarked,
  FaPhone,
  FaRegMoneyBillAlt,
  FaUserCircle,
} from "react-icons/fa";
import {Container, Row, Col, Card, Button, Form, Image, Stack} from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import cam from '../../Components/Images/cam.png'

const initialUser = {
  greet: "",
  fullName: "",
}
function EditProfile() {

  // const ImgUpload =({
  //   onChange,
  //   src
  // })=>
  //   <label htmlFor="photo-upload" className="custom-file-upload fas">
  //     <div className="img-wrap img-upload" >
  //       <img for="photo-upload" src={cam}/>
  //     </div>
  //     <input id="photo-upload" type="file" onChange={onChange}/> 
  //   </label>

  return (
    <Container>
      <Row className='mt-5 ms-5 me-5'>
        <Col>
          <Form.Group>
            {/* <span className="mt-5 mb-3 box d-flex justify-content-center align-items-center">
              <a href="#" class="title"><b>Upload</b></a>Your Best Art
            </span> */}
            <label htmlFor="photo-upload" className="custom-file-upload fas mt-5 mb-3 box d-flex justify-content-center align-items-center">
                <div className="img-wrap img-upload" >
                  <a href="#" class="title"><b>Upload</b>{" "}</a>Your Best Art
                </div>
                <input id="photo-upload" type="file"
                // onChange={onChange} 
                /> 
              </label>
          </Form.Group>
        </Col>

        <Col className='mt-5' align='center'>
          <Form className='form1'>
            <Stack>
              <label htmlFor="photo-upload" className="custom-file-upload fas round mb-3">
                <div className="img-wrap img-upload" >
                  <img for="photo-upload" src={cam}/>
                </div>
                <input id="photo-upload" type="file"
                // onChange={onChange} 
                /> 
              </label>
              {/* Greeting */}
              <Form.Group className="mb-2 formC" controlId="greet">
                <Form.Control
                  type="text"
                  placeholder="Greeting"
                  className="bg-light text-black"
                  name="greet"
                  // onChange={handleChange}
                  autoFocus
                />
              </Form.Group>

              {/* Full Name */}
              <Form.Group className="mb-3 formC" controlId="fullName">
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  className="bg-light text-black"
                  name="fullName"
                  // onChange={handleChange}
                />
              </Form.Group>
            </Stack>
              
            <Button className='btn1 mx-auto' size="sm">
              Save
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default EditProfile