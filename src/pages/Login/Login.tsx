import fbIcon from '~/assets/images/facebook-icon.png'
import googleIcon from '~/assets/images/google-icon.png'
import naverIcon from '~/assets/images/naver-icon.png'
import kakaoIcon from '~/assets/images/kakao-icon.png'
import { NavLink } from 'react-router-dom'
import { InputForm } from '~/components/InputForm/InputForm'
import { ButtonForm } from '~/components/ButtonForm/ButtonForm'

export const Login = () => {
  return (
    <div className="py-28">
      <div className="max-w-[454px] w-full mx-auto px-6">
        <div className="text-[45px] text-ct-blue-color font-extrabold text-center">Welcome!</div>
        <div className="h-0.5 w-full bg-ct-black-color-normal mt-14 mb-8"></div>
        <form>
          <InputForm
            type="text"
            placeholder='아이디(이메일)'
          />
          <InputForm
            type='password'
            placeholder='비밀번호'
            className='mb-6'
          />
          <ButtonForm value='로그인하기' />
        </form>
        <div className="text-[#404142] font-medium uppercase tracking-[1.6px] text-center mt-[72px] mb-[42px]">SNS 계정으로 로그인</div>
        <div className="flex items-center justify-between mb-[52px]">
          <a href="#" className="block w-[66px] hover:scale-105 duration-200 scale-100">
            <img className='size-full object-cover' src={fbIcon} alt="facebook-icon" />
          </a>
          <a href="#" className="block w-[66px] hover:scale-105 duration-200 scale-100">
            <img className='size-full object-cover' src={googleIcon} alt="google-icon" />
          </a>
          <a href="#" className="block w-[66px] hover:scale-105 duration-200 scale-100">
            <img className='size-full object-cover' src={naverIcon} alt="naver-icon" />
          </a>
          <a href="#" className="block w-[66px] hover:scale-105 duration-200 scale-100">
            <img className='size-full object-cover' src={kakaoIcon} alt="kakao-icon" />
          </a>
        </div>
        <NavLink to={'/register'} className="w-full block h-[60px] border border-ct-border-color text-black font-semibold text-center leading-[60px]">
          계정이 없으신가요? 간편가입하기
        </NavLink>
        <div className="mt-8 text-sm text-[#1a58f2] font-medium flex items-center justify-evenly">
          <NavLink to={''} className="text-sm text-[#1a58f2] font-medium">
            아이디(이메일)찾기
          </NavLink>
          <NavLink to={''} className="text-sm text-[#1a58f2] font-medium">
            비밀번호 찾기
          </NavLink>
        </div>
      </div>
    </div>
  )
}
