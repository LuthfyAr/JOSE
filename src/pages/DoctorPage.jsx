import {Container, Row, Col} from "react-bootstrap";
import { Services } from "../data/index";
import FaqComponents from "../components/FaqComponents";


const DoctorPage = () => {
  return (
  <div className="doctor-page">
      <div className="doctor min-vh-100">
      <Container>
        <Row>
          <Col>
          <h1 className="fw-bold text-center">Dokter</h1>
          <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          </Col>  
        </Row>
        <Row>
        {Services.map((service) =>{
              return(
                <Col key={service.id} className="shadow rounded">
                  <img src={service.image} alt="" className='w-100 mb-5 rounded-top'/>
                  <h5 className="mb-5 px-3">{service.title}</h5>
                  <button className='btn btn-primary rounded-1'>{service.fasilitas}</button>
                </Col>
              )
            })};
        </Row>  
      </Container>
    </div>
  </div>

  );
};

export default DoctorPage