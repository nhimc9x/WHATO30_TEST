import { NavLink } from 'react-router-dom'

export const NavItem = ({ to, title }: { to?: string, title: string }) => {
  return (
    <NavLink to={to || ''} className='hover:text-ct-yellow-color leading-10 hover:hover:[text-shadow:_0_0_4px_#fbd24e]'>
      {title}
    </NavLink>
  )
}
