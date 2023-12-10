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
        title: 'History',
        icon: faHouse,
        path: '/history',
    },
    {
        title: 'Policy',
        icon: faHouse,
        path: '/policy'
    },
];

const NavItem = (props) => {
    const { title, icon, path, isActive = false } = props;
    const activeClassName = 'bg-blue-primary text-white';
    const notActiveClassName = 'bg-white text-black hover:bg-slate-100 ';

    return (
        <Link to={path || '/#'}>
            <div className={clsx(
                'flex h-11 justify-start gap-4 px-12 items-center cursor-pointer  ',
                isActive ? activeClassName : notActiveClassName,
            )}>
                <FontAwesomeIcon icon={icon} className={`h-5 w-5 leading-[0px] `} />
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
        //bg-gradient-to-br from-blue-light to-blue-darker
        <nav className="w-[14.625rem] h-screen">
            <div>
                <img src="/assets/images/logo.png" alt="logo" />
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