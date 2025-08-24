import { Link } from "react-router-dom";
export default function LoginPage() {
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




<section style={{
               backgroundImage: "url('/rtexture.png')",
               backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              
      }}
      className="bg-[#EAEAEA] h-[100vh] pt-[10vh] flex w-full justify-center items-center">
        <div className="flex flex-col gap-y-8">
          <div className="font-jakarta text-5xl flex justify-center items-center">
            Login
          </div>
          <div className = "w-[40vw] h-120 bg-[#D9D9D9] border-4 rounded-4xl overflow-hidden flex items-center justify-center">

          </div>
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