import { Button } from '@/components/ui/button'
import React from 'react'

export const ChatHead = () => {
    return (
        <div className='flex items-center justify-between gap-3 border-b border-solid border-gray-200 py-2 px-3'>
            <div className='flex items-center gap-2.5'>
                <Button variant={'ghost'} className='hover:bg-transparent cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </Button>
                <Button variant={'ghost'} className='rounded-full size-10 p-0 hover:bg-white border border-solid border-gray-200 cursor-pointer relative'>
                    <img src="../GIF/avatar.gif" className='size-full object-cover' alt="profile" />
                    <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                </Button>
            </div>
        </div>
    )
}
