import {Container, Button, Form, Row, Col} from 'react-bootstrap';


function hireMe() {
  return (
    <Container className="my-5">
      <Form>
        <Form.Group className="mb-4 form formC" controlId="formTitle">
          <Form.Control type="title" placeholder="Title"/>
        </Form.Group>

        <Form.Group className="mb-4 form formC" controlId="formDesc">
          <Form.Control as="textarea" placeholder="Description Job" rows={5} />
        </Form.Group>

        <Form.Group className="mb-4 form" controlId="formProject">
          <Row>
            <Col>
              <Form.Control type="date" className="formC" placeholder="Start Project" />
            </Col>
            <Col>
              <Form.Control type="date" className="formC" placeholder="End Project" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-4 form formC" controlId="formPrice">
          <Form.Control type="number" placeholder="Price" />
        </Form.Group>

        <Form.Group align='center' className="mt-4">
          <Button className='btn2 mt-5' size="sm">
              Cancel
            </Button>
            <Button className='btn1 ms-2 mt-5' size="sm">
              Bidding
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default hireMe;