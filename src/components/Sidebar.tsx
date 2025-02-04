import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [icond, seticond] = useState(true);
  const [iconp, seticonp] = useState(true);
  const [icona, seticona] = useState(true);
  const [iconc, seticonc] = useState(true);
  const [sidx, setsidx] = useState(true);

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      setsidx(true);
    }
  });

  return (
    <>
      {/* context sidbar */}
      <div className={`${sidx ? "block" : "close"} bg-main-dark-bg fixed z-50 h-screen w-[62%] overflow-y-scroll pb-2.5 shadow-[0px_0px_13px_0px] sm:w-[35%] md:w-[35%] lg:w-[22%]`}>
        {/* header sidbar */}
        <div className="flex items-center justify-between px-4 py-5">
          <div className="flex items-center">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.9} stroke="white" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"/>
            </svg>
            <div className="pl-2 font-bold text-white">shoppy</div>
          </div>
          <div onClick={() => {setsidx(false);}}className="lg:hidden">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="size-5 hover:cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
            </svg>
          </div>
        </div>
        {/* dashboard */}
        <div className="grid gap-2 py-5">
          <div className="flex items-center justify-between">
            <div className="text-14 text-main-light-gray px-4">DASHBOARD</div>
            <div onClick={() => {icond ? seticond(false) : seticond(true);}}className="bg-secondary-dark-bg mr-4 rounded-[8px] p-1 duration-300 hover:cursor-pointer">
              {icond ? (
                <>
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="size-4 font-bold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                  </svg>
                </>
              ) : (
                <>
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="size-4 font-bold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"/>
                  </svg>
                </>
              )}
            </div>
          </div>
          <div className={` ${icond ? "flex" : "hidden"} hover:bg-light-gray mx-2 items-center rounded-2xl px-5 py-2 duration-300 hover:cursor-pointer`}>
              <div>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-5 font-bold text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
                </svg>
              </div>
              <div className="text-14 pl-4 text-white"><Link to={'/Ecommerce'}>Ecommerce</Link></div>
          </div>
        </div>
        {/* pages */}
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <div className="text-14 text-main-light-gray px-4">PAGES</div>
            <div onClick={() => {iconp ? seticonp(false) : seticonp(true);}} className="bg-secondary-dark-bg mr-4 rounded-[8px] p-1 duration-300 hover:cursor-pointer">
              {iconp ? (
                <>
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="size-4 font-bold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                  </svg>
                </>
              ) : (
                <>
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="size-4 font-bold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"/>
                  </svg>
                </>
              )}
            </div>
          </div>
          <div className={`${iconp ? "block" : "hidden"}`}>
            <div className="hover:bg-light-gray mx-2 flex items-center rounded-2xl px-5 py-2 duration-300 hover:cursor-pointer">
              <div>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-5 font-bold text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"/>
                </svg>
              </div>
              <div className="text-14 pl-4 text-white"><Link to={'/Orders'}>Orders</Link></div>
            </div>
            <div className="hover:bg-light-gray mx-2 flex items-center rounded-2xl px-5 py-2 duration-300 hover:cursor-pointer">
              <div>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-5 font-bold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/>
                </svg>
              </div>
              <div className="text-14 pl-4 text-white"><Link to={'/Employees'}>Employees</Link></div>
            </div>
            <div className="hover:bg-light-gray mx-2 flex items-center rounded-2xl px-5 py-2 duration-300 hover:cursor-pointer">
              <div>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-5 font-bold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"/>
                </svg>
              </div>
              <div className="text-14 pl-4 text-white"><Link to={'/Customers'}>Customers</Link></div>
            </div>
          </div>
        </div>
        {/* apps */}
        <div className="grid gap-2 py-5">
          <div className="flex items-center justify-between">
            <div className="text-14 text-main-light-gray px-4">APPS</div>
            <div onClick={() => {icona ? seticona(false) : seticona(true);}} className="bg-secondary-dark-bg mr-4 rounded-[8px] p-1 duration-300 hover:cursor-pointer">
              {icona ? (
                <>
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="size-4 font-bold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                  </svg>
                </>
              ) : (
                <>
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="size-4 font-bold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"/>
                  </svg>
                </>
              )}
            </div>
          </div>
          <div className={`${icona ? "block" : "hidden"}`}>
            <div className="hover:bg-light-gray mx-2 flex items-center rounded-2xl px-5 py-2 duration-300 hover:cursor-pointer">
              <div>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-5 font-bold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"/>
                </svg>
              </div>
              <div className="text-14 pl-4 text-white"><Link to={'/Calendar'}>Calendar</Link></div>
            </div>
            <div className="hover:bg-light-gray mx-2 flex items-center rounded-2xl px-5 py-2 duration-300 hover:cursor-pointer">
              <div>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-5 font-bold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"/>
                </svg>
              </div>
              <div className="text-14 pl-4 text-white"><Link to={'/Kanban'}>Kanban</Link></div>
            </div>
            <div className="hover:bg-light-gray mx-2 flex items-center rounded-2xl px-5 py-2 duration-300 hover:cursor-pointer">
              <div>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-5 font-bold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
                </svg>
              </div>
              <div className="text-14 pl-4 text-white"><Link to={'/Editor'}>Editor</Link></div>
            </div>
            <div className="hover:bg-light-gray mx-2 flex items-center rounded-2xl px-5 py-2 duration-300 hover:cursor-pointer">
              <div>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-5 font-bold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"/>
                </svg>
              </div>
              <div className="text-14 pl-4 text-white"><Link to={'/ColorPicker'}>ColorPicker</Link></div>
            </div>
          </div>
        </div>
        {/* charts */}
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <div className="text-14 text-main-light-gray px-4">CHARTS</div>
            <div onClick={() => {iconc ? seticonc(false) : seticonc(true); }} className="bg-secondary-dark-bg mr-4 rounded-[8px] p-1 duration-300 hover:cursor-pointer">
              {iconc ? (
                <>
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="size-4 font-bold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                  </svg>
                </>
              ) : (
                <>
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="size-4 font-bold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"/>
                  </svg>
                </>
              )}
            </div>
          </div>
          <div className={`${iconc ? "block" : "hidden"}`}>
            <div className="hover:bg-light-gray mx-2 flex items-center rounded-2xl px-5 py-2 duration-300 hover:cursor-pointer">
              <div>
                <svg className="h-5.5 w-5.5 font-bold text-white" aria-hidden="true" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207"/>
                </svg>
              </div>
              <div className="text-14 pl-4 text-white"><Link to={'/Line'}>Line</Link></div>
            </div>
            <div className="hover:bg-light-gray mx-2 flex items-center rounded-2xl px-5 py-2 duration-300 hover:cursor-pointer">
              <div>
                <i className="fa-solid fa-chart-area text-white"></i>
              </div>
              <div className="text-14 pl-4 text-white"><Link to={'/Area'}>Area</Link></div>
            </div>
            <div className="hover:bg-light-gray mx-2 flex items-center rounded-2xl px-5 py-2 duration-300 hover:cursor-pointer">
              <div>
                <i className="fa-solid fa-chart-column text-white"></i>
              </div>
              <div className="text-14 pl-4 text-white"><Link to={'/Bar'}>Bar</Link></div>
            </div>
            <div className="hover:bg-light-gray mx-2 flex items-center rounded-2xl px-5 py-2 duration-300 hover:cursor-pointer">
              <div>
                <svg className="h-5.5 w-5.5 text-white" aria-hidden="true" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"/>
                  <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"/>
                </svg>
              </div>
              <div className="text-14 pl-4 text-white"><Link to={'/Pie'}>Pie</Link></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
