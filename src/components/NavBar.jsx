import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
          <Link to="/mailboxes">Mailboxes</Link>
          </li>
          <li>
          <Link to="/new">New Mailbox</Link>
          </li>
          <li>
          <Link to="/new-letter">New Letter</Link>
          </li>
        </ul>
      </nav>
    );
  };

export default NavBar;