import React from 'react';

import { Link } from 'react-router-dom';

import UpdateFormComponent from './UpdateFormComponent';

export default function UpdateListingPageLayout({ hostInfo, onUpdate }) {
  if (hostInfo !== null) {
    return (
      <div className="UpdateListingPageLayout">
        <header>
          <nav>
            <div className="nav-wrapper indigo">
              <Link to="/" className="brand-logo">
                Tiny House Hosting
              </Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link to="/registration">List Your Backyard</Link>
                </li>
                <li>
                  <Link to="/">Explore</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <div className="container">
          <div className="section">
            <div className="row">
              <UpdateFormComponent hostInfo={hostInfo} onUpdate={onUpdate} />
            </div>
          </div>
        </div>

        <footer className="page-footer indigo">
          <div className="footer-copyright indigo">
            <div className="container">2017 Tiny House Village </div>
          </div>
        </footer>
      </div>
    );
  } else {
    return <div>LOADING ONE SECOND :P</div>;
  }
}