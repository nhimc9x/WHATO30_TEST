import videoImg from '~/assets/images/video.png'
import videoImg2x from '~/assets/images/video@2x.png'
import videoImg3x from '~/assets/images/video@3x.png'
import videoObj01 from '~/assets/images/video-object-01.png'
import videoObj01_2x from '~/assets/images/video-object-01@2x.png'
import videoObj01_3x from '~/assets/images/video-object-01@3x.png'
import videoObj02 from '~/assets/images/video-object-02.png'
import videoObj02_2x from '~/assets/images/video-object-02@2x.png'
import videoObj02_3x from '~/assets/images/video-object-02@3x.png'
import videoObj03 from '~/assets/images/video-object-03.png'
import videoObj03_2x from '~/assets/images/video-object-03@2x.png'
import videoObj03_3x from '~/assets/images/video-object-03@3x.png'
import videoObj04 from '~/assets/images/video-object-04.png'
import videoObj04_2x from '~/assets/images/video-object-04@2x.png'
import videoObj04_3x from '~/assets/images/video-object-04@3x.png'
import videoObj05 from '~/assets/images/video-object-05.png'
import videoObj05_2x from '~/assets/images/video-object-05@2x.png'
import videoObj05_3x from '~/assets/images/video-object-05@3x.png'
import videoObj06 from '~/assets/images/video-object-06.png'
import videoObj06_2x from '~/assets/images/video-object-06@2x.png'
import videoObj06_3x from '~/assets/images/video-object-06@3x.png'
import videoObj07 from '~/assets/images/video-object-07.png'
import videoObj07_2x from '~/assets/images/video-object-07@2x.png'
import videoObj07_3x from '~/assets/images/video-object-07@3x.png'
import videoObj08 from '~/assets/images/video-object-08.png'
import videoObj08_2x from '~/assets/images/video-object-08@2x.png'
import videoObj08_3x from '~/assets/images/video-object-08@3x.png'
import videoObj09 from '~/assets/images/video-object-09.png'
import videoObj09_2x from '~/assets/images/video-object-09@2x.png'
import videoObj09_3x from '~/assets/images/video-object-09@3x.png'
import { SeeMoreBtn } from '~/components/SeeMoreBtn/SeeMoreBtn'
import { ResponsiveImage } from '~/components/ResponsiveImage/ResponsiveImage'

export const VideoWrapper = () => {
  return (
    <div className="w-full relative pt-36 pb-60 mb-44 overflow-hidden">
      <div className="absolute w-[1920px] top-0 bottom-0 right-1/2 translate-x-1/2 overflow-hidden">
        <ResponsiveImage className='absolute object-contain bottom-0 left-[348px] z-[1]' src={videoObj01} src2x={videoObj01_2x} src3x={videoObj01_3x} alt='video-obj-error' />
        <ResponsiveImage className='absolute object-contain right-[648px] bottom-[134px]' src={videoObj02} src2x={videoObj02_2x} src3x={videoObj02_3x} alt='video-obj-cursor' />
        <ResponsiveImage className='absolute object-contain left-[222px] bottom-[160px]' src={videoObj03} src2x={videoObj03_2x} src3x={videoObj03_3x} alt='video-obj-h' />
        <ResponsiveImage className='absolute object-contain top-[260px] -left-[333px]' src={videoObj04} src2x={videoObj04_2x} src3x={videoObj04_3x} alt='video-obj-drink' />
        <ResponsiveImage className='absolute object-contain top-0 left-[226px]' src={videoObj05} src2x={videoObj05_2x} src3x={videoObj05_3x} alt='video-obj-half-h' />
        <ResponsiveImage className='absolute object-contain right-[244px] top-[240px] z-[1]' src={videoObj06} src2x={videoObj06_2x} src3x={videoObj06_3x} alt='video-obj-heart' />
        <ResponsiveImage className='absolute object-contain right-[146px] top-[130px]' src={videoObj07} src2x={videoObj07_2x} src3x={videoObj07_3x} alt='video-obj-w' />
        <ResponsiveImage className='absolute object-contain -right-[196px] bottom-[112px] z-[1]' src={videoObj08} src2x={videoObj08_2x} src3x={videoObj08_3x} alt='video-obj-agrry' />
        <ResponsiveImage className='absolute object-contain -right-[168px] bottom-[528px]' src={videoObj09} src2x={videoObj09_2x} src3x={videoObj09_3x} alt='video-obj-inky' />
      </div>
      <div className="max-w-[720px] w-full px-4 mx-auto text-ct-black-color-bold text-center mb-16">
        <div className="font-extrabold text-4xl uppercase tracking-[4.5px]">what happened</div>
        <div className="leading-7 mt-10 mb-12 text-xl">
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first
        </div>
        <SeeMoreBtn className='mx-auto' />
      </div>
      <div className="w-[90%] max-w-[1220px] mx-auto z-10 relative">
        <ResponsiveImage className='w-full object-contain' src={videoImg} src2x={videoImg2x} src3x={videoImg3x} alt='video-img' />
      </div>

    </div>
  )
}
