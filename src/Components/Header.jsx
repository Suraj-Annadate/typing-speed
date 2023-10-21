import React from 'react';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="header">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '.3rem' }}>
        <span className='logo'>TypeCat</span>
        <span style={{ padding: "1rem" }} onClick={() => navigate('/')}><KeyboardIcon size="2em" /></span>
      </div>

    </div>
  );
}

export default Header;
