import DemoApp from "../components/Calendar"

const Calendar = () => {
  return (
    <>
    <div>
      <div className="lg:ml-[23%]">
        <div className='p-3 m-2 bg-main-dark-bg rounded-xl text-white'>
          <DemoApp/>
        </div>  
      </div>
    </div>
    </>
  )
}

export default Calendar