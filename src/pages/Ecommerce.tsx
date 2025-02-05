import { Button } from "../components"
import BarChart from "../components/Charts/Bar"
import AreaChart from "../components/Charts/Area"

const Ecommerce = () => {
  return (
    <>
    <div>
      <div className="lg:ml-[23%]">
        <div className="m-2 p-2 grid grid-cols-1 gap-2">
          <div className="bg-[url(../assets/baner.jpg)] bg-center bg-cover bg-no-repeat rounded-xl w-full h-40 md:h-50">
            <div className="text-white p-2 h-full flex flex-col gap-1 place-content-between">
              <div className="m-2">
                <div className="font-bold text-[18px]">baner test</div>
                <div className="font-bold text-[18px]">$6530.23</div>
              </div>
              <Button text={"download"}/>
            </div>
          </div>
          <div className="w-full h-[150px] lg:h-[80px] grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-1">
            <div className="bg-main-dark-bg rounded-xl p-2 flex items-center pl-6 gap-4">
              <div className="bg-secondary-dark-bg p-2 rounded-xl">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-5 font-bold text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"/>
                </svg>
              </div>
              <div className="text-white">order<span className="ml-1 text-yellow-500">43,501</span></div>
            </div>
            <div className="bg-main-dark-bg rounded-xl p-2 flex items-center pl-6 gap-4">
              <div className="bg-secondary-dark-bg p-2 rounded-xl">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-5 font-bold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"/>
                </svg>
              </div>
              <div className="text-white">customer<span className="ml-1 text-yellow-500">11,234</span></div>
            </div>
            <div className="bg-main-dark-bg rounded-xl p-2 flex items-center pl-6 gap-4">
              <div className="bg-secondary-dark-bg p-2 rounded-xl">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-5 font-bold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                </svg>
              </div>
              <div className="text-white">blog<span className="ml-1 text-yellow-500">45</span></div>
            </div>
            <div className="bg-main-dark-bg rounded-xl p-2 flex items-center pl-6 gap-4">
              <div className="bg-secondary-dark-bg p-2 rounded-xl">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-5 font-bold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/>
                </svg>
              </div>
              <div className="text-white">Employees<span className="ml-1 text-yellow-500">35</span></div>
            </div>
          </div>
          <div className="grid gap-2 grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 justify-center items-center">
            <div className="bg-main-dark-bg p-2 rounded-xl text-center"><BarChart/></div>
            <div className="bg-main-dark-bg p-2 rounded-xl text-center"><AreaChart/></div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Ecommerce