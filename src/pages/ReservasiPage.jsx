import { useState } from 'react';
import{Container, Row, Col} from 'react-bootstrap'
import {FcGoogle} from 'react-icons/fc'
import loginImage from "../assets/catphoto.png"
import { Link } from 'react-router-dom'
import axios from 'axios';

const ReservasiPage = () => {
  // const [name,setName] = useState('');
  // const [mobile,setMobile] = useState('');
  // const [email,setEmail] = useState('');
 
  // const handleSubmit = () => {
  //   if(name.length === 0){
  //     alert("Name has left Blank!");
  //   }
  //   else if(mobile.length === 0){
  //     alert("Mobile has left Blank!");
  //   }
  //   else if(email.length === 0){
  //     alert("Email has left Blank!");
  //   }
  //   else{
  //     const url = '';
  //     let fData = new FormData();
  //     fData.append('name', name);
  //     fData.append('mobile', mobile);
  //     fData.append('email', email);
  //     axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));
  //   }
  // }
  return (
    <div className="login">
    <header className="w100 min-vh-100 d-flex align-items-center">
    <Container>
      <Row className="login-box d-flex align-items-center pt-lg-5">

        <Col  className="rounded-2" lg='6'>
          <div class="container">
            <div class="row">
              <div class="col-lg-10 col-xl-7 mx-auto">
                <h2>Reservasi Sekarang </h2>
                <br />
                    <form >
                    <div class="mb-3">
                        <input  id="name "type="text" placeholder="Nama Lengkap" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                    </div>
                    <div class="mb-3">
                        <input  id="Date "type="Date" placeholder="" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                    </div>
                    <div class="mb-3">
                        <input  id="email "type="email" placeholder="Email address" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                    </div>
                    <div class="mb-3">
                        <input  id="Hewan "type="text" placeholder="Jenis Hewan" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                    </div>
                    <div class="mb-3">
                        <input  id="mobile"type="text" placeholder="Nomor Whatsapp Anda" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                    </div>
                    <div>
                        <input  id="tujuan" type="" placeholder="Tujuan Kedatangan" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                    </div>
                    <br />
                    <div class="d-grid gap-2 mt-2">
                        <button type="submit" class="btn  btn-block text-uppercase mb-2 rounded-pill shadow-sm">Daftar</button>
                    </div>
                    <p>Note : Pihak kami akan menghubungi anda terkait keberlanjutan reservasi kedatangan anda melalui email ataupun no whatsapp</p>
                    </form>
              </div>
            </div>
          </div>
        </Col>
        <Col lg='6'className="pt-lg-0 pt-5 rounded-100" >
        <img src={loginImage} alt="hero-img"/>
        </Col>
      </Row>
    </Container>
    </header>
    </div>
  );
}

export default ReservasiPage;
