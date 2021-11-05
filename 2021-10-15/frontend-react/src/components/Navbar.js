import './Navbar.css'
import { Link } from "react-router-dom";
import { Button } from 'antd';

function Navbar() {
  return(
    <div className="navbar">
        <Link to="/">
            <Button>Avaleht</Button>
        </Link>
        <Link to="/posts">
            <Button>Postitused</Button>
        </Link>
        <Link to="/login">
            <Button>Logi sisse</Button>
        </Link>
    </div>
  )
}

export default Navbar;