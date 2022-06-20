import "./Header.css";

const Header = (props) => {
  return (
    <header className="Header">
      <h2 style={{ fontSize: props.fontSize }}>{props.title}</h2>
    </header>
  );
};

export default Header;
