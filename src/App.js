import { useState } from 'react';
import './App.css';
import bnbg from './images/bannerbackground.png';
import Breakfast from './components/Breakfast';
import Lunch from './components/Lunch';
import { Dinner } from './components/Dinner';
import { Cards } from './components/Cards';



function App() {
  const [active, setActive] = useState("1");
  function handleClick(e) {
    setActive(e.target.id);
    console.log(e.target.id);
  }
  console.log(active)
  return (
    <section >
      <div style={{ backgroundImage: `url(${bnbg})`, backgroundSize: "fit" }} className="bg-cover bg-center h-[400px]" >
        <h1 className='text-center text-4xl font-semibold pt-[70px]'>Best food waiting for your belly </h1>
        <div className='bg-white mt-[15px] m-auto flex h-[45px] w-[300px] rounded-3xl'>
          <input className="ml-4 w-[90%]" type="text" placeholder='  Search Food Items' />
          <input type="button" value="Search" className="bg-red-500 w-[120px] rounded-3xl" />
        </div>

      </div>
      <div>
        <div className="w-full flex justify-center">
          <button id='1' className={active === "1" ? "btn active" : "btn "} onClick={handleClick} >Breakfast</button>
          <button id='2' className={active === "2" ? "btn active" : "btn "} onClick={handleClick}>Lunch</button>
          <button id='3' className={active === "3" ? "btn active" : "btn "} onClick={handleClick}>Dinner</button>
          <br /></div>
        {active === "1" ? <Breakfast></Breakfast> : null}
        {active === "2" ? <Lunch></Lunch> : null}
        {active === "3" ? <Dinner></Dinner> : null}
        <input className='text-center m-auto flex border-none text-white bg-gray-400 rounded-lg text-2xl h-[50px] mb-4' type="text" value={"Checkout Your Food"} />

      </div>
      <Cards></Cards>
      <div className='h-[200px] bg-black'>

      </div>
    </section>
  );
}

export default App;
