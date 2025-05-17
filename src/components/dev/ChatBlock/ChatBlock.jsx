import React from 'react'
import { Header } from '../Header/Header'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Input } from '@/components/ui/input'
import { ChatHead } from './ChatHead/ChatHead'

export const ChatBlock = () => {
  return (
    <section className='h-screen w-full bg-white flex flex-col'>
      <Header/>
      <div className='h-96 grow p-4'>
        <div className='rounded-3xl bg-white shadow border border-solid border-gray-200 h-full flex flex-wrap'>
            <div className='w-1/4 h-full border-r border-solid border-gray-200'>
              <ScrollArea className="h-[calc(100dvh_-_105px)] w-full p-4">
                <ul className='flex flex-col gap-2.5'>
                  <li className='flex items-center gap-2.5 border border-solid border-transparent hover:border-gray-100 hover:bg-gray-50 cursor-pointer p-1 rounded-xl max-w-full overflow-ellipsis'>
                      <div className='size-10 relative rounded-full border border-solid border-gray-200'>
                        <img src="../GIF/avatar.gif" className='size-full rounded-full object-cover' alt="profile img" />
                        <span class="bottom-0 right-0 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                      </div>
                      <div className='w-2/4 grow block'>
                        <h4 className='font-semibold text-base DMSans whitespace-nowrap max-w-full overflow-hidden text-ellipsis'>Flo-Jo</h4>
                        <p className='text-sm text-gray-600 whitespace-nowrap max-w-full w-full overflow-hidden text-ellipsis block DMSans'>Great App, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, doloremque.!!!</p>
                      </div>
                  </li>
                  <li className='flex items-center gap-2.5 border border-solid border-gray-200 cursor-pointer p-1 rounded-xl bg-gray-100 max-w-full overflow-ellipsis'>
                      <div className='size-10 relative rounded-full border border-solid border-gray-200'>
                        <img src="../GIF/avatar.gif" className='size-full rounded-full object-cover' alt="profile img" />
                        <span class="bottom-0 right-0 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                      </div>
                      <div className='w-2/4 grow block'>
                        <h4 className='font-semibold text-base DMSans whitespace-nowrap max-w-full overflow-hidden text-ellipsis'>Shogun</h4>
                        <p className='text-sm text-gray-600 whitespace-nowrap max-w-full w-full overflow-hidden text-ellipsis block DMSans'>Great App, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, doloremque.!!!</p>
                      </div>
                  </li>
                  <li className='flex items-center gap-2.5 border border-solid border-transparent hover:border-gray-100 hover:bg-gray-50 cursor-pointer p-1 rounded-xl max-w-full overflow-ellipsis'>
                      <div className='size-10 relative rounded-full border border-solid border-gray-200'>
                        <img src="../GIF/avatar.gif" className='size-full rounded-full object-cover' alt="profile img" />
                        <span class="bottom-0 right-0 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                      </div>
                      <div className='w-2/4 grow block'>
                        <h4 className='font-semibold text-base DMSans whitespace-nowrap max-w-full overflow-hidden text-ellipsis'>Friend_01</h4>
                        <p className='text-sm text-gray-600 whitespace-nowrap max-w-full w-full overflow-hidden text-ellipsis block DMSans'>Great App, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, doloremque.!!!</p>
                      </div>
                  </li>
                  <li className='flex items-center gap-2.5 border border-solid border-transparent hover:border-gray-100 hover:bg-gray-50 cursor-pointer p-1 rounded-xl max-w-full overflow-ellipsis'>
                      <div className='size-10 relative rounded-full border border-solid border-gray-200'>
                        <img src="../GIF/avatar.gif" className='size-full rounded-full object-cover' alt="profile img" />
                        <span class="bottom-0 right-0 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                      </div>
                      <div className='w-2/4 grow block'>
                        <h4 className='font-semibold text-base DMSans whitespace-nowrap max-w-full overflow-hidden text-ellipsis'>Friend_02</h4>
                        <p className='text-sm text-gray-600 whitespace-nowrap max-w-full w-full overflow-hidden text-ellipsis block DMSans'>Great App, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, doloremque.!!!</p>
                      </div>
                  </li>
                </ul>
              </ScrollArea>
            </div>
            <div className='w-2/4 h-full grow flex flex-col'>
              <ChatHead/>
              <ScrollArea className="h-[calc(100dvh_-_224px)] w-full p-4">
                  <ul className='flex flex-col gap-2'>
                    <li className='text-sm font-medium DMSans max-w-4/6 bg-white border border-solid border-gray-200 p-2 px-3 rounded-2xl rounded-bl-xs w-fit mr-auto'>Hi...</li>
                    <li className='text-sm font-medium DMSans max-w-4/6 bg-white border border-solid border-gray-200 p-2 px-3 rounded-2xl rounded-br-xs w-fit ml-auto'>Ohh Hi...</li>
                    <li className='text-sm font-medium DMSans max-w-4/6 bg-white border border-solid border-gray-200 p-2 px-3 rounded-2xl rounded-br-xs w-fit ml-auto'>Hello...!!</li>
                    <li className='text-sm font-medium DMSans max-w-4/6 bg-white border border-solid border-gray-200 p-2 px-3 rounded-2xl rounded-br-xs w-fit ml-auto'>Hello...!!</li>
                    <li className='text-sm font-medium DMSans max-w-4/6 bg-white border border-solid border-gray-200 p-2 px-3 rounded-2xl rounded-br-xs w-fit ml-auto'>Hello...!!</li>
                    <li className='text-sm font-medium DMSans max-w-4/6 bg-white border border-solid border-gray-200 p-2 px-3 rounded-2xl rounded-br-xs w-fit ml-auto'>Hello...!!</li>
                    <li className='text-sm font-medium DMSans max-w-4/6 bg-white border border-solid border-gray-200 p-2 px-3 rounded-2xl rounded-br-xs w-fit ml-auto'>Hello...!!</li>
                    <li className='text-sm font-medium DMSans max-w-4/6 bg-white border border-solid border-gray-200 p-2 px-3 rounded-2xl rounded-br-xs w-fit ml-auto'>Hello...!!</li>
                    <li className='text-sm font-medium DMSans max-w-4/6 bg-white border border-solid border-gray-200 p-2 px-3 rounded-2xl rounded-br-xs w-fit ml-auto'>Hello...!!</li>
                    <li className='text-sm font-medium DMSans max-w-4/6 bg-white border border-solid border-gray-200 p-2 px-3 rounded-2xl rounded-br-xs w-fit ml-auto'>Hello...!!</li>
                    <li className='text-sm font-medium DMSans max-w-4/6 bg-white border border-solid border-gray-200 p-2 px-3 rounded-2xl rounded-br-xs w-fit ml-auto'>Hello...!!</li>
                    <li className='text-sm font-medium DMSans max-w-4/6 bg-white border border-solid border-gray-200 p-2 px-3 rounded-2xl rounded-br-xs w-fit ml-auto'>Hello...!!</li>
                    <li className='text-sm font-medium DMSans max-w-4/6 bg-white border border-solid border-gray-200 p-2 px-3 rounded-2xl rounded-br-xs w-fit ml-auto'>Hello...!!</li>
                    <li className='text-sm font-medium DMSans max-w-4/6 bg-white border border-solid border-gray-200 p-2 px-3 rounded-2xl rounded-br-xs w-fit ml-auto'>Hello...!!</li>
                    <li className='text-sm font-medium DMSans max-w-4/6 bg-white border border-solid border-gray-200 p-2 px-3 rounded-2xl rounded-br-xs w-fit ml-auto'>Hello...!!</li>
                    <li className='text-sm font-medium DMSans max-w-4/6 bg-white border border-solid border-gray-200 p-2 px-3 rounded-2xl rounded-br-xs w-fit ml-auto'>Hello...!!</li>
                    <li className='text-sm font-medium DMSans max-w-4/6 bg-white border border-solid border-gray-200 p-2 px-3 rounded-2xl rounded-br-xs w-fit ml-auto'>Hello...!!</li>
                    <li className='text-sm font-medium DMSans max-w-4/6 bg-white border border-solid border-gray-200 p-2 px-3 rounded-2xl rounded-br-xs w-fit ml-auto'>Hello...!!</li>
                    <li className='text-sm font-medium DMSans max-w-4/6 bg-white border border-solid border-gray-200 p-2 px-3 rounded-2xl rounded-br-xs w-fit ml-auto'>Hello...!!</li>
                    <li className='text-sm font-medium DMSans max-w-4/6 bg-white border border-solid border-gray-200 p-2 px-3 rounded-2xl rounded-br-xs w-fit ml-auto'>Hello...!!</li>
                    <li className='text-sm font-medium DMSans max-w-4/6 bg-white border border-solid border-gray-200 p-2 px-3 rounded-2xl rounded-br-xs w-fit ml-auto'>Hello...!!</li>
                    <li className='text-sm font-medium DMSans max-w-4/6 bg-white border border-solid border-gray-200 p-2 px-3 rounded-2xl rounded-br-xs w-fit ml-auto'>Hello...!!</li>
                    <li className='text-sm font-medium DMSans max-w-4/6 bg-white border border-solid border-gray-200 p-2 px-3 rounded-2xl rounded-br-xs w-fit ml-auto'>Hello...!!</li>
                    <li className='text-sm font-medium DMSans max-w-4/6 bg-white border border-solid border-gray-200 p-2 px-3 rounded-2xl rounded-br-xs w-fit ml-auto'>Hello...!!</li>
                  </ul>
              </ScrollArea>
              <div className='flex items-center gap-3 border-t border-solid border-gray-200 py-2 px-4 cursor-pointer'>
                <Popover>
                  <PopoverTrigger>
                    <Button className={'rounded-full size-10 p-1.5'}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="start" className={'w-36 p-0 overflow-hidden'}>
                      <ul>
                        <li className='flex items-center gap-3 cursor-pointe p-3 relative bg-white hover:bg-gray-50 transition duration-150 ease-in'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                          </svg>
                          <span className='text-sm'>File</span>
                          <input type="file" className='absolute top-0 left-0 opacity-0 z-10 w-full h-full' name="" id="" />
                        </li>
                      </ul>
                  </PopoverContent>
                </Popover>
                <div className='flex items-center gap-3 w-2/4 grow'>
                    <Input placeholder="Message" className={'w-2/4 grow rounded-full py-2.5'} />
                    <Button className={'rounded-full size-10 p-1.5'}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                      </svg>
                    </Button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
