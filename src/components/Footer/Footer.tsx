import "./styles.scss";

const Footer: React.FC = () => {
  return (
    <footer className="customized-footer">
      <ul>
        <li>
          <a href="">Terms & Conditions</a>
        </li>
        <li>
          <a href="">Privacy Policy</a>
        </li>
        <li>
          <a href="">Licensing</a>
        </li>
      </ul>
      <div className="divisor-line"></div>
      <p>© 2025 Shield Plus. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
