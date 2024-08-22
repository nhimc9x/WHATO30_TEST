/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from 'clsx'

interface Props {
  value: string;
  className?: string;
  [key: string]: any;
}

export const ButtonForm = ({ value, className, ...props }: Props) => {
  return (
    <button
      type='submit'
      className={clsx(
        'bg-ct-blue-color text-white tracking-[1.6px] h-[60px] w-full font-medium',
        className
      )}
      {...props}
    >
      {value}
    </button>
  )
}
