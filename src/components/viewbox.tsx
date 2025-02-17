const Viewbox = ({data}:any) => {
  return (
    <>
    <div className='p-2 m-2 bg-white text-black rounded-xl' dangerouslySetInnerHTML={{ __html: data }}></div>
    </>
  )
}

export default Viewbox