import React, { useState } from 'react';

const HamurDropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);

  };

  return (
    <div>
      <h3>Hamur Seç*</h3>
      <select 
        value={selectedOption} 
        onChange={handleSelect} 
        aria-label="Hamur Sec"
      >
        <option value="" disabled>Seçim Yap</option>
        <option value="İnce kenar">İnce kenar</option>
        <option value="Kalın kenar">Kalın kenar</option>
        <option value="Peynirli kenar">Peynirli kenar</option>
        <option value="Sarımsaklı kenar">Sarımsaklı kenar</option>
      </select>
    </div>
  );
};

export default HamurDropdown;
