import React from 'react'
import { AiFillInstagram } from 'react-icons/ai';
import { BsDiscord, BsTwitter } from 'react-icons/bs';
import logo from "../Image/logo1.jpg";
import { FaTelegramPlane } from "react-icons/fa";

function Footer() {
  return (
<>
<div className='container-kws'>
<div className='section'>
<div className='t-a-c'>
<img src={logo} className="w-5 m-b-2"/>
<div className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</div>
<div className='m-a'>
<ul className='l-s-t-n d-i-f a-i-c p-y-1'>
<li className='pa-0_5 f-s-1_5 '><BsTwitter className='b-c-p-c-11 w-2_5 h-2_5 pa-0_5 b-r-10 c-p' /></li>
<li className='pa-0_5 f-s-1_5 '><AiFillInstagram className='b-c-p-c-11 w-2_5 h-2_5 pa-0_5 b-r-10 c-p' /></li>
<li className='pa-0_5 f-s-1_5 '><FaTelegramPlane className='b-c-p-c-11 w-2_5 h-2_5 pa-0_5 b-r-10 c-p' /></li>
<li className='pa-0_5 f-s-1_5 '><BsDiscord className='b-c-p-c-11 w-2_5 h-2_5 pa-0_5 b-r-10 c-p' /></li>
</ul>
</div>
<div className=''>Copyright © 2022 Reelz. All Rights Reserved.</div>
</div>
</div>
</div>
</>
  )
}

export default Footer