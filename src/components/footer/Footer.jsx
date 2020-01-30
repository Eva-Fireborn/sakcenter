import React from 'react';
import SCLogo from '../../img/SAKCENTER_LOGO_bw_2013.png';
import facebook from '../../img/facebook.png';
import instagram from '../../img/instagram.png';
import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="SClogo">
                <img src={SCLogo} alt="Sakcenter logo" />
            </div>
            <div className="companyAddress">
                <p>Sakcenter</p>
                <p>Polstjärnegatan 14</p>
                <p>417 56 Göteborg</p>
                <p>info@sakcenter.se</p>
            </div>
            <div className="socialMedia">
                <div>
                    <h4>Följ oss på sociala medier</h4>
                </div>
                <div className="socialMediaInner">
                    <a href="https://www.facebook.com/sakcenterpropsrental/" target="blank">
                        <div className="socialMediaLogo">
                            <img src={facebook} alt="facebook logo" />
                        </div>
                    </a>
                    <a href="https://www.instagram.com/sakcenter/" target="blank">
                        <div className="socialMediaLogo">
                            <img src={instagram} alt="instagram logo" />
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;