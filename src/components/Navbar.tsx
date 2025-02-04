import { useContext } from 'react'
import userprofile from '../../src/assets/avatar4.jpg'
import { Openclose } from '../contexts/contextprovider'

const Navbar = () => {  

  const { setOC } = useContext(Openclose)

  return (
    <>
      <div className="p-2 w-full">
        <div className="p-2 flex items-center justify-between">
          <div className='flex items-center gap-4'>
            <div onClick={() => setOC(true)} className='lg:hidden'><i className={`fa-solid fa-bars text-[18px] text-main-light-gray hover:cursor-pointer`}></i></div>
            <div><i className="fa-solid fa-magnifying-glass text-[18px] text-main-light-gray hover:cursor-pointer"></i></div>
          </div>
          <div className='flex items-center gap-4'>
            <div><i className="fa-solid fa-basket-shopping text-[18px] text-main-light-gray hover:cursor-pointer"></i></div>
            <div><i className="fa-regular fa-comments text-[18px] text-main-light-gray hover:cursor-pointer"></i></div>
            <div><i className="fa-regular fa-bell text-[18px] text-main-light-gray hover:cursor-pointer"></i></div>
            <div className='flex items-center gap-2 hover:cursor-pointer'>
              <img src={userprofile} alt="user" className='w-10 h-10 rounded-full'/>
              <div className='font-bold text-14 text-main-light-gray'>Hi</div>
              <div className='font-bold text-14 text-main-light-gray'>Ehsan</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar