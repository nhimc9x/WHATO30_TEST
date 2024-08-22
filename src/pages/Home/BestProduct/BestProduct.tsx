import besBg from '~/assets/images/bes-bg.png'
import { BestProductItem } from '../components/BestProductItem/BestProductItem'
import { bestProducts } from '~/data/MOCK_DATA'

export const BestProduct = () => {
  return (
    <div
      style={{ backgroundImage: `url(${besBg})` }}
      className="w-full h-max bg-cover bg-center py-28"
    >
      <div className="text-ct-orange-color text-center px-6">
        <div className="text-5xl font-bold tracking-[5px] uppercase mb-10">Best Product</div>
        <div className="text-xl max-w-[700px] mx-auto">
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first
        </div>
      </div>
      <div className="sms:px-8 px-2 my-20">
        <div className="w-[86%] mx-auto gap-y-28 h-max grid 2xl:grid-cols-3 grid-cols-1">
          {bestProducts.map((product) => (
            <BestProductItem
              key={product.id}
              rankNumber={product.ranking}
              description={product.description}
              src={product.images.src}
              src2x={product.images.src2x}
              src3x={product.images.src3x}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
