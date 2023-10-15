import { Container, Row, Col } from "react-bootstrap";

const SymptomsPage = () => {
  return (
<div>
      <div className="fasilitas-ditawarkan-page">
        <div className="fasilitas-ditawarkan min-vh-100">
          <Container>
            <Row>
              <Col>
              <h2 className="fw-bold text-center mb-2">Symptoms Checker Berbasis AI</h2>
              <p className="text-center">Symptoms Checker Berbasis AI adalah cek gejala pet kesayangan anda menggunakan bantuan AI</p>
              </Col>
            </Row>
            <Row>
              <Col>
              <div>
              <form >
                    <div class="mb-3">
                      <p className="">Masukkan Jenis Pet Anda</p>
                        <input  id="jenis "type="text" placeholder="Masukkan Jenis Pet Anda" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                    </div>
                    <div class="mb-3">
                    <p className="">Masukkan Keluhan Gejala</p>
                        <input  id="gejala "type="text" placeholder="Masukkan Gejala yang dialami" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                    </div>
                    <div class="mb-3">
                    <p className="">Deskripsi Gejala</p>
                        <input  id="email "type="email" placeholder="Email address" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                    </div>
                    <br />
                    <div class="d-grid gap-2 mt-2">
                        <button type="submit" class="btn  btn btn-success rounded-1 me-2">Analisis</button>
                    </div>
                    <br />
                    <div class="mb-3">
                        <input  id="hasil "type="text" placeholder="Hasil Analisis Gejala" required="" class="form-control border-0 shadow-sm px-4 text-primary" />
                    </div>
                    <p>Note : Hasil analisis merupakan analisis yang dilakukan oleh AI</p>
                    </form>
              </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default SymptomsPage
