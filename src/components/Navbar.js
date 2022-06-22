//import logo from './logo.svg';
import '../App.css';
import Troll from "../images/Troll.png"

function Navbar() {
  return (
   <nav>
    <img src={Troll} alt="" width="40px" className='Troll'/>
    <h1 className='heading'>Meme Generator</h1>
   </nav>
  );
}

export default Navbar;
