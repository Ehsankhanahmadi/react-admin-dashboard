import Editorbox from "../components/Editor"

const Editor = () => {
  return (
    <>
    <div>
      <div className="lg:ml-[23%]">
          <div className='m-2 p-4 bg-main-dark-bg rounded-xl text-white'>
            <Editorbox/>
          </div>
        </div>
    </div>
    </>
  )
}

export default Editor