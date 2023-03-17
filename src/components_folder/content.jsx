import React,{Component} from "react";
import hublotLogo from './budLogo.png'
import nikeLogo from './nikeLogo.png'
import castloLogo from './castroLogo.png'
import barclay from './barclayLogo.jpg'
function Content(){
    return(
        <div className="bg-white h-screen ">
            <div className="flex  ml-36 space-x-10">
                <img className='w-28 mt-8' src={barclay} alt="" />
                <img className='w-28 mt-8' src={castloLogo} alt="" />
                <img className='w-28 mt-8' src={hublotLogo} alt="" />
                <img className='w-28 mt-8' src={nikeLogo} alt="" />

            </div>
            <div className=' flex justify-between'>
          <p1 className='pt-8 ml-5 font-mydivFontFamily text-mydivfontsize font-mydivfontweight text-2xl'>Latest Videos</p1>
           <p1 className='pt-16 text-sm font-mydivFontFamily'>more videos</p1>
        
            </div>
            <div className='flex space-x-2'>
                <div className='mt-4'>
                <iframe width="600" height="400" src="https://www.youtube.com/embed/8fQpv5OhHy4" title="FPL GAMEWEEK 28 STRATEGY STREAM - Double Gameweek Planning! | Fantasy Premier League" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className='grid grid-cols-2 gap-2'>
                    <div className='mt-4'>
                    <iframe width="200" height="200" src="https://www.youtube.com/embed/A-Hmg3BBGvQ" title="The BEST goals from matchweek 5 in the Premier League | Isak, Zaha, Cancelo &amp; more! 🤤" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className='mt-4'>
                    <iframe width="200" height="200" src="https://www.youtube.com/embed/xrvxF99TwJQ" title="Premier League Goals: The best goals from the season so far." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div>
                    <iframe width="200" height="200" src="https://www.youtube.com/embed/FGedsUxfDbY" title="&quot;Come to your senses&quot; Ceferin tells EPL clubs on Super League break away - | 2020/21 | News" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div>
                    <iframe width="200" height="200" src="https://www.youtube.com/embed/-R-tEhuqX0Y" title="Should Man Utd ACTUALLY Sign Harry Kane?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Content