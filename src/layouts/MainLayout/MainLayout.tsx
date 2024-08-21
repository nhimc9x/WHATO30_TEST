import { Outlet } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

export const MainLayout = () => {
  return (
    <div className="">
      <Header />
      <div className="pb-20 max-w-[1920px] mx-auto w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
