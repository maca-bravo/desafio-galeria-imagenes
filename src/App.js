import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Col, Row} from 'react-bootstrap';
import Header from './Header.jsx';
import CardImg from './CardImg.jsx';
import Footer from './Footer.jsx';


function App() {
  return (
    <div className="App">
      <Header titulo="Galería de Imágenes con React"></Header>
      <Container>
      <Row>
        <Col>
        <CardImg imagen="https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404_1280.jpg" titulo="Gatito" descripcion="Juguéton"></CardImg>
        </Col>
        <Col>
        <CardImg imagen="https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_1280.jpg" titulo="Perrito" descripcion="Feliz"></CardImg>
        </Col>
        <Col>
        <CardImg imagen="https://cdn.pixabay.com/photo/2016/10/01/19/20/mouse-1708177_1280.jpg" titulo="Ratita" descripcion="Aventurera"></CardImg>
        </Col>
        </Row>
        </Container>
        <Footer textfooter="Todos los derechos reservados"></Footer>
    </div>
  );
}

export default App;
