import { productData } from '~/data/MOCK_DATA'
import { CardProduct } from '../components/CardProduct/CardProduct'
import { SeeMoreBtn } from '~/components/SeeMoreBtn/SeeMoreBtn'

export const GridProduct = () => {
  return (
    <div className="py-32">
      <div className="grid mx-auto grid-cols-5 gap-5 w-max">
        {productData.map((product) => (
          <CardProduct
            key={product.id}
            src={product.images.src}
            src2x={product.images.src2x}
            src3x={product.images.src3x}
            name={product.name}
            price={product.price}
            likes={product.likes}
          />
        ))}
      </div>
      <SeeMoreBtn className='mx-auto mt-20' />
    </div>
  )
}
