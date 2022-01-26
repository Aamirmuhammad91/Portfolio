import './topbar.scss';
import { Person, Mail } from '@material-ui/icons';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')} id='topbar'>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            gentle.
          </a>
          <div className='itemContainer'>
            <Person className='icon' />
            <span>+49 1781 6678 11</span>
          </div>
          <div className='itemContainer'>
            <Mail className='icon' />
            <span>aamirmuhammad91@gmail.com</span>
          </div>
        </div>
        <div className='right'>
          <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  );
}
