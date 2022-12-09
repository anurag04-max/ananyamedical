import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs"  style={{backgroundColor:"#47B5FF"} }>
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category" style={{color:"black",size:"12px",fontWeight:"600"}}>OUR VALUES</p>
              <Card>
                
              <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1" >
                      <p style={{color:"black",size:"12px",fontWeight:"450",textAlign:"left"} }>
                      We feel it is our social responsibility to ease the 
                      sufferings of masses. We consider achieving the ultimate 
                      customer satisfaction as the fundamental of our business
                       by providing products of unmatched quality and the services 
                       of highest level.
                      </p>
                    </TabPane>
                
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category" style={{color:"black",size:"12px",fontWeight:"600"}}>OUR VISION</p>
              <Card>
                
              <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1" >
                      <p style={{color:"black",size:"12px",fontWeight:"450",textAlign:"left"} }>
                      Our vision is to deliver well above our channel 
                      partner's expectations. Our mission is to provide 
                      quality medicines at affordable price to all sections of society.Providing 
                      best service to all our customers. 
                      &nbsp;
                      &nbsp;
                      &nbsp;
                      &nbsp;
                      &nbsp;
                      &nbsp;
                      <br/>
                      </p>
                    </TabPane>
                
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;
