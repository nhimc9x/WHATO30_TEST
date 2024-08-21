/* eslint-disable @typescript-eslint/no-explicit-any */

interface Props {
  className?: string
  src: string
  src2x?: string
  src3x?: string
  alt?: string
  loading?: 'lazy' | 'eager'
  [key: string]: any
}

export const ResponsiveImage = ({ className, src, src2x, src3x, alt, loading, ...props }: Props) => {

  const srcSet = [
    src ? `${src} 1x` : '',
    src2x ? `${src2x} 2x` : '',
    src3x ? `${src3x} 3x` : ''
  ].filter(Boolean).join(', ')

  return (
    <img
      className={className}
      src={src}
      srcSet={srcSet}
      alt={alt}
      loading={loading || 'lazy'}
      sizes='(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw'
      {...props}
    />
  )
}
