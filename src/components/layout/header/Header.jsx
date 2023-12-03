import React, { useState } from 'react'
import authService from '../../../services/authService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ROUTES } from '../../../routes/RouterConfig';


const Header = () => {
    const [isExpand, setIsExpand] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    return (

        <header className='z-10 h-16 flex flex-row justify-between items-center px-6'>
            <div></div>
            <div
                className="relative cursor-pointer"
                onMouseEnter={() => setIsExpand(true)}
                onMouseLeave={() => setIsExpand(false)}
            >
                <img
                    className="h-[48px] w-[48px] rounded-full object-cover"
                    src={"https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912768/avatar-icon-md.png"}
                    alt="avatar"
                />
                {isExpand && (
                    <div className="absolute top-full -right-4 w-44 pt-[14px] transition-all">
                        <div className="relative shadow-[0_4px_16px_rgba(0,0,0,0.1)]">
                            <div className="absolute bottom-full right-[20%] text-md leading-[0.7] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.1)]">
                                &#x25B2;
                            </div>

                            <div className="relative bg-white">
                                {/* profile */}
                                <div
                                    role="button"
                                    onClick={() => navigate(ROUTES.Profile)}
                                    className="hover:bg-slate-100 p-4 flex items-center"
                                >
                                    <div className="mr-2 w-4">
                                        <FontAwesomeIcon icon={faUser} />

                                    </div>
                                    <p>Profile Details</p>
                                </div>
                                {/* log out */}
                                <div className="hover:bg-slate-100 p-4 flex items-center"
                                    onClick={() => {
                                        authService.handleLogout(dispatch);
                                        navigate(ROUTES.Login)
                                    }}
                                >
                                    <div className="mr-2 w-4">
                                        <FontAwesomeIcon icon={faRightFromBracket} />
                                    </div>
                                    <p

                                    >
                                        Log Out
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header