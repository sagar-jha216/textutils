import React from 'react';

export default function Navbar(props) {

  // Function to change the page's background color
  const handleColorChange = (color) => {
    document.body.style.backgroundColor = color;
  }

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">TextUtils</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li> */}
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>

            {/* Buttons to change the page background color */}
            <button type="button" className="btn btn-primary mx-2" style={{ height: `30px`, width: `30px` }} onClick={() => handleColorChange('blue')}></button>
            <button type="button" className="btn btn-secondary mx-2" style={{ height: `30px`, width: `30px` }} onClick={() => handleColorChange('grey')}></button>
            <button type="button" className="btn btn-success mx-2" style={{ height: `30px`, width: `30px` }} onClick={() => handleColorChange('green')}></button>
            <button type="button" className="btn btn-danger mx-2" style={{ height: `30px`, width: `30px` }} onClick={() => handleColorChange('red')}></button>
            <button type="button" className="btn btn-warning mx-2" style={{ height: `30px`, width: `30px` }} onClick={() => handleColorChange('yellow')}></button>
          </div>
        </div>
      </nav>
    </div>
  );
}
