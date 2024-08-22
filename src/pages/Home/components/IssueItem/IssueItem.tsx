import clsx from 'clsx'
import { ResponsiveImage } from '~/components/ResponsiveImage/ResponsiveImage'
import newsObj04 from '~/assets/images/news-object-04.png'
import newsObj04_2x from '~/assets/images/news-object-04@2x.png'
import newsObj04_3x from '~/assets/images/news-object-04@3x.png'
import newsObj05 from '~/assets/images/news-object-05.png'
import newsObj05_2x from '~/assets/images/news-object-05@2x.png'
import newsObj05_3x from '~/assets/images/news-object-05@3x.png'

interface Props {
  title: string;
  src: string;
  src2x?: string;
  src3x?: string;
  isActive?: boolean;
  isHot?: boolean;
  isLol?: boolean;
}

export const IssueItem = ({ title, src, src2x, src3x, isActive, isHot, isLol }: Props) => {
  return (
    <div className={clsx(
      'flex flex-col relative',
      isActive ? 'bg-ct-orange-color' : 'bg-[#110e03]'
    )}>
      {isHot &&
        <div className="absolute left-6 -top-8 ">
          <ResponsiveImage className='' src={newsObj04} src2x={newsObj04_2x} src3x={newsObj04_3x} alt="News Object" />
        </div>
      }
      {isLol &&
        <div className="absolute -right-8 -bottom-12 z-10">
          <ResponsiveImage className='' src={newsObj05} src2x={newsObj05_2x} src3x={newsObj05_3x} alt="News Object" />
        </div>
      }
      <div className="text-white font-extrabold text-3xl uppercase h-[75px] grid place-content-center">{title}</div>
      <div className="w-full flex-1">
        <ResponsiveImage className='w-full h-full object-cover object-center' src={src} src2x={src2x} src3x={src3x} alt="News Image" />
      </div>
    </div>
  )
}
