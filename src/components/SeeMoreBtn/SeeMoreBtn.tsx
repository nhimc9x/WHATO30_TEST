import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

export const SeeMoreBtn = ({ linkTo, title, className }: { linkTo?: string; title?: string; className?: string }) => {
  return (
    <NavLink
      to={linkTo || ''}
      className={clsx(
        'h-[60px] w-[200px] rounded-sm grid place-content-center border-4 border-ct-border-color text-2xl font-extrabold text-ct-black-color-normal uppercase active:scale-105',
        className
      )}
    >
      {title || 'See more'}
    </NavLink>
  )
}
