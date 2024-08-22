import object01 from '~/assets/images/object-01.png'
import object01_2x from '~/assets/images/object-01@2x.png'
import object01_3x from '~/assets/images/object-01@3x.png'
import object02 from '~/assets/images/object-02.png'
import object02_2x from '~/assets/images/object-02@2x.png'
import object02_3x from '~/assets/images/object-02@3x.png'
import object03 from '~/assets/images/object-03.png'
import object03_2x from '~/assets/images/object-03@2x.png'
import object03_3x from '~/assets/images/object-03@3x.png'
import object04 from '~/assets/images/object-04.png'
import object04_2x from '~/assets/images/object-04@2x.png'
import object04_3x from '~/assets/images/object-04@3x.png'
import object05 from '~/assets/images/object-05.png'
import object05_2x from '~/assets/images/object-05@2x.png'
import object05_3x from '~/assets/images/object-05@3x.png'
import object06 from '~/assets/images/object-06.png'
import object06_2x from '~/assets/images/object-06@2x.png'
import object06_3x from '~/assets/images/object-06@3x.png'
import object07 from '~/assets/images/object-07.png'
import object07_2x from '~/assets/images/object-07@2x.png'
import object07_3x from '~/assets/images/object-07@3x.png'
import imgStory from '~/assets/images/img.png'
import imgStory2x from '~/assets/images/img@2x.png'
import imgStory3x from '~/assets/images/img@3x.png'
import { ResponsiveImage } from '~/components/ResponsiveImage/ResponsiveImage'
import { SeeMoreBtn } from '~/components/SeeMoreBtn/SeeMoreBtn'

export const BrandStory = () => {
  return (
    <div className="relative w-full h-max py-28 grid place-content-center overflow-hidden">
      <div className="w-[1920px] h-full bg-ct-blue-color absolute right-1/2 translate-x-1/2 overflow-hidden">
        <ResponsiveImage className='object-contain absolute top-[172px] left-[190px]' src={object01} src2x={object01_2x} src3x={object01_3x} alt="Object note" />
        <ResponsiveImage className='object-contain absolute top-[61px] right-[256px]' src={object02} src2x={object02_2x} src3x={object02_3x} alt="Object plan" />
        <ResponsiveImage className='object-contain absolute top-[114px] right-[170px]' src={object03} src2x={object03_2x} src3x={object03_3x} alt="Object calendar" />
        <ResponsiveImage className='object-contain absolute bottom-[286px] -right-[96px]' src={object04} src2x={object04_2x} src3x={object04_3x} alt="Object pot" />
        <ResponsiveImage className='object-contain absolute bottom-[166px] -right-6' src={object05} src2x={object05_2x} src3x={object05_3x} alt="Object board" />
        <ResponsiveImage className='object-contain absolute bottom-[166px] left-0' src={object06} src2x={object06_2x} src3x={object06_3x} alt="Object book" />
        <ResponsiveImage className='object-contain absolute bottom-[166px] left-[192px]' src={object07} src2x={object07_2x} src3x={object07_3x} alt="Object7" />
      </div>
      <div className="z-10 h-full w-full">
        <div className="text-ct-yellow-color text-center px-4">
          <div className="text-4xl uppercase font-bold tracking-[4.5px]">Brand Story</div>
          <div className="leading-7 max-w-[720px] mx-auto mt-10 mb-16">
            모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
            다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
          </div>
        </div>
        <div className="grid w-full md:px-4 sm:px-12 px-8 xs:px-4 md:grid-cols-2 grid-cols-1">
          <div className="md:col-span-2 col-span-1 h-6 w-full bg-ct-black-color-bold px-2 flex flex-col justify-evenly">
            <div className="bg-ct-blue-color min-h-[2px] h-[2px] w-full"></div>
            <div className="bg-ct-blue-color min-h-[2px] h-[2px] w-full"></div>
          </div>
          <div className="max-w-[612px] w-full h-full col-span-1">
            <ResponsiveImage className='h-full w-full object-cover' src={imgStory} src2x={imgStory2x} src3x={imgStory3x} alt="imgStory" />
          </div>
          <div className="col-span-1 bg-white border-4 md:border-l-0 border-ct-border-color">
            <div className="flex w-full h-full flex-col justify-evenly p-8 text-ct-black-color-normal">
              <div className="font-extrabold uppercase text-2xl">What Happened’s Brand story</div>
              <div className="max-w-[500px] leading-7 line-clamp-6 my-2">
                청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을
                봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
                긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
                인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
                아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다.
              </div>
              <SeeMoreBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
