import React, {useEffect} from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import "locomotive-scroll/dist/locomotive-scroll.css"

const UseLocoScroll = (start) => {
    useEffect(() => {
        if(start){ return }

        const scrollEl = document.querySelector("#main-container")
        const locomotive = new LocomotiveScroll({
            el : scrollEl,
            smooth : true,
            multiplier : 1,
            class : "is-reveal"
        })
    
    }, [start])
    
  return (
    <div>UseLocoScroll</div>
  )
}

export default UseLocoScroll