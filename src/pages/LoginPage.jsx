
import{Container, Row, Col} from 'react-bootstrap'
import {FcGoogle} from 'react-icons/fc'
import loginImage from "../assets/catphoto.png"
import { Link } from 'react-router-dom'


const LoginPage = () => {
  return (

    <div className="login">
    <header className="w100 min-vh-100 d-flex align-items-center">
    <Container>
      <Row className="login-box d-flex align-items-center pt-lg-5">
        <Col lg='6'className="pt-lg-0 pt-5 rounded-100" >
        <img src={loginImage} alt="hero-img"/>
        </Col>
        <Col  className="rounded-2" lg='6'>
          <div class="container">
            <div class="row">
              <div class="col-lg-10 col-xl-7 mx-auto">
                <h2>Sign In To Your Account </h2>
                    <p>Doesn't have account? <Link to='/daftar'>Sign up</Link></p>
                    <form >
                      <div class="mb-3">
                        <input  id="inputEmail "type="email" placeholder="Email address" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                      </div>
                      <div class="mb-3">
                        <input  id="inputPassword "type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                      </div>
                      <div class="d-grid gap-2 mt-2">
                        <button type="submit" class="btn  btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign In</button>
                      </div>
                    <div>
                      <p> or </p>
                    </div>
                    <div class=" button2 d-grid gap-2 mt-2">
                        <button type="submit" class="btn btn-block  mb-2 rounded-pill shadow-sm"> <FcGoogle />Google</button>
                    </div>
                    </form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </header>
    </div>
  );
}

export default LoginPage;
