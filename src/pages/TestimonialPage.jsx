import {Container, Row, Col} from "react-bootstrap";
import { testimonial } from "../data/index";
import FaqComponents from "../components/FaqComponents";

const TestimonialPage = () => {
  return (
    <div className="testimonial-page">
      <div className="testimonial">
      <Container>
        <Row>
          <Col>
          <h1 className="text-center fw-bold">Semua Testimonial</h1>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ullam.</p>
          </Col>
        </Row>
        <Row>
        {/* {testimonial.map((data) => {
          return (
            <col key={data.id} className="shadow-sm">
              <p className="desc">{data.desc}</p>
              <div className="people">
                <img src={data.image} alt="" />
                <div>
                  <h5 className="mb-1">{data.name}</h5>
                  <p className="m-0 fw-bold">{data.skill}</p>
                </div>
              </div>
            </col>
          )
        })} */}
        </Row>
      </Container>
      </div>
    </div>
  );
};

export default TestimonialPage