import React, { useContext } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  HandThumbUpIcon,
  HeartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Login} from "@mui/icons-material";
import logo from "../../assets/smart2.svg";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../../store/AuthContext";
import axios from "axios";
import { StoreContext } from "../../../store/OpenSearch";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Hotels", href: "/getAllHotels", current: false },
  { name: "Last-Minute", href: "/lastMinuteHotels", current: false },
  { name: "Calendar", href: "/calendar", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Nav = () => {
  const { state, setState } = useContext(AuthContext);
const {favNum, setFavNum }= useContext(StoreContext)

  const navigate = useNavigate();

  const URL = import.meta.env.VITE_API_LOGOUT_USER

  const logout = async () => {
    const res = await axios.get(URL);
    setState({ ...state, isAuthenticated: false, user: null });
  };

  const handleSettings = () => {
    if (state.isAuthenticated) {
      navigate("/dashboard");
    } else {
      navigate("/signIn");
    }
  };

  const userNavigation = [
    {
      name: "Übersicht",
      href: "/dashboard/übersicht",
      onClick: handleSettings,
    },
    {
      name: "Bewertungen",
      href: "/dashboard/bewertungen",
      onClick: handleSettings,
    },
    {
      name: "Buchungen",
      href: "/dashboard/buchungen",
      onClick: handleSettings,
    },
    {
      name: "Einstellungen",
      href: "/dashboard/einstellungen",
      onClick: handleSettings,
    },
    { name: "Sign out", href: "/", onClick: logout },
  ];
  return (
    <Disclosure as="nav" className="bg-slate-300 ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-8xl py-2 px-8 sm:px-6 6g:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="h-16 w-16" src={logo} alt="logo" />
                </div>
                <div className="flex-shrink-1 text-gray-600 font-black text-2xl pl-2">
                  <NavLink to="/">SMART-BOOKING</NavLink>
                </div>
                <div className="hidden md:block">
                  <div className=" flex ml-1 items-center gap-1">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-800 text-white "
                            : "text-black-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md py-2 px-3 text-sm flex text-center font-medium bg-red-400 text-white"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  
                  <NavLink to={"/favorite"}>
                    
                  <button
                    type="button"
                    className="mx-1 flex rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                    <span className="sr-only ">Favourite</span>
                    <HeartIcon className="h-6 w-6" aria-hidden="true" />
                   
                  </button>
                    </NavLink>
                   {favNum === 0 ? <></>: 
                    <p className="relative -inset-3 bg-red-400 rounded-full text-white text-bold px-2 pt-0.5">{favNum}</p>
                   }

                  <button
                    type="button"
                    className="mx-1 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">Hand Thumb</span>
                    <HandThumbUpIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {!state.isAuthenticated ? (
                    <button
                      type="button"
                      className="mx-1 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      onClick={() => navigate("/signIn")}
                    >
                      <span className="sr-only">Login</span>
                      <Login className="h-6 w-6" aria-hidden="false" />
                    </button>
                  ) : (
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          {state.user && (
                            <img
                              className="h-12 w-12 rounded-full"
                              src={state.user.profilePicture}
                              alt={state.user.username}
                            />
                          )}
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item key={`übersicht`}>
                            {({ active }) => (
                              <NavLink
                                to={`/dashboard/übersicht`}
                                className={classNames(
                                  active ? "bg-gray-100" : "bg-gray-200",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {`Übersicht`}
                              </NavLink>
                            )}
                          </Menu.Item>
                          <Menu.Item key={`bewertungen`}>
                            {({ active }) => (
                              <NavLink
                                to={`/dashboard/bewertungen`}
                                className={classNames(
                                  active ? "bg-gray-100" : "bg-gray-200",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {`Bewertungen`}
                              </NavLink>
                            )}
                          </Menu.Item>
                          <Menu.Item key={`buchungen`}>
                            {({ active }) => (
                              <NavLink
                                to={"/dashboard/buchungen"}
                                className={classNames(
                                  active ? "bg-gray-100" : "bg-gray-200",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {`Buchungen`}
                              </NavLink>
                            )}
                          </Menu.Item>
                          <Menu.Item key={`einstellungen`}>
                            {({ active }) => (
                              <NavLink
                                to={`/dashboard/einstellungen`}
                                className={classNames(
                                  active ? "bg-gray-100" : "bg-gray-200",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {`Einstellungen`}
                              </NavLink>
                            )}
                          </Menu.Item>

                          <Menu.Item key={`Log Out`}>
                            {({ active }) => (
                              <NavLink
                                to={`/`}
                                className={classNames(
                                  active ? "bg-gray-100" : "bg-gray-200",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                                onClick={logout}
                              >
                                {`Log Out`}
                              </NavLink>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  )}
                </div>
              </div>
              <div className="mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  onClick={() => navigate(item.href)}
                  as="button"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-800 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center">
                {!state.isAuthenticated && (
                  <button
                    onClick={() => navigate("/signIn")}
                    className="ml-2 bg-gray-900 text-white btn"
                  >
                    Sign in
                  </button>
                )}

                {state.isAuthenticated && (
                  <div className="block w-full">
                    <div className="flex w-full">
                      <img
                        className="h-12 w-12 ml-4 mb-2 rounded-full"
                        src={state.user.profilePicture}
                        alt={state.user.username}
                      />
                    </div>
                    <div className="flex w-full items-center justify-between ps-5 pe-12">
                      <div className="font-bold leading-none text-gray-600">
                        {state.user.username}
                      </div>
                      <div className="text-sm font-bold leading-none text-gray-500">
                        {state.user.email}
                      </div>
                    </div>
                    <div className="mt-3 space-y-1 px-2">
                      {userNavigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          onClick={item.onClick}
                          className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white"
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Nav;
