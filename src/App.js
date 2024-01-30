import logo from './logo.svg';
import './App.css';
import background from "./components/assets/images/Group 127.png"
import { RiMailSendLine, RiLockPasswordLine } from "react-icons/ri";
import Circle from "./components/assets/images/Vector 36.png"
import round from "./components/assets/images/Vector 37.png"


function App() {
  return (
    <>
      <div className=' relative'>
        <div className=' grid grid-cols-6 '>
          <div className=' col-span-4'>
            <img src={background} className=' w-full h-[100vh] object-cover' />
          </div>
          <div className='col-span-2 center relative'>
            {/* <div className=' absolute top-0 right-0 z-0  w-[250px] '>
            <img src={Circle} className='  '/>
            </div> */}


            


            <div className=' w-[80%] relative z-4  mr-10 shadows rounded-lg py-2 px-10  bg-white pb-16 my-16'>
              <div className=' absolute top-[-80px] left-[-60px]  z-[-10]  w-[250px] '>
                <img src={round} />
              </div>
              <div className=' text-[20px] fontface text-[#0F3887] text-center mt-10 mb-2 font-semibold'>Teacher Learning Module</div>
              <div >
                <label className=' text-text-color text-[16px] '>Email</label>
                <div className='mt-2 relative'>
                  <RiMailSendLine className=' absolute  text-[#0F3887] text-h4 top-[6px] left-3' />
                  <input type='text' placeholder='Email' className=' placeholder:text-[#2222]  text-[#5a5a5a]  rounded-md w-full border px-2 pl-10 py-1 border-[#c2c2c2]' />
                </div>
              </div>

              <div className=' mt-2 '>
                <label className=' text-text-color text-[16px] '>Password</label>
                <div className='mt-2 relative'>
                  <RiLockPasswordLine className=' absolute  text-[#0F3887] text-h4 top-[6px] left-3' />
                  <input type='password' placeholder='******' className=' placeholder:text-[#2222]  text-[#5a5a5a]  rounded-md w-full border px-2 pl-10 py-1 border-[#c2c2c2]' />
                </div>
              </div>

              <button
                // disabled={popup.open === true ? true : false}
                type="submit"
                className="w-full mt-6 bg-[#0F3887] flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-[16px] font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8EA1C6]"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>




      </div>

    </>
  );
}

export default App;
