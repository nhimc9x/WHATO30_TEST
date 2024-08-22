import diceThree from '~/assets/images/news-object-02.png'
import diceThree2x from '~/assets/images/news-object-02@2x.png'
import diceThree3x from '~/assets/images/news-object-02@3x.png'
import diceFive from '~/assets/images/news-object-03-2.png'
import diceFive2x from '~/assets/images/news-object-03-2@2x.png'
import diceFive3x from '~/assets/images/news-object-03-2@3x.png'
import newsImg01 from '~/assets/images/news-img-01.png'
import newsImg01_2x from '~/assets/images/news-img-01@2x.png'
import newsImg01_3x from '~/assets/images/news-img-01@3x.png'
import newsImg02 from '~/assets/images/img-21.png'
import newsImg02_2x from '~/assets/images/img-21@2x.png'
import newsImg02_3x from '~/assets/images/img-21@3x.png'
import newsImg03 from '~/assets/images/news-img-03.png'
import newsImg03_2x from '~/assets/images/news-img-03@2x.png'
import newsImg03_3x from '~/assets/images/news-img-03@3x.png'
import newsImg04 from '~/assets/images/news-img-04.png'
import newsImg04_2x from '~/assets/images/news-img-04@2x.png'
import newsImg04_3x from '~/assets/images/news-img-04@3x.png'
import newsImg05 from '~/assets/images/news-img-05.png'
import newsImg05_2x from '~/assets/images/news-img-05@2x.png'
import newsImg05_3x from '~/assets/images/news-img-05@3x.png'
import newsObj03 from '~/assets/images/news-object-03.png'
import newsObj03_2x from '~/assets/images/news-object-03@2x.png'
import newsObj03_3x from '~/assets/images/news-object-03@3x.png'
import { ResponsiveImage } from '~/components/ResponsiveImage/ResponsiveImage'
import { SeeMoreBtn } from '~/components/SeeMoreBtn/SeeMoreBtn'
import { NavLink } from 'react-router-dom'
import { IssueItem } from '../components/IssueItem/IssueItem'

export const Issue = () => {
  return (
    <div className="w-full h-[1143px] bg-ct-yellow-color relative py-36">
      <ResponsiveImage className='object-contain absolute top-[43px] right-[70px]' src={diceFive} src2x={diceFive2x} src3x={diceFive3x} alt="Dice Five" />
      <ResponsiveImage className='object-contain absolute top-[163px] right-[68px]' src={diceThree} src2x={diceThree2x} src3x={diceThree3x} alt="Dice Three" />

      <div className="w-[720px] mx-auto text-[#110e03] text-center">
        <div className="font-bold text-4xl uppercase tracking-[4.5px]">Happened’s issue</div>
        <div className="leading-7 mt-10 mb-12">
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
          다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </div>
        <SeeMoreBtn className='mx-auto' />
      </div>

      <div className="mt-32 h-[480px] grid grid-cols-5 gap-0 border-[3px] border-[#110e03]">
        <div className="bg-ct-orange-color flex flex-col items-center justify-center gap-16 relative">
          <div className="absolute right-0 -bottom-20 w-2/5">
            <ResponsiveImage className='w-full h-full object-cover' src={newsObj03} src2x={newsObj03_2x} src3x={newsObj03_3x} alt="News Object" />
          </div>
          <div className="text-[55px] leading-[57px] uppercase font-extrabold text-[#110e03] text-center px-8">whpn issue</div>
          <NavLink to={''} className="">
            <ResponsiveImage className='' src={newsImg01} src2x={newsImg01_2x} src3x={newsImg01_3x} alt="News Image" />
          </NavLink>
        </div>
        <IssueItem title='b brand' src={newsImg02} src2x={newsImg02_2x} src3x={newsImg02_3x} isHot={true} />
        <IssueItem title='e brand' src={newsImg03} src2x={newsImg03_2x} src3x={newsImg03_3x} />
        <IssueItem title='c brand' src={newsImg04} src2x={newsImg04_2x} src3x={newsImg04_3x} isActive={true} isLol={true} />
        <IssueItem title='d brand' src={newsImg05} src2x={newsImg05_2x} src3x={newsImg05_3x} />
      </div>
    </div>
  )
}
