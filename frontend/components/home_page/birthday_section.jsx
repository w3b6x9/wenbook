import React from 'react';

const BirthdaySection = () => {
  return (
    <div className='birthday-section'>
      <div className='birthday-layout'>
        <i className="fa fa-gift gift-icon" aria-hidden="true" />
        <div className='bday-user-name'>
          Uladzislau Sasnouski
        </div>
        <div className='bday-text'>{"'"}s birthday was yesterday</div>
      </div>
    </div>
  );
};

export default BirthdaySection;
