import React, { useState } from "react";
import { Row, Col, Image, Form, Button, Stack } from 'react-bootstrap'
// import { Styles } from "./Style";
import ModalRegister from "../../Components/Auth/ModalRegister";
import ModalLogin from "../../Components/Auth/ModalLogin";
import Landing from '../../Components/Images/Landing.png';
import Head from '../../Components/Images/wayslogo.png';
import Big from '../../Components/Images/Assets.png';

const Lands = () => {
  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);
  
  const showLogin = () => setShow(true);
  const closeLogin = () => setShow(false);

  const showRegister = () => setShows(true);
  const closeRegister = () => setShows(false);
  
  return (
  <header>
        <div
            className='p-5 text-center bg-image'
            style={{ backgroundImage: `url(${Landing})`, 
            backgroundPosition: 'center',
            backgroundSize: 'cover',  
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
            }}
        >
        <Row className='ms-5 me-5'>
            <Col className='mt-5'>
              <Stack className='mt-5'>
                <Image 
                    className='mt-4'
                    alt='Head Image'
                    fit='cover'
                    align='left'
                    width='55%'
                    src={Head}/>
                <Form.Text className='text-start me-5'>
                  <p className='thin'><b className='bold'>show your work to inspire everyone</b>
                  <br/>
                  Ways Exhibition is a web design creators gather to share their work with other creators
                  </p>
                </Form.Text>
              </Stack>
              <div align='left'>
                <Button className='btn1' size="sm" onClick={showRegister}>
                  Join Now
                </Button>
                <ModalRegister closeRegister={closeRegister} show={shows} />
                <Button className='btn2 ms-2' size="sm" onClick={showLogin}>
                  Login
                </Button>
                <ModalLogin closeLogin={closeLogin} show={show} />
              </div>
            </Col>

            <Col>
              <Image
                className='mt-4'
                alt='Hero Image'
                fit='cover'
                align='center'
                width='100%'
                src={Big} />
            </Col>
        </Row>
      </div>
    </header>
  );
}

export default Lands;
