import Navbar from './Navbar';

const Header = () => {
  return (
    <>
      <div className="nav-area">
        <a href="/" className="logo">
          Logo
        </a>
        <Navbar />
      </div>
    </>
  );
};

export default Header;