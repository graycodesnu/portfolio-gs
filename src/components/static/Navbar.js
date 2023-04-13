// ! Imports
// Import react scroll for nav buttons
import { Link } from "react-scroll";
// Import logo
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
// Import responsive elements
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// Import useState
import { useState, useEffect } from "react";

// ! Routes
// Nav routes
const navigation = [
  { name: "Home", href: "hero", current: false },
  { name: "Expertise", href: "expertise", current: false },
  { name: "Projects", href: "projects", current: false },
  { name: "Contact", href: "contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// ! Function
export default function Navbar() {
  // * Scroll fade in/out
  // Sets display vs. hidden context
  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  // Sets fade effect
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  // ** RETURN **
  return (
  
    <Disclosure
      as="nav"
      className="navbarFade z-50 py-3 bg-primary-dark shadow-sm shadow-blue w-full"
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu buttons */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2  text-green hover: hover:text-gold focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo */}
              <div className=" flex flex-1 flex-shrink-0 items-center justify-between">
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <Logo
                    className="sm:block h-28 w-auto justify-items-start 2xs:hidden cursor-pointer"
                    alt="Grayson Harvey"
                  />
                </Link>

                <div className="flex flex-row items-center space-x-4">
                  <div className="justify-items-center hidden sm:ml-6 sm:block">
                    {navigation.map((item) => (
                      <Link
                        spy={true}
                        smooth={true}
                        offset={-30}
                        duration={500}
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-blue text-gold"
                            : "text-secondary hover:text-gold hover:bg-blue",
                          "px-3 py-2 rounded-md text-xl font-medium cursor-pointer"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  {/* Download Resume */}
                  <div className="">
                    <a
                      href="#"
                      className="
                  flex items-center rounded-md px-2 py-2 text-base font-medium outline outline-green hover:outline-2 hover:text-gold hover:bg-blue hover:outline-none"
                    >
                      Download Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bar Menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 cursor-pointer">
              {navigation.map((item) => (
                <Link
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={500}
                >
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    className={classNames(
                      item.current
                        ? "bg-blue text-gold"
                        : "text-secondary hover:text-gold",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}


    </Disclosure>
  );
}
