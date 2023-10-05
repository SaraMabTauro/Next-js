
import React, { useState } from 'react';

const Navigation = () => {
  const [isRegionPickerOpen, setIsRegionPickerOpen] = useState(false);

  const toggleRegionPicker = () => {
    const regionPicker = document.getElementById('region-picker');
    const currentHeight = parseFloat(getComputedStyle(regionPicker).height);

    if (currentHeight === 0) {
      for (let i = 0; i <= 510; i += 10) {
        (function (height) {
          setTimeout(() => {
            regionPicker.style.height = height + 'px';
          }, i);
        })(i);
      }
    } else {
      for (let i = 510; i >= 0; i -= 10) {
        (function (height) {
          setTimeout(() => {
            regionPicker.style.height = height + 'px';
          }, (510 - height) * 2);
        })(i);
      }
    }

    setIsRegionPickerOpen(prevState => !prevState);
  };

  const regionPickerStyle = {
    height: isRegionPickerOpen ? '510px' : '0',
  };

  return (
    <nav className="header-down">
      <div className="icons">
        <a href="#">
          <i className="fas fa-search"></i>
        </a>
        <a href="#" onClick={toggleRegionPicker}>
          <i className="fas fa-globe"></i>
        </a>
        <a href="#">
          <i className="fas fa-language"></i>
        </a>
      </div>
      <div id="region-picker" className="region-picker" style={regionPickerStyle}>
        {/* Content of the region picker */}
      </div>
    </nav>
  );
};

export default Navigation;

