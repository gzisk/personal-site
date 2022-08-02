import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me2 copy.jpg`} alt="" />
      </Link>
      <header>
        <h2>Qingzhong(Garza) Zhou

        </h2>

        <p><a href="mailto:2123@nyu.edu">QZ2123@nyu.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hey, I&apos;m Qingzhong Zhou. You can call me Garza. I like watching Breaking Bad.
        I am majoring <a href="https://cs.nyu.edu">Computer Science</a> and <a href="https://as.nyu.edu/linguistics/homepage.html">Linguistics</a> @<a href="https://nyu.edu">NYU</a> , and currently working as a Backend Data Engineer intern at <a href="https://www.duopeak.com/">Duopeak</a>.

      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Qingzhong Zhou <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
