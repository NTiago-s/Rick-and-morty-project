import { Link } from "react-router-dom";
import '../styles/about.css'
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";

const About = () => {
    return (
        <div className="about-container">
            <div className="button-container__about">
                <Link to='/home'>
                    <button className="button-about"> Back Home </button>
                </Link>
            </div>
            <div className="container-info">
                <div className="imgContainerAbout">
                    <div className="imgAbout">
                        <img src="../../img/Foto About.jpg" alt="Imagen del Autor" className="imagenAbout" />
                    </div>
                </div>
                <div className="data-about">
                    <div className="datosAbout">
                        <h2>Name: "Navarro Tiago" </h2>
                        <h2>Age: "19"</h2>
                        <h2>Location: Posadas/Misiones/Argentina</h2>
                        <h2>Contact:</h2>
                        <div className='Redes'>
                            <a href="https://www.instagram.com/tiagonavarro_/" target='_BLANK'>
                                <AiFillInstagram className="icons" />
                            </a>
                            <a href="https://github.com/NTiago-s" target='_BLANK'>
                                <AiFillGithub className="icons" />
                            </a>
                            <a href="https://www.linkedin.com/in/tiago-navarro-30bba2291/" target='_BLANK'>
                                <AiFillLinkedin className="icons" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About;