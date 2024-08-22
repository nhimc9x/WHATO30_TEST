import { useForm } from 'react-hook-form'
import { LabelWrapper } from './componets/LabelWrapper/LabelWrapper'
import { ButtonForm } from '~/layouts/MainLayout/components/ButtonForm/ButtonForm'

export type RegisterFormType = {
  email: string;
  password: string;
  comfirmPassword: string;
  address: string;
  additionalAddress: string;
  phone: string;
}

export const Register = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterFormType>()

  const onSubmit = (data: RegisterFormType) => {
    console.log(data)
    // Call API
    alert('Registered successfully!!')
  }

  return (
    <div className="py-28">
      <div className="max-w-[454px] w-full mx-auto">
        <div className="text-[45px] text-ct-blue-color font-extrabold text-center uppercase">Join us</div>
        <div className="h-0.5 w-full bg-ct-black-color-normal mt-14 mb-8"></div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LabelWrapper
            register={register}
            error={errors}
            id='email'
            placeholder='example@email.com'
            type='email'
            title='아이디(이메일) *'
            valid={{
              required: 'Email is required'
            }}
          />
          <LabelWrapper
            register={register}
            error={errors}
            id='password'
            placeholder='영문, 숫자, 특수문자를 포함한 8~12자리'
            type='password'
            title='비밀번호 *'
            valid={{
              required: 'Password is required',
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/,
                message: 'Invalid password'
              }
            }}
          />
          <LabelWrapper
            register={register}
            error={errors}
            id='comfirmPassword'
            type='password'
            title='비밀번호 확인 *'
            valid={{
              validate: (value: string) => {
                if (watch('password') !== value) {
                  return 'Password matches'
                }
              }
            }}
          />
          <label htmlFor='address' className='block mb-4'>
            <div className="text-ct-black-color-normal font-semibold mb-2">주소</div>
            <div className="border border-[#a1a1a1] [&:has(:focus-visible)]:border-ct-blue-color w-full h-[50px] flex items-center">
              <input
                className='px-3 h-full w-full flex-1 placeholder:text-[#a1a1a1] placeholder:text-sm bg-transparent outline-none'
                type='text'
                id='address'
                {...register('address')}
              />
              <div className="text-sm text-[#659bf5] px-5 cursor-pointer">검색</div>
            </div>
          </label>
          <LabelWrapper
            register={register}
            error={errors}
            id='additionalAddress'
            placeholder='추가 주소'
            type='text'
          />
          <LabelWrapper
            register={register}
            error={errors}
            id='phone'
            type='phone'
            title='연락처'
          />
          <div className="h-0.5 w-full bg-ct-black-color-normal mt-10 mb-6"></div>
          <div className="mb-12">
            <label htmlFor='clause' className='flex items-center gap-2 justify-end mb-3'>
              <input type="checkbox" name="" id="clause" required />
              <div className="text-sm text-black">
                <a href='' className="text-[#659bf5]">약관 동의</a> 및
                <a href='' className="text-[#659bf5]"> 개인정보 처리 방침</a>
                에 동의합니다. (필수)
              </div>
            </label>
            <label htmlFor='ads' className='flex items-center gap-2 justify-end'>
              <input type="checkbox" name="" id="ads" />
              <div className="text-sm text-black">
                광고 및 메일 수신에 동의합니다. (선택)
              </div>
            </label>
          </div>
          <ButtonForm value='가입하기' />
        </form>
      </div>
    </div>
  )
}
