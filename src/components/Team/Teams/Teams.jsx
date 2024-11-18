import image from '../../../Img/Team/Image.png'
import icon from '../../../Img/Team/Icon.png'
import imagea from '../../../Img/Team/Imagea.png'
import imageb from '../../../Img/Team/Imageb.png'
import imagec from '../../../Img/Team/Imagec.png'
import icono from '../../../Img/Team/Icono.png'
import imagedd from '../../../Img/Team/Imagedd.png'
import imaged from '../../../Img/Team/Imaged.png'
import imagef from '../../../Img/Team/Imagef.png'
import imagej from '../../../Img/Team/Imagej.png'
import './Teams.css'

export const Teams = () => {
    return (
        <div>
            <section className="section_two">
                <div className="container">
                    <div className="cat">
                        <div className="oneblock">
                            <img src={image} alt="" />
                            <h1 className="h1_two">Charlotte Levi</h1>
                            <p className="p_two">Design, Australia</p>
                            <img className="imgtwo" src={icon} alt="" />
                        </div>
                        <div className="oneblock">
                            <img src={imagea} alt="" />
                            <h1 className="h1_two">Nattasha Julie</h1>
                            <p className="p_two">Design, Australia</p>
                            <img className="imgt" src={icono} alt="" />
                        </div>
                        <div className="oneblock">
                            <img src={imageb} alt="" />
                            <h1 className="h1_two">John Smith</h1>
                            <p className="p_two">Design, Australia</p>
                            <img className="imgtwo" src={icon} alt="" />
                        </div>
                        <div className="oneblock">
                            <img src={imagec} alt="" />
                            <h1 className="h1_two">Nora Owen</h1>
                            <p className="p_two">Design, Australia</p>
                            <img className="imgtwo" src={icon} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section_three">
                <div className="container">
                    <div className="cat">
                        <div className="oneblock">
                            <img src={imagedd} alt="" />
                            <h1 className="h1_two">Sofia Carter</h1>
                            <p className="p_two">Design, Australia</p>
                            <img className="imgtwo" src={icon} alt="" />
                        </div>
                        <div className="oneblock">
                            <img src={imaged} alt="" />
                            <h1 className="h1_two">Avery Jackson</h1>
                            <p className="p_two">Design, Australia</p>
                            <img className="imgt" src={icono} alt="" />
                        </div>
                        <div className="oneblock">
                            <img src={imagef} alt="" />
                            <h1 className="h1_two">Luna James</h1>
                            <p className="p_two">Design, Australia</p>
                            <img className="imgtwo" src={icon} alt="" />
                        </div>
                        <div className="oneblock">
                            <img src={imagej} alt="" />
                            <h1 className="h1_two">Gianna Mateo</h1>
                            <p className="p_two">Design, Australia</p>
                            <img className="imgtwo" src={icon} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

