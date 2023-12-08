import clsx from 'clsx';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const navItems = [
    {
        title: 'Dashboard',
        icon: faHouse,
        path: '/',
    },
    {
        title: 'About',
        icon: faHouse,
        path: '/about',
    },
    {
        title: 'Quiz Store',
        icon: faHouse,
        path: '/quiz_store',
    },
    {
        title: 'Chat',
        icon: faHouse,
        path: '/chat',
    },
    {
        title: 'Profile',
        icon: faHouse,
        path: '/profile'
    },
];

const NavItem = (props) => {
    const { title, icon, path, isActive = false } = props;
    const activeClassName = 'bg-purple-primary text-white rounded-r-[15px]';
    const notActiveClassName = 'bg-white text-black rounded-r-[15px]';

    return (
        <Link to={path || '/#'}>
            <div className={clsx(
                'flex h-11 justify-start gap-4 px-12 items-center cursor-pointer hover:bg-purple-primary hover:text-white ',
                isActive ? activeClassName : notActiveClassName
            )}>
                <FontAwesomeIcon icon={icon} className={`h-5 w-5 leading-[0px] ${isActive ? 'text-white' : 'text-black'}`} />
                <div className=" ">{title}</div>
            </div>
        </Link>
    )
}

const SideBar = () => {

    const CheckIsActive = (path, rootPath) => {
        const location = useLocation()
        const currentPath = location.pathname;

        if (currentPath === path) {
            return true;
        }

        if (rootPath) {
            return currentPath.startsWith(rootPath);
        }

        return false;
    };

    return (
        //bg-gradient-to-br from-blue-light to-blue-darker//logo copy từ figma nên ko b chỉnh
        <nav className="w-[14.625rem] h-screen">
            <div className="relative w-[282px] h-[102px] overflow-hidden">
                <div className="absolute w-[217px] top-[28px] left-[90px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#4354f9] text-[32px] tracking-[0] leading-[normal]">
                    AceSQL
                </div>
                <div className="absolute w-[48px] h-[48px] top-[23px] left-[29px] bg-[#4354f9] rounded-[24px]">
                    <div className="relative w-[20px] h-[20px] top-[14px] left-[14px] bg-white rounded-[10px]" />
                </div>
            </div>
            {navItems.map((item, index) => {
                const isActive = CheckIsActive(item.path, item.rootPath);
                return (<NavItem key={index} isActive={isActive} path={item.path} title={item.title} icon={item.icon} />)
            }
            )}
        </nav>
    )
}

export default SideBar



export const Banner = () => {
  return (
    <div className="relative w-[282px] h-[102px] overflow-hidden">
      <div className="absolute w-[217px] top-[28px] left-[101px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#4354f9] text-[32px] tracking-[0] leading-[normal]">
        AceSQL
      </div>
      <div className="absolute w-[48px] h-[48px] top-[23px] left-[29px] bg-[#4354f9] rounded-[24px]">
        <div className="relative w-[20px] h-[20px] top-[14px] left-[14px] bg-white rounded-[10px]" />
      </div>
    </div>
  );
};