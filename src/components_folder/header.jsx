import React, { Component } from "react";
import primierLogo from "./primier-logo.png";
import pic1 from "./pic1.png";
import pic2 from "./pic2.png";
import pic3 from "./pic3.png";
import pic4 from "./pic4.png";
import pic5 from "./pic5.png";
import pic6 from "./pic6.png";
import pic7 from "./pic7.png";
import pic8 from "./pic8.png";
import pic9 from "./pic9.png";
import pic10 from "./pic10.png";
import pic11 from "./pic11.png";
import pic12 from "./pic12.png";
import pic13 from "./pic13.png";
import pic14 from "./pic14.png";
import pic15 from "./pic15.png";
import pic16 from "./pic16.png";
import pic17 from "./pic17.png";
import pic18 from "./pic18.png";
import pic19 from "./pic19.png";
import pic20 from "./pic20.png";
import { Dropdown } from "rsuite";

function Header() {
  return (
    <div>
      <div className="flex ">
        <div  className="pl-5 pt-5 ">
          <img className='w-28' src={primierLogo} alt="" />
        </div>
        <div className="space-y-5">
          <div className="flex flex-row space-x-7 pl-8  pt-3">
            <h1>CLUB SITES</h1>
            <img className="w-7 h-7" src={pic1} alt="" />
            <img className="w-7 h-7" src={pic2} alt="" />
            <img className="w-7 h-7" src={pic3} alt="" />
            <img className="w-7 h-7" src={pic4} alt="" />
            <img className="w-7 h-7" src={pic5} alt="" />
            <img className="w-7 h-7" src={pic6} alt="" />
            <img className="w-7 h-7" src={pic7} alt="" />
            <img className="w-7 h-7" src={pic8} alt="" />
            <img className="w-7 h-7" src={pic9} alt="" />
            <img className="w-7 h-7" src={pic10} alt="" />
            <img className="w-7 h-7" src={pic11} alt="" />
            <img className="w-7 h-7" src={pic12} alt="" />
            <img className="w-7 h-7" src={pic13} alt="" />
            <img className="w-7 h-7" src={pic14} alt="" />
            <img className="w-7 h-7" src={pic15} alt="" />
            <img className="w-7 h-7" src={pic16} alt="" />
            <img className="w-7 h-7" src={pic17} alt="" />
            <img className="w-7 h-7" src={pic18} alt="" />
            <img className="w-7 h-7" src={pic19} alt="" />
            <img className="w-7 h-7" src={pic20} alt="" />
          </div>
          <div className="bg-mydivcolor h-16  text-white flex   space-x-7 items-center pl-5 font-mydivfontweight font-mydivFontFamily text-mydivfontsize">
            <Dropdown title="Premier League"></Dropdown>
            <Dropdown title="Fantasy"></Dropdown>
            <Dropdown title="Video"></Dropdown>
            <Dropdown title="Communities"></Dropdown>
            <Dropdown title="More"></Dropdown>
            <h1 className='pl-40'>No Room For Racism</h1>
            <h1 className='pl-10'>Sign in</h1>
            <h1 className='pl-10'>Sign in</h1>
          </div>
          <div className="flex space-x-10 pl-5">
            <h1>Home</h1>
            <h1>Fixtures</h1>
            <h1>Results</h1>
            <h1>Tables</h1>
            <h1>PL30</h1>
            <h1>Awards</h1>
            <h1>Hall of Fame</h1>
            <h1>Transfers</h1>
            <h1>Broadcast</h1>
            <h1>Tickets</h1>
            <h1>Clubs</h1>
            <h1>More</h1>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
