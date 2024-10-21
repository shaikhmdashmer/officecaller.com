import React, { useEffect, useRef, useState } from "react";

export default function ErrorMsg() {
  const [colorSettings, setColorSettings] = useState(null);


  useEffect(()=>{
   const ThemeData = JSON.parse(localStorage.getItem("ColorTheme"));
   setColorSettings(ThemeData)
  },[])
  
  return (
    <>
   
     <div class="backend-response d-flex"  >

      <img src={`${colorSettings?.data?.bot_logo}`} width="22" style={{marginTop:'0px'}} />
          <div class="backend-msg error-text"  style={{backgroundColor: colorSettings?.data?.bot_message_bg_color , color:colorSettings?.data?.bot_message_text_color , height:'35px' }}>
            <div> 
              <p>Type Your Message</p>
        </div> 
      </div>
    </div>
</>

  )
}
