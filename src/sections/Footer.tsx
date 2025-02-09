import Logo from "@/assets/logo.svg";
import X from "@/assets/social-x.svg";
import I from "@/assets/social-instagram.svg";
import Y from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex gap-2 items-center">
            <Logo className="h-6 w-6" />
            <div className="font-medium text-white">
              AI Startup Landing Page
            </div>
          </div>

          <nav className="flex gap-5 text-xs">
            <a className="text-white/70 hover:text-white" href="#">
              Features
            </a>
            <a className="text-white/70 hover:text-white" href="#">
              Developers
            </a>
            <a className="text-white/70 hover:text-white" href="#">
              Company
            </a>
            <a className="text-white/70 hover:text-white" href="#">
              Blog
            </a>
            <a className="text-white/70 hover:text-white" href="#">
              Changelog
            </a>
          </nav>

          <div className="flex gap-3">
            <a href="#" aria-label="X">
              <X className="h-6 w-6 text-white/70 hover:text-white" />
            </a>
            <a href="#" aria-label="Instagram">
              <I className="h-6 w-6 text-white/70 hover:text-white" />
            </a>
            <a href="#" aria-label="YouTube">
              <Y className="h-6 w-6 text-white/70 hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
