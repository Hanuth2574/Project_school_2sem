import { Container } from "postcss";
import LogoIcon from "@/assets/icon-menu.svg"
import MenuICon from  "@/assets/logo.svg"
import Button from "@/components/Button";
export const Header = () => {
  return <header className="py-4 border-b border-white/30 md:border-none sticky top-0 z-10 backdrop-blur">
    <div className="container  ">
      <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-lg  ">
      <div className="h-11 w-11 inline-flex justify-center items-center  rounded-lg">
    <MenuICon className ="h-9 w-9"/>
        </div>
        <div className="hidden md:block" >
        <nav className="inline-flex gap-5 justify-center items-center text-sm ">
            <a href="#" className="text-white/70 hover:text-white transition">Features</a>
            <a href="#" className="text-white/70 hover:text-white transition">Developers</a>
            <a href="#" className="text-white/70 hover:text-white transition">Pricing</a>
            <a href="#" className="text-white/70 hover:text-white transition">Changelog</a>
          </nav>
          </div>  
        
        <div className="gap-4 flex items-center">
            <Button>JOin waitlsit</Button>
            <LogoIcon className="md:hidden"/>
          </div>
        </div>
      
    </div>
  </header>;
};
