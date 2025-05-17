import { Button } from '@/components/ui/button'
import React from 'react'

export const Header = () => {
  return (
    <header className='w-full bg-white border border-solid border-gray-200'>
        <div className='p-3 flex flex-wrap items-center justify-between'>
          <div className='rounded-full size-12 border-2 border-solid border-white'>
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className='size-full block'>
              <rect width="100" height="100" rx="50" fill="black"/>
              <rect x="22" y="34" width="16" height="32" rx="6" fill="#FFFFFF"/>
              <path d="M33.3215 57.3667L37.767 51.4633C38.3049 50.7491 39.438 51.0457 39.557 51.9318L40.5065 59.0064C40.5987 59.6935 39.9807 60.2637 39.3032 60.1167L33.9082 58.9455C33.1953 58.7907 32.8827 57.9494 33.3215 57.3667Z" fill="#212121"/>
              <rect x="59.3039" y="34" width="16" height="32" rx="6" fill="#FFFFFF"/>
              <path d="M70.6255 57.3667L75.071 51.4633C75.6088 50.7491 76.742 51.0457 76.8609 51.9318L77.8104 59.0064C77.9026 59.6935 77.2847 60.2637 76.6071 60.1167L71.2121 58.9455C70.4993 58.7907 70.1866 57.9494 70.6255 57.3667Z" fill="#212121"/>
            </svg>
          </div>
          <div className='flex items-center justify-end gap-3'>
              <Button variant={'ghost'} className='rounded-full size-10 p-0 hover:bg-white border border-solid border-gray-200 cursor-pointer relative'>
                <img src="../GIF/avatar.gif" className='size-full object-cover' alt="profile" />
                <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
              </Button>
          </div>
        </div>
    </header>
  )
}
