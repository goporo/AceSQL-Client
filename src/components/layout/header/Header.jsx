import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'

import authService from '../../../services/authService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBagShopping,
  faCartShopping,
  faMagnifyingGlass,
  faPhone,
  faRightFromBracket,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ROUTES } from '../../../routes/RouterConfig'
import SideBar from '../side-bar/SideBar'
import UiButton from 'components/common/ui/UiButton/UiButton'
import { twMerge } from 'tailwind-merge'
import useScrollReset from 'hooks/useScrollReset'

const Header = () => {
  const navigate = useNavigate()
  const controls = useAnimation()
  const dispatch = useDispatch()
  const [isScrollAtTop, setIsScrollAtTop] = useState(true)

  useScrollReset();


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrollAtTop(false)
        controls.start({ y: -92 })
      } else {
        setIsScrollAtTop(true)
        controls.start({ y: 0 })
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [controls])

  return (
    <motion.div animate={controls}>
      <header
        className={twMerge(
          'bg-white flex flex-col justify-start items-center px-6 shadow-[0_0_64px_rgba(0,0,0,.08)]',
          isScrollAtTop ? 'h-[126px]' : 'h-[34px]',
        )}
      >
        <div className="min-w-[1000px] w-[1180px] min-h-[92px] flex flex-row justify-between items-center">
          <Link to={ROUTES.Home} className="flex flex-row gap-[2px]">
            <img
              src="/assets/images/logo.png"
              alt="logo"
              className="w-fit h-12"
            />
          </Link>
          <div className="flex flex-row items-center gap-5 text-[#1b365d] h-fit">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="cursor-pointer w-[18px] h-[18px]"
            />
            <FontAwesomeIcon icon={faPhone} className="cursor-pointer w-[18px] h-[18px]" />

            <UiButton
              icon={faBagShopping}
              iconClassName={'w-[18px] h-[18px]'}
              className="bg-none w-full flex flex-row gap-2 items-center"
            >
              <div className="font-bold italic text-sm whitespace-nowrap ">
                Mua bảo hiểm trên ePro
              </div>
            </UiButton>

            <div className="flex flex-row font-bold text-sm">
              <UiButton className="bg-white w-[110px] h-[36px] p-[5px] border-[2px] border-r-0 border-[#e5eaef] rounded-l-full italic">
                Cá Nhân
              </UiButton>
              <UiButton className="bg-none bg-[#e5eaef] w-[110px] h-[36px] p-[5px] border-[2px] border-l-0 border-[#e5eaef] rounded-r-full italic">
                <p className="opacity-50">Doanh Nghiệp</p>
              </UiButton>
            </div>
            <div className="h-[36px]">
              {true ? (
                <UiButton
                  className="bg-white w-[110px] p-[5px] border-[2px] border-[#e5eaef] rounded-full italic font-bold text-sm"
                  onClick={() => {
                    navigate(ROUTES.Login)
                  }}
                >
                  {'Đăng nhập'}
                </UiButton>
              ) : (
                <UiButton
                  className="bg-white w-[110px] p-[5px] border-[2px] border-[#e5eaef] rounded-full italic font-bold text-sm"
                  onClick={() => {
                    authService.handleLogout(dispatch)
                    navigate(ROUTES.Login)
                  }}
                >
                  {'Đăng xuất'}
                </UiButton>
              )}
            </div>
          </div>
        </div>
        <SideBar
          isScrollAtTop={isScrollAtTop}
          setIsScrollAtTop={setIsScrollAtTop}
        />
      </header>
    </motion.div>
  )
}

export default Header
