import producticon01 from '~/assets/images/producticon-01.png'
import producticon01_2x from '~/assets/images/producticon-01@2x.png'
import producticon01_3x from '~/assets/images/producticon-01@3x.png'
import producticon02 from '~/assets/images/producticon-02.png'
import producticon02_2x from '~/assets/images/producticon-02@2x.png'
import producticon02_3x from '~/assets/images/producticon-02@3x.png'
import producticon03 from '~/assets/images/producticon-03.png'
import producticon03_2x from '~/assets/images/producticon-03@2x.png'
import producticon03_3x from '~/assets/images/producticon-03@3x.png'
import goIcon from '~/assets/images/go-icon.png'
import goIcon_2x from '~/assets/images/go-icon@2x.png'
import goIcon_3x from '~/assets/images/go-icon@3x.png'
import { ResponsiveImage } from '~/components/ResponsiveImage/ResponsiveImage'
import { NavLink } from 'react-router-dom'

interface Props {
  src: string;
  src2x?: string;
  src3x?: string;
  rankNumber: 1 | 2 | 3;
  description: string;
  linkTo?: string;
}

const rankNumberIcon = {
  1: {
    src: producticon01,
    src2x: producticon01_2x,
    src3x: producticon01_3x
  },
  2: {
    src: producticon02,
    src2x: producticon02_2x,
    src3x: producticon02_3x
  },
  3: {
    src: producticon03,
    src2x: producticon03_2x,
    src3x: producticon03_3x
  }
}

export const BestProductItem = ({ src, src2x, src3x, rankNumber, description, linkTo }: Props) => {
  return (
    <div className="h-[514px] w-full relative">
      <ResponsiveImage className='w-full h-full object-cover' src={src} src2x={src2x} src3x={src3x} alt="Thumd Product" />
      <div className="absolute left-0 -top-12">
        <ResponsiveImage className='w-full h-full object-contain' {...rankNumberIcon[rankNumber]} alt="Ranking number" />
      </div>
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-between w-3/4 h-20 px-2 bg-white border-[3px] border-ct-border-color">
        <div className="text-xl text-ct-black-color-normal font-bold ml-3 line-clamp-2 w-3/5">
          {description}
        </div>
        <NavLink to={linkTo || ''} className='block ' >
          <ResponsiveImage className='w-full h-full object-contain' src={goIcon} src2x={goIcon_2x} src3x={goIcon_3x} alt="Go" />
        </NavLink>
      </div>
    </div>
  )
}
