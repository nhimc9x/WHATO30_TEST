/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from 'clsx'

interface Props {
  type: string;
  placeholder?: string;
  className?: string;
  [key: string]: any;
}

export const InputForm = ({ type, placeholder, className, ...props }: Props) => {
  return (
    <input
      className={clsx(
        'border border-[#a1a1a1] focus:border-ct-blue-color outline-none w-full h-[50px] px-3 placeholder:text-[#a1a1a1] placeholder:text-sm mb-4',
        className
      )}
      type={type}
      placeholder={placeholder}
      {...props}
    />
  )
}
