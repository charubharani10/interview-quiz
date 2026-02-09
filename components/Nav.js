import { useState, useEffect } from "react";
import Link from "next/link";
import StickyHeader from "react-sticky-header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

import navStyles from "../styles/Nav.module.css";
import "react-sticky-header/styles.css";

import logo from "../public/logo.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleSection = (e) => {
    setActiveSection(e.target.innerText);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 400);
    });
  }, []);

  return (
    <StickyHeader
      header={
        <div
          className={`${navStyles.header_root} ${
            !scroll ? navStyles.header_root_bg_none : navStyles.header_root_bg
          }`}
        >
          <div className={navStyles.header_logo}>
            <Link href="/" className={navStyles.logoLink}>
              <img src={logo?.src} alt="Quiz Interview" title="Quiz Interview" />
            </Link>
          </div>

          <div className={navStyles.hamburger} onClick={toggleMenu}>
            <div className={isOpen ? `${navStyles.line} ${navStyles.open}` : `${navStyles.line}`}></div>
            <div className={isOpen ? `${navStyles.line} ${navStyles.open}` : `${navStyles.line}`}></div>
            <div className={isOpen ? `${navStyles.line} ${navStyles.open}` : `${navStyles.line}`}></div>
          </div>

          <div className={`${isOpen ? `${navStyles.menu} ${navStyles.open}` : navStyles.menu}`}>
            <ul className={`${navStyles.header_links}`}>
              <li className={navStyles.header_link}>
                <Link href="/" className={navStyles.navLink} onClick={closeMenu}>
                  Home
                </Link>
              </li>

              <li className={`${navStyles.header_links} ${activeSection === "Programming" ? navStyles.open : ""}`}>
                <span onClick={(e) => toggleSection(e)}>
                  Programming <FontAwesomeIcon icon={faCaretRight} />
                </span>
                <div className={navStyles.pannelWrapper}>
                  <div className={navStyles.arrowUp}></div>
                  <div className={navStyles.pannelColumn}>
                    <Link href="/test/html" className={navStyles.navLink} onClick={closeMenu}>HTML</Link>
                    <Link href="/test/css" className={navStyles.navLink} onClick={closeMenu}>CSS</Link>
                    <Link href="/test/javascript" className={navStyles.navLink} onClick={closeMenu}>JavaScript</Link>
                    <Link href="/test/reactjs" className={navStyles.navLink} onClick={closeMenu}>React JS</Link>
                  </div>
                  <div className={navStyles.pannelColumn}>
                    <Link href="/test/nodejs" className={navStyles.navLink} onClick={closeMenu}>Node.js</Link>
                    <Link href="/test/python" className={navStyles.navLink} onClick={closeMenu}>Python</Link>
                  </div>
                </div>
              </li>

              <li className={`${navStyles.header_links} ${activeSection === "Data Structures" ? navStyles.open : ""}`}>
                <span onClick={(e) => toggleSection(e)}>
                  Data Structures <FontAwesomeIcon icon={faCaretRight} />
                </span>
                <div className={navStyles.pannelWrapper}>
                  <div className={navStyles.arrowUp}></div>
                  <div className={navStyles.pannelColumn}>
                    <Link href="/test/arrays" className={navStyles.navLink} onClick={closeMenu}>Arrays</Link>
                    <Link href="/test/linked-lists" className={navStyles.navLink} onClick={closeMenu}>Linked Lists</Link>
                    <Link href="/test/stacks" className={navStyles.navLink} onClick={closeMenu}>Stacks</Link>
                    <Link href="/test/queues" className={navStyles.navLink} onClick={closeMenu}>Queues</Link>
                  </div>
                  <div className={navStyles.pannelColumn}>
                    <Link href="/test/trees" className={navStyles.navLink} onClick={closeMenu}>Trees</Link>
                    <Link href="/test/graphs" className={navStyles.navLink} onClick={closeMenu}>Graphs</Link>
                    <Link href="/test/hashing" className={navStyles.navLink} onClick={closeMenu}>Hashing</Link>
                    <Link href="/test/heaps" className={navStyles.navLink} onClick={closeMenu}>Heaps</Link>
                  </div>
                </div>
              </li>

              <li className={`${navStyles.header_links} ${activeSection === "Aptitude" ? navStyles.open : ""}`}>
                <span onClick={(e) => toggleSection(e)}>
                  Aptitude <FontAwesomeIcon icon={faCaretRight} />
                </span>
                <div className={navStyles.pannelWrapper}>
                  <div className={navStyles.arrowUp}></div>
                  <div className={navStyles.pannelColumn}>
                    <Link href="/test/numerical-reasoning" className={navStyles.navLink} onClick={closeMenu}>Numerical Reasoning</Link>
                    <Link href="/test/logical-reasoning" className={navStyles.navLink} onClick={closeMenu}>Logical Reasoning</Link>
                    <Link href="/test/verbal-reasoning" className={navStyles.navLink} onClick={closeMenu}>Verbal Reasoning</Link>
                    <Link href="/test/abstract-reasoning" className={navStyles.navLink} onClick={closeMenu}>Abstract Reasoning</Link>
                  </div>
                  <div className={navStyles.pannelColumn}>
                    <Link href="/test/mechanical-reasoning" className={navStyles.navLink} onClick={closeMenu}>Mechanical Reasoning</Link>
                    <Link href="/test/data-interpretation" className={navStyles.navLink} onClick={closeMenu}>Data Interpretation</Link>
                  </div>
                </div>
              </li>

              <li className={`${navStyles.header_links} ${activeSection === "Mathematics" ? navStyles.open : ""}`}>
                <span onClick={(e) => toggleSection(e)}>
                  Mathematics <FontAwesomeIcon icon={faCaretRight} />
                </span>
                <div className={navStyles.pannelWrapper}>
                  <div className={navStyles.arrowUp}></div>
                  <div className={navStyles.pannelColumn}>
                    <Link href="/test/algebra" className={navStyles.navLink} onClick={closeMenu}>Algebra</Link>
                    <Link href="/test/percentage" className={navStyles.navLink} onClick={closeMenu}>Percentage</Link>
                    <Link href="/test/ratio-proportion" className={navStyles.navLink} onClick={closeMenu}>Ratio & Proportion</Link>
                    <Link href="/test/interest" className={navStyles.navLink} onClick={closeMenu}>Interest</Link>
                  </div>
                  <div className={navStyles.pannelColumn}>
                    <Link href="/test/profit-loss" className={navStyles.navLink} onClick={closeMenu}>Profit & Loss</Link>
                    <Link href="/test/time-and-work" className={navStyles.navLink} onClick={closeMenu}>Time & Work</Link>
                    <Link href="/test/speed-time-distance" className={navStyles.navLink} onClick={closeMenu}>Speed, Time & Distance</Link>
                  </div>
                </div>
              </li>

              <li className={`${navStyles.header_links} ${activeSection === "Soft Skills" ? navStyles.open : ""}`}>
                <span onClick={(e) => toggleSection(e)}>
                  Soft Skills <FontAwesomeIcon icon={faCaretRight} />
                </span>
                <div className={navStyles.pannelWrapper}>
                  <div className={navStyles.arrowUp}></div>
                  <div className={navStyles.pannelColumn}>
                    <Link href="/test/communication-skills" className={navStyles.navLink} onClick={closeMenu}>Communication</Link>
                    <Link href="/test/leadership-and-teamwork" className={navStyles.navLink} onClick={closeMenu}>Leadership & Teamwork</Link>
                    <Link href="/test/emotional-intelligence" className={navStyles.navLink} onClick={closeMenu}>Emotional Intelligence</Link>
                  </div>
                  <div className={navStyles.pannelColumn}>
                    <Link href="/test/problem-solving-scenarios" className={navStyles.navLink} onClick={closeMenu}>Problem Solving</Link>
                    <Link href="/test/time-management" className={navStyles.navLink} onClick={closeMenu}>Time Management</Link>
                    <Link href="/test/adaptability-and-flexibility" className={navStyles.navLink} onClick={closeMenu}>Adaptability</Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      }
    />
  );
};

export default Nav;
