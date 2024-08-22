import { ResponsiveImage } from '~/components/ResponsiveImage/ResponsiveImage'
import heartIcon from '~/assets/images/hearticon.png'
import heartIcon_2x from '~/assets/images/hearticon@2x.png'
import heartIcon_3x from '~/assets/images/hearticon@3x.png'

interface Props {
  src: string;
  src2x?: string;
  src3x?: string;
  name: string;
  price: string;
  likes: number;
}

export const CardProduct = ({ src, src2x, src3x, name, price, likes }: Props) => {
  return (
    <div className="pb-8">
      <div className="size-[300px]">
        <ResponsiveImage className='w-full h-full object-cover object-center' src={src} src2x={src2x} src3x={src3x} alt="Product Image" />
      </div>
      <div className="text-lg font-semibold text-ct-black-color-normal my-7">{name}</div>
      <div className="flex items-center justify-between">
        <div className="text-ct-black-color-normal">{price}</div>
        <div className="flex items-center gap-2">
          <ResponsiveImage className='w-full h-full object-contain' src={heartIcon} src2x={heartIcon_2x} src3x={heartIcon_3x} alt="Heart Icon" />
          <div className="text-[#666666]">{likes}</div>
        </div>
      </div>
    </div>
  )
}
