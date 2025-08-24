import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <>
    <div 
      className={`min-h-screen`}>
      <header className="fixed top-0 left-0 right-0 z-10 bg-white flex items-center justify-between px-8 h-[8vh] shadow-md">
    <img src="/logo.png" className="w-10 h-5" />

    <nav>
      <ul className="flex gap-18">
        <li className="flex items-center gap-3">
          <img src="/about.png" className="w-5 h-5" />
          <a href="#about">About</a>
        </li>
        <li className="flex items-center gap-3">
          <img src="/login.png" className="w-5 h-5" />
          <Link to="/LoginPage">Login</Link>
        </li>
        <li className="flex items-center gap-3">
          <img src="/cart.png" className="w-5 h-5" />
          <Link to="/Cart">Cart</Link>
        </li>
      </ul>
    </nav>
  </header>
      <section 
      style={{
               backgroundImage: "url('/texture.png')",
               backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
      }}
      className="bg-[#EDFEFF] h-[100vh] pt-[35vh] flex flex-col items-center">
        <div className="flex">
          <div className = "text-9xl font-jakarta font-bold text-[#66A3FF]">G</div>
          <div className = "text-9xl font-jakarta font-bold text-[#FF6666]">D</div>
          <div className = "text-9xl font-jakarta font-bold text-[#FFDF80]">G</div>
          <div className = "text-9xl font-jakarta font-bold text-[#66CC77]">C</div>
        </div>
        <div className="text-center max-w-95 mx-auto font-jakarta text-[#878787] ">
          Gear up with our exclusive GDGC NIT Silchar merchandise, designed for every developer and innovator.
        </div>


      </section>
      <section style={{
               backgroundImage: "url('/rtexture.png')",
               backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              
      }}
      className="bg-[#EDFFF0] h-[100vh] flex w-full justify-center">
        <div className="w-1/2 flex items-center justify-center ">
        <div className = "w-106 h-96 bg-amber-300 border-4 rounded-2xl overflow-hidden flex items-center justify-center">
        <img src="/dress.jpeg" className="object-cover h-full w-full">
        </img>
        </div>
        </div>
        <div className="flex flex-col justify-between items-center pr-30 w-1/2 py-75 text-center ">
          <div className="font-jakarta font-bold text-5xl">Classic T-Shirt</div>
          <div className="font-jakarta text-[#878787] mx-auto">Show your pride with the official GDGC T-Shirt.<br /> 
Crafted from premium, soft cotton.<br /> Available in multiple sizes.</div>
        </div>
        
      </section>
      <section style={{
               backgroundImage: "url('/texture.png')",
               backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              
      }}
      className="bg-[#FFFFED] h-[100vh] flex w-full justify-center">
        <div className="flex flex-col justify-between items-center pr-30 w-1/2 py-75 text-center ">
          <div className="font-jakarta font-bold text-5xl">Cozy Hoodies</div>
          <div className="font-jakarta text-[#878787] mx-auto">Stay warm and stylish with our GDGC pullover hoodie.<br /> Featuring a soft smooth lining and a bold, subtle design. </div>
        </div>
        <div className="w-1/2 flex items-center justify-center ">
        <div className = "w-106 h-96 bg-amber-300 border-4 rounded-2xl overflow-hidden flex items-center justify-center">
        <img src="/dress.jpeg" className="object-cover h-full w-full">
        </img>
        </div>
        </div>
        
        
      </section>  

      <section style={{
               backgroundImage: "url('/rtexture.png')",
               backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              
      }}
      className="bg-[#FFF6ED] h-[100vh] flex w-full justify-center">
        <div className="w-1/2 flex items-center justify-center ">
        <div className = "w-106 h-96 bg-amber-300 border-4 rounded-2xl overflow-hidden flex items-center justify-center">
        <img src="/dress.jpeg" className="object-cover h-full w-full">
        </img>
        </div>
        </div>
        <div className="flex flex-col justify-between items-center pr-30 w-1/2 py-75 text-center ">
          <div className="font-jakarta font-bold text-5xl">Accessories</div>
          <div className="font-jakarta text-[#878787] mx-auto">GDGC accessories are designed to keep you fueled, organized, and inspired.<br />
These essentials add a touch of style and community spirit to your daily routine.</div>
        </div>
        
      </section>


      <section 
      className="bg-[#2F2F2F] h-[47vh] flex w-full justify-center">
      <div className="w-1/2 flex items-center justify-center">
      <img src="/logo.png" className="w-60 h-30">
      </img>
      </div>
      <div className="w-1/2 h-full pt-25">
        <div className = "flex justify-center items-center gap-24">
          <div className="flex flex-col gap-y-7">
            <div className="text-[#FFFFFF] font-jakarta text-1xl">Products</div>
          <div className="flex flex-col gap-y-3">
            <Link to="/Shirt" className="text-[#7C7C7C] font-jakarta">T-Shirt</Link>
            <Link to="/Hoodies" className="text-[#7C7C7C] font-jakarta">Hoodies</Link>
            <Link to="/Acc" className="text-[#7C7C7C] font-jakarta">Accessories</Link>
          </div>
          </div>
          <div className="flex flex-col gap-y-7">
            <div className="text-[#FFFFFF] font-jakarta">Club</div>
            <div className="flex flex-col gap-y-3">
              <div className="text-[#7C7C7C] font-jakarta">About us</div>
            <div className="text-[#7C7C7C] font-jakarta">Team</div>
            <div className="text-[#7C7C7C] font-jakarta">Contact Us</div>
          </div>
          </div>

        </div>
      </div>
        
        
      </section>

      </div>
    </>
  );

}