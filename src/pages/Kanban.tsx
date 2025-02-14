import { useEffect, useRef } from 'react'
import { Swapy } from '../types/index'
import { createSwapy } from '../types/index'

const Kanban = () => {

    const swapyRef = useRef<Swapy | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
    if (containerRef.current) {
      swapyRef.current = createSwapy(containerRef.current, {})

      // swapyRef.current.enable(false)
      // swapyRef.current.destroy()
      // console.log(swapyRef.current.slotItemMap())

      swapyRef.current.onBeforeSwap((event) => {
        console.log('beforeSwap', event)
        // This is for dynamically enabling and disabling swapping.
        // Return true to allow swapping, and return false to prevent swapping.
        return true
      })

      swapyRef.current.onSwapStart((event) => {
        console.log('start', event);
      })
      swapyRef.current.onSwap((event) => {
        console.log('swap', event);
      })
      swapyRef.current.onSwapEnd((event) => {
        console.log('end', event);
      })
    }
    return () => {
      swapyRef.current?.destroy()
    }
  }, [])


return (
<>
    <div>
      <div className="lg:ml-[23%]">
          <div className='p-2 m-2'>
          <div className="container grid grid-rows-2 grid-cols-2 gap-2" ref={containerRef}>
             <div className="slot top col-span-2" data-swapy-slot="a">
               <div className="item item-a" data-swapy-item="a">
                 <div className='bg-main-dark-bg p-2 rounded-xl h-32 flex justify-center items-center hover:'>A</div>
               </div>
             </div>
             {/* <div className="middle"> */}
               <div className="slot left" data-swapy-slot="b">
                 <div className="item item-b" data-swapy-item="b">
                  {/* tag paiini ghabaliat gabegaii ra migirad va gheireh fal mikonad */}
                  {/* <div className="handle" data-swapy-handle></div>  */}
                  <div className='bg-main-dark-bg p-2 rounded-xl h-32 flex justify-center items-center hover:'>B</div>
                 </div>
               </div>
               <div className="slot right" data-swapy-slot="c">
               <div className="item item-c" data-swapy-item="c">
               <div className='bg-main-dark-bg p-2 rounded-xl h-32 flex justify-center items-center hover:'>C</div>
               </div>
               </div>
             {/* </div> */}
             <div className="slot bottom col-span-2" data-swapy-slot="d">
               <div className="item item-d" data-swapy-item="d">
                 <div className='bg-main-dark-bg p-2 rounded-xl h-32 flex justify-center items-center hover:'>D</div>
               </div>
             </div>
           </div>
          </div>
        </div>
    </div>
  </>
  )}

export default Kanban