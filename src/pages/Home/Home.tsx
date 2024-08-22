import { ResponsiveImage } from '~/components/ResponsiveImage/ResponsiveImage'
import mainBanner from '~/assets/images/main-banner.png'
import mainBanner2x from '~/assets/images/main-banner@2x.png'
import mainBanner3x from '~/assets/images/main-banner@3x.png'
import { Introduction } from './Introduction/Introduction'
import { BestProduct } from './BestProduct/BestProduct'
import { GridProduct } from './GridProduct/GridProduct'
import { BrandStory } from './BrandStory/BrandStory'
import { Issue } from './Issue/Issue'
import { VideoWrapper } from './VideoWrapper/VideoWrapper'

export const Home = () => {
  return (
    <div className="">
      <ResponsiveImage src={mainBanner} src2x={mainBanner2x} src3x={mainBanner3x} alt="Main Banner" />
      <Introduction />
      <BestProduct />
      <GridProduct />
      <BrandStory />
      <Issue />
      <VideoWrapper />
    </div >
  )
}
