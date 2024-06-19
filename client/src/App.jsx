
import './App.css'
import arrow from './assets/arrow.svg'
import attach from './assets/attach.svg'
function App() {
  

  return (
    <main className='  w-full h-screen bg-[#075E54] '>
      <div className='w-full h-full flex  relative'>
      <div className='w-[22%] h-[100%] bg-[#88BBA3] p-8'>
        <h1 className='font-[600]  uppercase text-[1.5rem] '>
          Previous Chats
        </h1>
      </div>
      <div className='w-[78%] h-full '> 
        <div className='w-full bg-[#D9D9D9] h-[10%] px-6 pt-[0.3] flex gap-6 items-center'>
          <div className='w-[4rem] h-[4rem] rounded-full bg-zinc-100'>

          </div>
          <div>
            <h3 className='text-[1.2rem] capitalize'>Dr Jane Roe</h3>
            <p className='opacity-[0.6]'>Gastroenterologist - Apollo Hospitals</p>
          </div>
        </div>
        <div className='w-full h-[80%] '>

        </div>
      <div className='w-full h-[10%] justify-between  gap-10 relative  bottom- flex px-4 pb-2'>
        <div className='w-full relative'>

        <input type="text" name="" id=""  className='border w-[100%] outline-none  rounded-lg  h-full px-10' placeholder='Write about your symptoms '/>
        <div className='absolute right-5 top-5'>
          <label htmlFor="attachment" className='inline-block'>
            <img src={attach} alt="" className='w-6'/>
          </label>
          <input type="file" name="" className='hidden'  id="attachment" accept='image/*'/>
        </div>
        </div>
        <button className='w-[6%] h-full rounded-full active:scale-75 transition-all bg-[#25D366] flex items-center justify-center'>
          <img src={arrow} alt="" className='w-8'/>
        </button>
      </div>
      </div>
      
        
      </div>
    </main>
  )
}

export default App
