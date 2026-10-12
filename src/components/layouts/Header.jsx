import { Bell, Home, LogOut, Menu, Settings } from 'lucide-react'
import SearchInput from '../ui/SearchInput'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react';

const Header = ({ toggleSidebar, toggleMobilSidebar, }) => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScroll(window.scrollY > 0);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-3 right-0 left-auto z-40
    flex w-full shrink-0 flex-col
    box-border
    min-h-[4.6875rem]
    items-center
    rounded-2xl
    py-2
    text-[#344767]
   
    transition-shadow duration-300
    ease-[cubic-bezier(0.4,0,0.2,1)]
    
  ${isScroll ? "bg-white/80 shadow-[inset_0_0_1px_1px_rgba(255,255,255,0.9),0_20px_27px_0_rgba(0,0,0,0.05)]  backdrop-saturate-[200%]  backdrop-blur-[30px]" : ""}`}
    >
      <div className='w-full flex items-center justify-between px-4 py-3 '>
        <div className='flex items-center flex-row gap-4'>
          {/* mobil menu */}
          <Button variant='secondary' className='lg:hidden' onClick={toggleMobilSidebar}>
            <Menu size={20} />
          </Button>

          {/* Large screen */}
          <Button variant='ghost' onClick={toggleSidebar} className='hidden lg:block'>
            <Menu size={20} />
          </Button>
          <div className='flex items-center gap-2'>
            <Home size={20} /> /
            <span className='text-md font-normal text-gray-900'>Dashboard</span>
          </div>
        </div>

        <div className='flex items-center flex-row gap-4'>
          <SearchInput />
          <Settings size={20} className='text-gray-900' />
          <Bell size={20} className='text-gray-900' />
          <div className='flex items-center gap-2'>
            <LogOut size={20} className='text-gray-900' />
            <span>Log out</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
