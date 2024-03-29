import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { icons } from '../../utils/icons';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';

function Header() {
  const navigate = useNavigate();
  const [hasUser, setHasUser] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // useEffect(() => {
  //     if (Object.keys(auth).length === 0) {
  //         setHasUser(false);
  //     } else {
  //         setHasUser(true);
  //     }
  // }, [auth]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledDown = currentScrollPos > prevScrollPos;

      setPrevScrollPos(currentScrollPos);

      if (isScrolledDown && isVisible) {
        setIsVisible(false);
      } else if (!isScrolledDown && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, prevScrollPos]);

  const handleLogOut = () => {
    //setAuth({});
    localStorage.removeItem('auth');
    setHasUser(false);
    navigate('/');
  };
  return (
    <div
      className={`sticky mb-8 max-w-[1200px] top-0 left-0 right-0 w-full z-50  mx-auto transition-transform transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="w-full flex justify-between p-2 bg-white text-black bg-opacity-50">
        <div className="flex justify-center items-center font-sans text-lg">
          <ul className="flex justify-center items-center">
            <li className="flex justify-center items-center mr-4 ">
              <span className="text-orange-400 mr-2 font-bold">
                <icons.CiLocationOn />
              </span>
              <span className="max-sm:hidden max-md:hidden">
               Da Nang University of Economics
              </span>
            </li>
            <li className="flex justify-center items-center ">
              <span className="text-btnprimary mr-2 font-bold">
                <icons.AiOutlineMail />
              </span>
              <span>phamyenngoc.02@gmail.com</span>
            </li>
          </ul>
        </div>


        <div className="text-black flex justify-center items-center font-sans text-lg">
          <ul className="flex justify-center items-center cursor-pointer gap-2">
            <li className="flex justify-center items-center mr-1 ">
              <a href="https://www.facebook.com/BurgerNBeerDanang">
                <icons.BsInstagram />
              </a>
            </li>
            <li className="flex justify-center items-center mr-1 ">
              <a href="https://www.facebook.com/BurgerNBeerDanang">
                <icons.AiOutlineFacebook />
              </a>
            </li>
            <li className="flex justify-center items-center mr-1 ">
              <a href="https://www.facebook.com/BurgerNBeerDanang">
                <icons.BsTwitter />
              </a>
            </li>
            <li className="flex justify-center items-center mr-1 ">
              <a href="https://www.facebook.com/BurgerNBeerDanang">
                <icons.AiOutlineYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full ">
        <div className="bg-white rounded-lg flex items-center justify-center">
          <div className="w-full border-slate-300 border-2 rounded-lg">
            <Navbar className="w-full py-2 z-50 shadow-sm bg-opacity-10 rounded-lg">
              <Navbar.Brand>
                <div className="avatar">
                  <div className="w-14 rounded-full">
                    <img src={require(`./web_logo.png`)} alt=""/>
                  </div>
                </div>
                <span style={{fontFamily: '"inter", sans-serif', fontWeight: 'bold', fontSize: '25px'}} className="self-center whitespace-nowrap text-xl font-semibold text-black">
                  BURGER N' BEER
                </span>
              </Navbar.Brand>

              <Navbar.Collapse className="text-black">
                <div style={{fontFamily: '"inter", sans-serif', fontSize: '20px', marginRight:'30px'}} className="text-black hover:text-red-500">
                  <Link to="/home">Home</Link>
                </div>

                <div style={{fontFamily: '"inter", sans-serif', fontSize: '20px', marginRight:'30px'}} className="text-black hover:text-red-500">
                  <Link to="/combo">Shop</Link>
                </div>


                <div style={{fontFamily: '"inter", sans-serif', fontSize: '20px', marginRight:'30px'}} className="text-black hover:text-red-500">
                  <Link to="/https://www.siliconii.com/">Location</Link>
                </div>
                <div style={{fontFamily: '"inter", sans-serif', fontSize: '20px'}} className="text-black hover:text-red-500">
                  <Link to="/contact">Contact Us</Link>
                </div>
              </Navbar.Collapse>
              {hasUser ? (
                <div className="flex md:order-2 text-black">
                  <div className="flex items-center justify-center">
                    <Link to="/cart">
                      <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center mr-2 hover:bg-btnprimary hover:text-[#B4E9D6] ">
                        <icons.BsCart4 />
                      </div>
                    </Link>
                  </div>
                  <Dropdown
                    arrowIcon={true}
                    inline
                    label={
                      <div className="avatar">
                        <div className="w-10 rounded-full">
                          <img src={require(`../../images/avatar.png`) } alt="" />
                        </div>
                      </div>
                    }
                  >
                    <Dropdown.Header>
                      <span className="flex items-center justify-center text-xl m-2 ">
                        Pham Thi Yen Ngoc
                      </span>
                      <span className="block truncate text-sm font-medium">
                        phamyenngoc.02@gmail.com
                      </span>
                    </Dropdown.Header>
                    {/* {auth.role === "admin" && ( */}
                    <Link to="/admin">
                      <Dropdown.Item>DASHBOARD</Dropdown.Item>
                    </Link>
                    {/* )} */}

                    <Link to="/user">
                      <Dropdown.Item>PROFILE</Dropdown.Item>
                    </Link>
                    <Dropdown.Divider />
                    <Link to="/home" onClick={handleLogOut}>
                      <Dropdown.Item>LOGOUT</Dropdown.Item>
                    </Link>
                    {}
                  </Dropdown>
                </div>
              ) : (
                <Navbar.Collapse>
                  <div className="flex justify-center items-center">
                    <ul className="flex justify-center items-center ">
                      <li>
                        <Link to="/login">
                          <button className="btn btn-outline btn-success">
                            LOGIN
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link to="/register">
                          <button className="btn btn-info ml-4">
                            REGISTER
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Navbar.Collapse>
              )}
            </Navbar>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
