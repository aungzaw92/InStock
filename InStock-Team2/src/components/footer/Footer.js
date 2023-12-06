import "../footer/Footer.scss";
import Logo from "../../components/header/Logo";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <Logo />
      </div>
      <div className="footer__p">
        <p>InStock Inc. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
