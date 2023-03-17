import React,{Component} from "react";
import hublotLogo from './budLogo.png'
import nikeLogo from './nikeLogo.png'
import castloLogo from './castroLogo.png'
import barclay from './barclayLogo.jpg'
import easport from './aesportsLogo.png'
import budlogo from './budLogo.png'

function Footer(){
    return(
        <div className='flex flex-col bottom-0 mt-8 border border-solid border-t-4 border-green-600'>
          <div className="flex justify-center w-full space-x-36 text-sm pl-10   pr-10">
           <div>
            <img className=' w-16 h-12' src={easport} alt="" />
            <h1>Lead partner</h1>
           </div> 
           <div>
           <img className='w-16 h-12' src={hublotLogo} alt="" />
           <h1>Official time keeper</h1>
           </div>
            
           <div>
           <img className='w-16 h-12' src={castloLogo} alt="" />
           <h1>Official Engine Oil Partner</h1>
           </div>
          <div>
          <img className='w-16 h-12' src={barclay} alt="" />
          <h1>Official bank</h1>
        </div>  
         <div>
         <img className='w-16 h-12' src={budlogo} alt="" />
         <h1>Official Beer</h1>
            </div>  
            <div>
            <img className='w-16 h-12' src={nikeLogo} alt="" />
            <h1>Official ball</h1>
                </div>  
            
          </div>
          <div className='bg-footerColor flex text-white '>
            <div>
           <h1 className=' ml-14 text-2xl font-mydivfontweight font-mydivFontFamily'>Premier League</h1> 
           <div className="grid grid-cols-2 space-y-4 ml-11 pt-7">
            <div>
            <ul className="font-mydivfontweight font-mydivFontFamily text-mydivfontsize">
                <li>Home</li>
                <li>Fixtures</li>
                <li>Results</li>
                <li>Tables</li>
                <li>Transfers</li>
                <li>Broadcast</li>
                <li>Tickets</li>
                <li>Clubs</li>
            </ul>

            </div>
            <div>
            <ul className="font-mydivfontweight font-mydivFontFamily text-mydivfontsize">
                <li>Players</li>
                <li>Managers</li>
                <li>News</li>
                <li>Youth</li>
                <li>Safeguarding</li>
                <li>History</li>
                <li>Referees</li>
                <li>Clubs</li>
            </ul>
            </div>
           </div>
           </div>
           <div>
           <div>
           <h1 className=' ml-14 text-2xl font-mydivfontweight font-mydivFontFamily'>Fantacy  Stats</h1> 
           <div className="grid grid-cols-2 space-y-4 ml-11 pt-7">
            <div>
            <ul className="font-mydivfontweight font-mydivFontFamily text-mydivfontsize"> 
                <li>Home</li>
                <li>Fixtures</li>
                <li>Results</li>
                <li>Tables</li>
                <li>Transfers</li>
                <li>Broadcast</li>
                <li>Tickets</li>
                <li>Clubs</li>
            </ul>

            </div>
            <div>
            <ul className="font-mydivfontweight font-mydivFontFamily text-mydivfontsize">
                <li>Players</li>
                <li>Managers</li>
                <li>News</li>
                <li>Youth</li>
                <li>Safeguarding</li>
                <li>History</li>
                <li>Referees</li>
                <li>Clubs</li>
            </ul>
            </div>
           </div>
           </div>
           </div>
           <div>
           <h1 className=' text-2xl ml-14 font-mydivfontweight font-mydivFontFamily'>Premier League</h1> 
           <div className="grid grid-cols-2 space-y-4 ml-11 pt-7">
            <div>
           

            </div>
            <div>
            <ul>
                <li className="">Videos</li>
                
            </ul>
            </div>
           </div>
           </div>
           <div>
           <h1 className=' ml-14 text-2xl font-mydivfontweight font-mydivFontFamily'>Communication More</h1> 
           <div className="grid grid-cols-2 space-y-4 ml-11 pt-7">
            <div>
            <ul className="font-mydivfontweight font-mydivFontFamily text-mydivfontsize">
                <li>Latest</li>
                <li>Programmes</li>
                <li>PL kick Herous</li>
                <li>Strategy</li>
                <li>PL Primary stars</li>
               
            </ul>

            </div>
            <div>
            <ul className="font-mydivfontweight font-mydivFontFamily text-mydivfontsize">
                <li>stay well</li>
                <li>no room for racism</li>
                <li>Rain bow races</li>
                <li>Man of the match</li>
                <li>Transfres</li>
                <li>VAR</li>
                <li>photo</li>
                <li>Partners</li>
                <li>ePrimier league</li>
            </ul>
            </div>
           </div>
           </div>
          </div>
        </div>
    )
}
export default Footer