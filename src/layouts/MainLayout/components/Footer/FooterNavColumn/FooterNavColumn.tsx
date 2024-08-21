import { NavLink } from 'react-router-dom'

interface Props {
  title: string
  listNavigation: {
    name: string
    link?: string | undefined
  }[]
}

export const FooterNavColumn = ({ title, listNavigation }: Props) => {
  return (
    <div className="">
      <div className="text-ct-black-color-bold font-bold mb-7">{title}</div>
      <div className="leading-7">
        {listNavigation.map((item, index) => {
          return (<NavLink to={item.link || ''} key={index} className="block hover:text-ct-orange-color">{item.name}</NavLink>)
        })}
      </div>
    </div>
  )
}
