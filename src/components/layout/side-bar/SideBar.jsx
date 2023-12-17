import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { navItems } from './navItems'

const ExpandTransitionTime = 300

const commonTransition = {
  type: 'spring',
  stiffness: 200,
  damping: 20,
}

const underLineVariants = {
  hidden: { opacity: 1, scaleX: 0 },
  visible: { opacity: 1, scaleX: 1 },
};

const NavItem = (props) => {
  const { title, icon, isActive = false, handleNavClick } = props;

  return (
    <button onClick={handleNavClick}>
      <motion.div
        className="group flex relative h-full justify-start gap-4 px-[10px] py-[20px] items-center cursor-pointer text-[18px] font-semibold"
      >
        {icon && (
          <FontAwesomeIcon icon={icon} className="h-5 w-5 leading-[0px]" />
        )}
        <div>{title}</div>
        <motion.div
          className="w-full h-[5px] translate-y-[1px] rounded-lg bg-white absolute bottom-0 left-0 origin-left"
          variants={underLineVariants}
          initial="hidden"
          animate={isActive ? 'visible' : 'hidden'}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </button>
  );
};

const SideBar = ({ isScrollAtTop, setIsScrollAtTop }) => {
  const [activeItem, setActiveItem] = useState(null)
  const [isNavExpand, setIsNavExpand] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrollAtTop(false)
      } else {
        setIsScrollAtTop(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [controls, setIsScrollAtTop])

  const handleNavClick = (item) => {
    setIsNavExpand(!isNavExpand)
    if (activeItem !== item) {
      setTimeout(() => {
        setActiveItem(item)
        setIsNavExpand(true)
      }, ExpandTransitionTime)
    }
    // clean up
    else if (activeItem === item) {
      setActiveItem(null);
      return;
    }

    setActiveItem(item)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 5

      if (window.scrollY > scrollThreshold) {
        setIsNavExpand(false)

        // clean up
        setActiveItem(null)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const CheckIsActive = (item) => {
    return item === activeItem
  }

  return (
    <div
      className={twMerge(
        'min-w-[1166px] w-[1166px] transition-all duration-300 ease-in-out',
        isScrollAtTop ? '' : '!w-screen',
      )}
    >
      <motion.div transition={commonTransition} animate={controls}>
        <nav
          className={twMerge(
            'justify-center px-[33px] gap-4 rounded-lg relative z-[100] min-h-[69px] shadow-sm flex-row flex transition-all duration-300 ease-in-out',
            isScrollAtTop
              ? 'bg-primary text-white'
              : 'bg-white text-black-primary',
          )}
        >
          {navItems.map((item, index) => {
            const isActive = CheckIsActive(item)
            return (
              <NavItem
                key={index}
                isActive={isActive}
                paths={item.paths}
                items={item.items}
                title={item.title}
                icon={item.icon}
                handleNavClick={() => handleNavClick(item)}
              />
            )
          })}
        </nav>
        <AnimatePresence>
          {isNavExpand && activeItem && (
            <motion.div
              className="w-full max-w-[1166px] m-auto px-2 mt-[-6px] bg-white pt-[46px] pb-[40px] shadow-sm origin-top grid lg:grid-cols-4 gap-y-8"
              initial={{ scaleY: 0, }}
              animate={{ scaleY: 1, position: 'relative' }} // prevent animation display over other element when animating
              exit={{ scaleY: 0, }}
              transition={{
                duration: ExpandTransitionTime / 1000,
                ease: 'easeInOut',
              }}
            >
              {activeItem.items.map((item, idx) => {
                return (
                  <Link key={idx} to={item.path} onClick={() => { setIsNavExpand(false); setActiveItem(null) }}>
                    <div className="w-[300px] px-4 flex flex-row items-end flex-1 relative">
                      <div className="text-[22px] relative">
                        {item.title}
                        <span className="ml-3">
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            className="w-[10px] text-primary"
                          />
                        </span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </div>
  )
}

export default SideBar
