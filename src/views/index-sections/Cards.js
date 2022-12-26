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
import _0 from '../../assets/img/Trampil.jpeg';
import _2 from '../../assets/img/Cefopod_cv.jpeg';
import _3 from '../../assets/img/Cefopod_100.jpeg';
import _4 from '../../assets/img/anpa-40.jpeg';
import _1 from '../../assets/img/Ace-ps.jpeg';

export default function App(props) {
  const images = [_0, _1, _2, _3, _4]
  return (
    <Col sm="5" style={{marginBottom: "80px"}}>
    <MDBCard>
      <MDBCardImage position='top' alt='...' src={images[props.ind]} />
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