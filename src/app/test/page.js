

import Image from "next/image";
import arjit from "../../../image/arjit.png"
import katrina from "../../../image/katrina.png"
import magi from "../../../image/magi.png"
import member from "../../../image/FiveMember.png"
import nora from "../../../image/nora.png"
import talent from "../../../image/talent.png"
import style from "../style.module.css"
const Test=(()=>{
  return(
    <>
    <div className={style.container}>
     <div className={style.singer}>
     <h1 className={style.text}>Singers</h1>
     <Image src={arjit} alt="arjit" height={500} width={800}/>
     <h2>Choose <br></br>
     from 100++
     <br></br>
     
     Categories
     <br></br>
     Explore all categories</h2>
  
     </div>
  
     <Image src={katrina} alt="katrina" height={500} width={1400}/>
     <Image src={magi} alt="magi" height={500} width={1400}/>
     <Image src={member} alt="member" height={500} width={1400}/>
     <Image src={nora} alt="nora" height={500} width={1400}/>
     <Image src={talent} alt="talent" height={500} width={1400}/>
   

  

    
    </div>
 
    </>
  )
})
export default Test;