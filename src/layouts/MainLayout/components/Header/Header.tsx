import { ResponsiveImage } from '~/components/ResponsiveImage/ResponsiveImage'
import logo from '~/assets/images/logo.png'
import logo2x from '~/assets/images/logo@2x.png'
import logo3x from '~/assets/images/logo@3x.png'
import { NavItem } from './NavItem/NavItem'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="fixed top-0 right-0 left-0 z-50 h-20 w-full bg-ct-black-color-bold flex items-center justify-between px-24">
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
      <div className="flex text-white text-sm gap-12 uppercase font-medium">
        <NavItem title="Introduction" />
        <NavItem title="Solution" />
        <NavItem title="Rate plan" />
        <NavItem to="/login" title="Login" />
        <NavItem title="Apply for free use" />
      </div>
    </div>
  )
}
