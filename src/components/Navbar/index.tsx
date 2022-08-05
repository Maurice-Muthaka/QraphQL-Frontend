import { useState, useContext, FormEvent, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from '../../contexts/themeContext';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const Android12Switch = styled(Switch)(() => ({
    padding: 8,
    '& .MuiSwitch-track': {
      borderRadius: 22 / 2,
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 16,
        height: 16,
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: 'none',
      width: 16,
      height: 16,
      margin: 2,
    },
  }));

const links = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Contact",
        path: "/contact"
    },
    {
        title: "About",
        path: "/about"
    },
]

const Nav = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scroll, setScroll] = useState(false);

    const toggleTheme = (e: FormEvent) => {
        e.preventDefault();
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY >= 40) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        });
    }, [])
  
    return (
      <div className={`fixed left-0 right-0 z-50 ${!scroll ? 'bg-transparent' : 'bg-white dark:bg-[#131619] shadow-lg'}`}>
        <div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between">
            <NavLink
              to="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center"
            >
              <svg
                className="w-6 text-primary"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span className="ml-2 text-xl font-bold tracking-wide dark:text-gray-100">
                Test_
              </span>
            </NavLink>

            <ul className="flex items-center hidden space-x-8 lg:flex">
                {links.map((link: any, index: number) => (
                    <li key={index}>
                        <NavLink
                            to={link.path}
                            title={link.title}
                            className={({ isActive }) => isActive ? 'font-medium tracking-wide text-primary transition-colors duration-200 hover:text-teal-accent-400' : 'font-medium tracking-wide dark:text-gray-100 transition-colors duration-200 hover:text-teal-accent-400'}
                        >
                            {link.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <FormGroup>
                    <FormControlLabel
                        control={<Android12Switch checked={theme === 'dark'} />}
                        label={theme === 'dark' ? <i className="fa fa-moon"/> : <i className="fa fa-sun"/>}
                        value={theme}
                        onClick={(e) => toggleTheme(e)}
                    />
                </FormGroup>
              </li>
            </ul>
            <div className="flex items-center lg:hidden">
              <FormGroup>
                <FormControlLabel
                    control={<Android12Switch checked={theme === 'dark'} />}
                    label={theme === 'dark' ? <i className="fa fa-moon"/> : <i className="fa fa-sun"/>}
                    value={theme}
                    onClick={(e) => toggleTheme(e)}
                />
              </FormGroup>
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full z-50">
                  <div className="p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <NavLink
                          to="/"
                          aria-label="Company"
                          title="Company"
                          className="inline-flex items-center text-primary"
                        >
                          <svg
                            className="w-8 text-deep-purple-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            stroke="currentColor"
                            fill="none"
                          >
                            <rect x="3" y="1" width="7" height="12" />
                            <rect x="3" y="17" width="7" height="6" />
                            <rect x="14" y="1" width="7" height="6" />
                            <rect x="14" y="11" width="7" height="12" />
                          </svg>
                          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 dark:text-gray-300 uppercase">
                            Test_
                          </span>
                        </NavLink>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg className="w-5 text-gray-600 dark:text-gray-400" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav className="my-10">
                      <ul className="space-y-4">
                        {links.map((link: any, index: number) => (
                            <li key={index}>
                                <NavLink
                                    to={link.path}
                                    title={link.title}
                                    className={({ isActive }) => isActive ? 'font-medium tracking-wide text-primary transition-colors duration-200 hover:text-green-400' : 'font-medium tracking-wide text-gray-700 dark:text-gray-300 transition-colors duration-200 hover:text-deep-purple-accent-400'}
                                >
                                    {link.title}
                                </NavLink>
                            </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Nav;