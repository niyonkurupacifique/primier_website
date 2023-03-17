import React,{Component} from "react";
import pic13 from './pic13.png'
import pic2 from './pic2.png'
import prim from './primierleaguewww.png'
import calendar from './calendar.png'
import supersportPng from './supersportPng.jpg'
import playerPic from './son-ttnham.jpg'
import videopng from './videopng.png'
import player2 from './mitoma.jpg'
import primhead from './plmHead.png'
import pic1 from "./pic1.png";
//import pic2 from "./pic2.png";
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
import Content from "./content";
function Body() {
  return (

    <div className="flex mt-4 bg-mybgcolor">
        
    <div className="flex flex-col space-y-5 ml-3 h-full">
        <div className=' h-60 w-60 bg-white mt-10 text-center space-x-2'>
            <p className='pt-3 text-red-500'>Round of 16, 2nd leg</p>
            <p>UEFA Champions League</p>
            <p className='text-sm'>All times shown are your local time</p>
            <p className='mt-4'>Tuesday 14 March</p>
            <div className="flex space-x-1 pt-3 pl-3">
                <div>MCI </div>
                <div>
                    <img  className=' w-6' src={pic13} alt="" />
                </div>
                <div className='border border-solid border-yellow-100'>22:0</div>
                <div>
                    <img  className=' w-6' src={pic2} alt="" />
                </div>
                <div>RBL </div>
                 </div>
                 <div>hhh</div>
        </div>
        <div className=' h-full w-60 bg-white text-center pt-4 space-y-3' >
            <p className='text-red-500'>Matchweek 27</p>
            <div>
                <img className='w-36 flex justify-center pl-6' src={prim} alt="" />
            </div>
            <p className='text-sm'>All times shown are your local time</p>
            <div className='flex'>
                <div>
                    <img className='w-10' src={calendar} alt="" />
                </div>
                <div>Add fixtures to calendar</div>
            </div>
            <p>Wednesday 15 March</p>
            <div className="flex space-x-1 pt-3 pl-3">
                <div>MCI </div>
                <div>
                    <img  className=' w-6' src={pic13} alt="" />
                </div>
                <div className='border border-solid border-yellow-100'>22:0</div>
                <div>
                    <img  className=' w-6' src={pic2} alt="" />
                </div>
                <div>RBL </div>
                 </div>
                 <div>
                    <img className=' w-16 h-10 ml-7' src={supersportPng} alt="" />
                 </div>
                 <div className="flex space-x-1 pt-3 pl-3">
                <div>MCI </div>
                <div>
                    <img  className=' w-6' src={pic13} alt="" />
                </div>
                <div className='border border-solid border-yellow-100'>22:0</div>
                <div>
                    <img  className=' w-6' src={pic2} alt="" />
                </div>
                <div>RBL </div>
                 </div>
                 <div>
                    <img className=' w-16 h-10 ml-7' src={supersportPng} alt="" />
                 </div>
        </div>
        <div className='space-y-0'>
        <div className='  w-60 h-24    space-y-3    flex flex-col  items-start  bg-red-500'>
       <div className="flex  text-white font-mydivFontFamily font-mydivfontweight ">
        <div className='ml-4'>Premier</div>
        <div>
        <img className=' w-6 h-5 ml-16 ' src={primhead} alt="" />
        </div>
        <div>League</div>
       </div>
        <p className="text-black bg-white w-56  pb-9 ml-1 mr-1 rounded-tr-2xl rounded-tl-2xl text-center">First Team</p>

        </div>

        <div className='  w-60 bg-white text-center  space-y-3 mt-32 pt-10' >
           <div className='grid grid-cols-2'>
            <div className='flex space-x-4'>
                <div className='space-y-2 text-sm ml-2'>
                    <h1>pos</h1>
                    <h1>1</h1>
                    <h1>2</h1>
                    <h1>3</h1>
                    <h1>4</h1>
                    <h1>5</h1>
                    <h1>6</h1>
                    <h1>7</h1>
                    <h1>8</h1>
                    <h1>9</h1>
                    <h1>10</h1>
                    <h1>11</h1>
                    <h1>12</h1>
                </div>
                <div className="text-sm">
                    <p>Clubs</p>
                    <div className="flex space-x-2 pt-2">
                        <div> <img  className=' w-6' src={pic2} alt="" /></div>
                        <p>Arsenal</p>

                    </div>
                    <div className="flex space-x-2 pt-2">
                        <div> <img  className=' w-6' src={pic1} alt="" /></div>
                        <p>Bourn</p>

                    </div>
                    <div className="flex space-x-2 pt-2">
                        <div> <img  className=' w-6' src={pic3} alt="" /></div>
                        <p>A.villa</p>

                    </div>
                    <div className="flex space-x-2 pt-2">
                        <div> <img  className=' w-6' src={pic4} alt="" /></div>
                        <p>	Brent</p>

                    </div>
                    <div className="flex space-x-2 pt-2">
                        <div> <img  className=' w-6' src={pic5} alt="" /></div>
                        <p>Brigh</p>

                    </div>
                    <div className="flex space-x-2 pt-2">
                        <div> <img  className=' w-6' src={pic6} alt="" /></div>
                        <p>Chel</p>

                    </div>
                    <div className="flex space-x-2 pt-2">
                        <div> <img  className=' w-6' src={pic7} alt="" /></div>
                        <p>C.place</p>

                    </div>
                    <div className="flex space-x-2 pt-2">
                        <div> <img  className=' w-6' src={pic8} alt="" /></div>
                        <p>Everton</p>

                    </div>
                    <div className="flex space-x-2 pt-2">
                        <div> <img  className=' w-6' src={pic9} alt="" /></div>
                        <p>Fulham</p>

                    </div>
                    <div className="flex space-x-2 pt-2">
                        <div> <img  className=' w-6' src={pic10} alt="" /></div>
                        <p>Leeds</p>

                    </div>
                    <div className="flex space-x-2 pt-2">
                        <div> <img  className=' w-6' src={pic12} alt="" /></div>
                        <p>L.pool</p>

                    </div>
                   
                </div>
            </div>
            <div className="flex ml-7 text-sm space-x-3">
                <div>
                <div className='space-y-2 text-sm ml-2'>
                    <h1>pi</h1>
                    <h1>27</h1>
                    <h1>27</h1>
                    <h1>26</h1>
                    <h1>27</h1>
                    <h1>25</h1>
                    <h1>26</h1>
                    <h1>24</h1>
                    <h1>21</h1>
                    <h1>22</h1>
                    <h1>16</h1>
                    <h1>20</h1>
                    <h1>23</h1>
                </div>

                </div>
                <div className='space-y-2 text-sm ml-2'>
                    <h1>Gd</h1>
                    <h1>+27</h1>
                    <h1>+27</h1>
                    <h1>+26</h1>
                    <h1>+27</h1>
                    <h1>+25</h1>
                    <h1>+26</h1>
                    <h1>+24</h1>
                    <h1>+21</h1>
                    <h1>+22</h1>
                    <h1>-16</h1>
                    <h1>-20</h1>
                    <h1>-23</h1>
                </div>
                <div className='space-y-2 text-sm ml-2 font-mydivfontweight'>
                    <h1>pts</h1>
                    <h1>68</h1>
                    <h1>67</h1>
                    <h1>26</h1>
                    <h1>27</h1>
                    <h1>25</h1>
                    <h1>26</h1>
                    <h1>24</h1>
                    <h1>21</h1>
                    <h1>22</h1>
                    <h1>16</h1>
                    <h1>20</h1>
                    <h1>23</h1>
                </div>
            </div>

           </div>

        
        </div>
        </div>



    </div>

    <div className='cccc '>
        <div className='flex'>
   <div className='flex flex-col'>
  
    <div className='ml-7 pt-4'>
    <iframe width="503" height="550" src="https://www.youtube.com/embed/eTIIXfdLqg0" title="Marcus Rashford 2023 - Crazy Skills &amp; Goals - HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    
    </div>
    <div className=" text-white flex mt-6 ml-6">
        <div>
            <img className='w-28 h-24' src={playerPic} alt="" />
        </div>
        <div className='bg-mydivcolor w-96'>
            <p className=" text-mytextcolor ">Fantasy Premier League</p>
            <p>Gameweek 28 Ones to watch: Son Heung-min</p>
        </div>
    </div>
   
   
    </div>
    
    
    <div className="flex flex-col">
    <div style={{height:550}} className="  bg-mydivcolor text-center w-full mt-4 ml-2 mr-2 text-white space-y-5">
       <h1 className='mt-3 font-mydivFontFamily text-fontsizeofprimier font-mydivfontweight'>Matchweek 27 preview: Wednesday's matches</h1>
       <p>Can Mac Allister achieve a PL first? Will Brentford make history? Get set for the midweek fixtures</p>
       <div className="flex flex-col justify-start pl-7 space-y-3">
        <h1 className='flex justify-start font-mydivFontFamily font-mydivfontweight'>Related Content</h1>
        <div className="flex space-x-2">
            <div>
                <img className='rounded-full w-10 h-10' src={videopng} alt="" />
            </div>
            <p className='hover:underline'>Every Mitoma Premier League goal</p>
        </div>
        <div className="flex space-x-2">
            <div>
                <img className='rounded-full w-10 h-10' src={videopng} alt="" />
            </div>
            <p className='hover:underline'>Flashback: Benteke's brilliant last-minute volley</p>
        </div>
        <div className="flex space-x-2">
            <div>
                <img className='rounded-full w-10 h-10' src={videopng} alt="" />
            </div>
            <p className='hover:underline'>Every James Ward-Prowse free-kick goal</p>
        </div>
       </div>
       
    </div>
   
    <div className=" text-white flex mt-6 ml-3">
        <div>
            <img className='w-28 h-24' src={player2} alt="" />
        </div>
        <div className='bg-mydivcolor w-96'>
            <p className=" text-mytextcolor ">Feature</p>
            <p>Murray: De Zerbi has brought the best out of March</p>
        </div>
    </div>
    
  </div>
  </div>
  <div bg-white className="ml-8 mt-6"> <Content/></div>
  </div>
 
 </div>

  );
}

export default Body;
 