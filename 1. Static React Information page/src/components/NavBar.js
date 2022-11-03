import Logo from "../images/logo192.png";
function Header() {
  return (
    <nav className="nav">
      <div className="logo">
        <img src={Logo} alt=" "></img>
        <p>ReactFacts</p>
      </div>
      <p>React Course - Project 1</p>
    </nav>
  );
}
export default Header;
