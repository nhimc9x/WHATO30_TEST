import { ResponsiveImage } from '~/components/ResponsiveImage/ResponsiveImage'
import logo from '~/assets/images/logo.png'
import logo2x from '~/assets/images/logo@2x.png'
import logo3x from '~/assets/images/logo@3x.png'
import { NavItem } from './NavItem/NavItem'
import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

export const Header = () => {
  const location = useLocation()

  const navbarRightRef = useRef(null)
  const [showNavBarRight, setShowNavBarRight] = useState(false)

  const handleDocumentClick = (e: MouseEvent) => {
    if (navbarRightRef.current && !navbarRightRef.current.contains(e.target as Node | null)) {
      setShowNavBarRight(false)
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleDocumentClick)
    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  useEffect(() => {
    setShowNavBarRight(false)
  }, [location])

  return (
    <div className="fixed top-0 right-0 left-0 z-50 h-20 w-full bg-ct-black-color-bold flex items-center justify-between xl:px-24 lg:px-14 px-8">
      <NavLink
        to={'/'}
        className="flex items-center">
        <ResponsiveImage
          className="h-full w-full object-contain"
          src={logo}
          src2x={logo2x}
          src3x={logo3x}
          alt="logo"
        />
      </NavLink>

      <div className="mdl:flex hidden items-center text-white text-sm xl:gap-12 lg:gap-8 gap-4 uppercase font-medium">
        <NavItem title="Introduction" />
        <NavItem title="Solution" />
        <NavItem title="Rate plan" />
        <div className="w-[1px] h-6 bg-[#ccc8c6]"></div>
        <NavItem to="/login" title="Login" />
        <NavItem title="Apply for free use" />
      </div>

      <div className="mdl:hidden flex ml-auto gap-4 items-center text-white">
        <div ref={navbarRightRef}>
          <div
            onClick={() => setShowNavBarRight(!showNavBarRight)}
            className="p-2">
            <div className="flex flex-col gap-1.5">
              <span className={clsx(
                'w-8 h-1 rounded-sm bg-white duration-200',
                showNavBarRight && 'rotate-45 translate-y-[calc(100%+0.8px)]'
              )}></span>
              <span className={clsx(
                'w-8 h-1 rounded-sm bg-white',
                showNavBarRight && 'hidden'
              )}></span>
              <span className={clsx(
                'w-8 h-1 rounded-sm bg-white duration-200',
                showNavBarRight && '-rotate-45 -translate-y-[calc(100%+0.8px)]'
              )}></span>
            </div>
          </div>
          <div className={clsx(
            'bg-ct-black-color-normal border-l-2 border-ct-border-color w-[375px] fixed right-0 bottom-0 top-[80px] flex flex-col duration-300 pt-4',
            '*:text-center *:py-3 *text-base *:uppercase *:font-medium',
            showNavBarRight ? 'translate-x-0' : 'translate-x-full'
          )}>
            <NavItem title="Introduction" />
            <NavItem title="Solution" />
            <NavItem title="Rate plan" />
            <NavItem to="/login" title="Login" />
            <NavItem title="Apply for free use" />
          </div>
        </div>
      </div>
    </div>
  )
}
