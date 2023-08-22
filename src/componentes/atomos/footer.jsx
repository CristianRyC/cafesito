import '../../assets/styles/Footer.css'
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RiWhatsappFill, RiInstagramFill } from "react-icons/ri";
function Tabla() {
    return (
        <>
            <div id="footer" className='footer'>
                <div className="container">
                    <div className="row text-center text-xs-center text-sm-left text-md-left">
                        <div className="col-xs-12 col-sm-4 col-md-4"><br />
                            <h5>Ubicacion</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href="https://goo.gl/maps/vqoTEATpJRtFUKgH6"><i className="fa fa-angle-double-right"></i>Plaza Wompana sobre el Blvd. Belisario Domínguez</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4"> <br />
                            <h5>Horario</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a><i className="fa fa-angle-double-right"></i>Lunes a viernes | 6 am a 11 pm</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4"> <br />
                            <h5>Ayuda</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a><i className="fa fa-angle-double-right"></i>administracion@peko.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-7">
                            <ul className="list-unstyled list-inline social text-center">
                                <ul class="wrapper">
                                    <a href="http://facebook.com">
                                        <li class="icon facebook">
                                            <span class="tooltip">Facebook/@pekoOficial</span>
                                            <span><i class="fab fa-facebook-f"></i></span>
                                        </li></a>
                                    <a href="http://twitter.com">
                                        <li class="icon twitter">
                                            <span class="tooltip">Twitter/@pekoOficial</span>
                                            <span><i class="fab fa-twitter"></i></span>
                                        </li></a>
                                    <a href="http://tiktok.com">
                                        <li class="icon tiktok">
                                            <span class="tooltip">Tiktok/@pekoOficial</span>
                                            <span><i class="fab fa-tiktok"></i></span>
                                        </li></a>
                                    <a href="http://instagram.com">
                                        <li class="icon instagram">
                                            <span class="tooltip">Instagram/@pekoOficial</span>
                                            <span><i class="fab fa-instagram"></i></span>
                                        </li></a>
                                    <a href="http://web.whatsapp.com"> <li class="icon whatsapp">
                                        <span class="tooltip">Whatsapp</span>
                                        <span><i class="fab fa-whatsapp"></i></span>
                                    </li></a>
                                </ul>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                            <p id='foot'>Con amor y un buen cafe  [Peko]</p>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Tabla;