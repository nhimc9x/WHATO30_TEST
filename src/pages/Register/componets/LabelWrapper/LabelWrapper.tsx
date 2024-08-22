/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { RegisterFormType } from '../../Register'

interface Props {
  register: UseFormRegister<RegisterFormType>;
  error: FieldErrors<RegisterFormType>;
  id: keyof RegisterFormType;
  placeholder?: string;
  type: string;
  title?: string;
  [key: string]: any;
  valid?: any;
}

export const LabelWrapper = ({ register, error, valid, id, placeholder, type, title, ...props }: Props) => {
  return (
    <label className='block mb-2' htmlFor={id}>
      <div className="text-ct-black-color-normal font-semibold mb-2">{title}</div>
      <input
        className='border border-[#a1a1a1] focus:border-ct-blue-color outline-none w-full h-[50px] px-3 placeholder:text-[#a1a1a1] placeholder:text-sm'
        type={type}
        placeholder={placeholder}
        {...register(id, { ...valid })}
        {...props}
      />
      <small className='text-red-500 text-xs h-[18px] block mt-1'>{error[id]?.message}</small>
    </label>
  )
}
