import {Container, Row, Col} from "react-bootstrap";
import { Services, doctors } from "../data/index";
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
        {doctors.map((doctor) =>{
          return(
            <Col key={doctor.id} className='mb-5 '>
              <img src={doctor.image} alt="" />
              <div className='people'>
                <p className='desc shadow-sm mt-3'>{doctor.desc}</p>
                <div>
                  <h5 className='mb-1'>{doctor.name}</h5>
                  <p className='m-0 fw-bold'>{doctor.skill}</p>
                </div>
              </div>
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
