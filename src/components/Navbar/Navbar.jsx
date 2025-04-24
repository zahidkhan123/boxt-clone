import React from 'react';
import './TopbarNav.css';

const TopbarNav = () => {
  return (
    <div className="topbar px-5 py-2 d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center gap-5">
        <span className="brand text-danger fs-1">B O X T</span>

        <button className="btn btn-dark rounded-pill px-4 py-3 fs-6">
          Get a fixed price <span className="ms-1">&#9662;</span>
        </button>

        <button className="btn btn-link text-dark fs-6 dropdown-toggle px-0">
          Advice & FAQs
        </button>

        <button className="btn btn-link text-dark fs-6 dropdown-toggle px-0">
          About BOXT
        </button>
      </div>

      <button className="btn rounded-pill px-4 py-2 help-btn d-flex align-items-center gap-2">
        <span className="text-dark">Help</span>
        <span className="text-dark fs-5">❓</span>
      </button>
    </div>
  );
};

export default TopbarNav;
