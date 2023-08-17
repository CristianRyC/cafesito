import ScrollToTop from "react-scroll-to-top";
import "../../assets/styles/InfoFooter.css";

function InFooter() {
    return (
        <>
            <div>
                <div className="td-im">
                    <p className="txt-im">
                        Para ti
                    </p>
                    <p className="txt-im2" >
                        ¡Bienvenidos a nuestra cafetería! Nos complace tenerlos aquí y esperamos que disfruten de nuestro café y comida.
                        Nuestro objetivo es ofrecerles una experiencia única y memorable cada vez que nos visiten. Si tienen alguna pregunta o inquietud,
                        no duden en hacérnoslo saber.
                        ¡Gracias por elegirnos y esperamos verlos pronto!
                    </p>
                </div>
            </div>
            <div className="App">
                <ScrollToTop smooth color="#000" />
            </div>
        </>
    );
}

export default InFooter;