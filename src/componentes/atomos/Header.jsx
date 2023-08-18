import { useState } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ScrollToTop from "react-scroll-to-top";
import Logo from "../../assets/images/LogoPeko.png"
import '../../assets/styles/HeaderStyle.css'

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid"><div className='logo'>
            <img src={Logo} alt="logo" />
          </div>
            <Link class="navbar-brand" to="/">PEKO</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/">HOME</Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#conocenos">CONOCENOS</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#footer">CONTACTANOS</a>
                </li>
                <li class="nav-item " >
                  <a class="nav-link " onClick={handleShow}>REGISTRATE</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>



 {/*      <div className="navbar">
        <div className='logo'>
          <img src={Logo} alt="logo" />
          <h1>Peko</h1>
        </div>

        <div>
          <Link to="/" className='sinlinea'><button className='boton'>HOME</button></Link>
          <a href="#conocenos" className='sinlinea'><button className='boton'>CONOCENOS</button></a>
          <a href="#footer" className='sinlinea'><button className='boton'>CONTACTO</button></a>
          <button onClick={handleShow} className='boton'>REGISTRAR</button>
        </div>
      </div>
 */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registrate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>:)</Form.Label> */}
              <Form.Control
                type="text"
                placeholder="Nombre"
                autoFocus
              />
              <br />
              <Form.Control
                type="telephone"
                placeholder="Telefono"
                autoFocus
              /> <br />
              <Form.Control
                type="email"
                placeholder="Correo"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="App">
        <ScrollToTop smooth color="#451c04" />
      </div>
    </>
  );
}

export default Header;