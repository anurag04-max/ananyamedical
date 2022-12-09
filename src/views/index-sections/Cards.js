import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import { Container, Row, Col } from "reactstrap";


export default function App(props) {
  return (
    <Col sm="5" style={{marginBottom: "80px"}}>
    <MDBCard>
      <MDBCardImage position='top' alt='...' src='https://mdbootstrap.com/img/new/standard/city/062.webp' />
      <MDBCardBody>
        <MDBCardTitle>{props.Name}</MDBCardTitle>
        <MDBCardText>
          {props.Salt}
        </MDBCardText>
      </MDBCardBody>
      <MDBListGroup flush>
        {props.Salts.map(e => <MDBListGroupItem><p style={{fontWeight:"bold"}}>{e.Salt_name}</p>  {e.Description}</MDBListGroupItem>)}
      </MDBListGroup>
    </MDBCard>
    </Col>
  );
}