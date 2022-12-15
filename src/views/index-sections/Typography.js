import React from "react";
import Cards from './Cards';
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Typography() {
  var Products = [
    {
        Name: "Cefopod-CV",
        ind: 2,
        Salt: "Cefpodoxime Proxetil 200 mg + Pot Clavulanate 125 mg",
        Salts: [
            {
                Salt_name: "",
                Description: "Proven superiority over cefixime, co-amoxyclav, cefaclor",
            },
            {
                Salt_name: "",
                Description: "Useful alterative to parenteral therapy",
            },
            {
                Salt_name: "",
                Description: "Effective in Pharyngotonsilitis"
            },
            {
                Sale_name: "",
                Description: "Promising results in Typhoid fever"
            },
            {
                Sale_name: "",
                Description: "Similar spectrum to parental ceftriaxone in LTRI"
            }
        ],
        image: ""
    },
    {
        Name: "ACE-PS",
        ind: 1,
        Salt: "Aceclofenac 100 mg + Paracetamol 325 mg + Serratiopeptidase 15 mg",
        Salts: [
            {
                Salt_name: "Serratiopeptidase",
                Description: "Fibrinolytic & anti-inflammatory activity Accelerate healing, Reduce swelling & Drains out Fluid from inflammed area."
            },
            {
                Sale_name: "Aceclofenac",
                Description: "Superior anti-inflammatory effect least GI side effects."
            },
            {
                Salt_name: "Paracetamol",
                Description: "Trusted analgesic antipyrectic, works in synergy with aceclofenac."
            }
        ],
        image: ""
    },
    {
        Name: "Cefapod- 100/200",
        ind: 3,
        Salt: "Cefpodoxime Proxetil 100 mg/ 200 mg",
        Salts: [
            {
                Salt_name: "",
                Description: "Proven superiority over cefixime, co-amoxyclav, cefaclor",
            },
            {
                Salt_name: "",
                Description: "Useful alterative to parenteral therapy",
            },
            {
                Salt_name: "",
                Description: "Effective in Pharyngotonsilitis"
            },
            {
                Sale_name: "",
                Description: "Promising results in Typhoid fever"
            },
            {
                Sale_name: "",
                Description: "Similar spectrum to parental ceftriaxone in LTRI"
            }
        ],
        image: ""
    },
     {
        Name: "Trampil",
        ind: 0,
        Salt: "Tramadol 37.5 mg., Paracetamol 325 mg.",
        Salts: [
            {
                Salt_name: "",
                Description: "Combines the strength of Tramadol and Paracetamol"
            }
        ],
        image: ""
    },
    {
        Name: "ANPA-40",
        Salt: "Pantoprazole 40 mg",
        Salts: [
            {
                Salt_name: "Pantoprazole",
                Description: "The only PPi that binds to cysteine 822 (buries deep in the proton pump) and cysteine 813 to exhibit prolonged acid control"
            }
        ],
        image: ""
    }
];
  return (
    <>
      <div className="section">
        <Container>
          <h3 className="title">Products</h3>          
          <div className="space-50"></div>
          <div id="images">
            <Row style={{justifyContent: "space-between"}}>
              {Products.map(e => <Cards Name={e.Name} Salt={e.Salt} Salts={e.Salts} ind={e.ind}/>)}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Typography;
