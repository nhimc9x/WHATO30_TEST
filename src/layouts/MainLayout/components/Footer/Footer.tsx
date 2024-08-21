import snsicon1 from '~/assets/images/snsicon-01.png'
import snsicon2 from '~/assets/images/snsicon-02.png'
import snsicon3 from '~/assets/images/snsicon-03.png'
import { aboutUs, help, myAccount, myOrder, whatHappened } from './listFooterNavigations'
import { FooterNavColumn } from './FooterNavColumn/FooterNavColumn'

export const Footer = () => {
  return (
    <div className="px-24 text-sm">
      <div className="border-t border-b border-[#f4f4f4] py-12">
        <div className="flex justify-between">
          <FooterNavColumn title="what happened" listNavigation={whatHappened} />
          <div className="grid grid-cols-4 gap-24">
            <FooterNavColumn title="about us" listNavigation={aboutUs} />
            <FooterNavColumn title="my order" listNavigation={myOrder} />
            <FooterNavColumn title="my account" listNavigation={myAccount} />
            <FooterNavColumn title="help" listNavigation={help} />
          </div>
        </div>
      </div>
      <div className="pt-6 pb-20 leading-6 text-[#a9a9a9] flex justify-between">
        <div className="">
          <div className="">
            © 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
          </div>
          <div className="">
            서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침
          </div>
        </div>
        <div className="flex gap-5">
          <a href='' className="block hover:scale-110 duration-200">
            <img src={snsicon1} alt="snsicon1" />
          </a>
          <a href='' className="block hover:scale-110 duration-200">
            <img src={snsicon2} alt="snsicon2" />
          </a>
          <a href='' className="block hover:scale-110 duration-200">
            <img src={snsicon3} alt="snsicon3" />
          </a>
        </div>
      </div>
    </div>
  )
}
