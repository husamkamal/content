import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "../../Assets";

const NavBar = () => {
	const [sticky , setSticky] = useState('static')
	useEffect(() => {
		window.addEventListener('scroll', stickNavbar);
	
		return () => {
		  window.removeEventListener('scroll', stickNavbar);
		};
	  }, []);
	
	  const stickNavbar = () => {
		if (window !== undefined) {
		  let windowHeight = window.scrollY;
		  windowHeight > 100 ? setSticky('sticky') : setSticky('static');
		}
	  };
	return (
    <header style={{position:`${sticky}`, top:'0px', zIndex:100}} className="header other-page">
      <div className="header-inner">
        <div className="container">
          <div className="container-inner">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-12">
                <div className="logo">
                  <Link href="index.html">
                    <img src={Image.logo} alt="logo" />
                  </Link>
                  <Link to="/" className="img2">
                    <img src={Image.logo2} alt="logo" />
                  </Link>
                </div>
                <div className="mobile-nav"></div>
              </div>
              <div className="col-lg-10 col-md-10 col-12">
                <div className="menu-area">
                  <nav className="navbar navbar-expand-lg">
                    <div className="navbar-collapse">
                      <div className="nav-inner">
                        <ul className="nav main-menu menu navbar-nav">
                          <li className="active">
                            <Link to="/">الرئيسية</Link>
                          </li>
                          <li className="active">
                            <Link to="/about">عن الشركة </Link>
                          </li>
                          <li>
                            <Link to="/portfolio">معرض الأعمال</Link>
                          </li>
                          <li>
                            <Link to="/services">الخدمات</Link>
                          </li>
                          <li>
                            <Link to="/blog">المدونة</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
