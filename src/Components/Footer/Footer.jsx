
import './Footer.scss';


const Footer = () => {

    return (
        <div className='footer'>
            <div className="col1">
                <h3>USEFUL LINKS</h3>

            </div>
            <div className="col2">
                <h3>NewsLetter</h3>
                <form action="">
                    <input type="text" placeholder='Enter your Email ' className='footerInput'/>
                    <br />
                    <button className='footerButton'>subscribe</button>
                </form>
            </div>
            <div className="col3">
                <h3>Contact Us</h3>
                <p>Mamta Nagar Road, BSK 3 <br />Rajnandgaon, India</p>
                <div className="social-icons">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-pinterest"></i>
                    <i className="fab fa-instagram"></i>
                </div>
            </div>
            <p className='footerWeb'>© 2023 - 2024  Ashwani's BlogWorld.com. All Rights Reserved</p>
        </div>
    )
}

export default Footer