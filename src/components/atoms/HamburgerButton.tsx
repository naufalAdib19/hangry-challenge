import { useContext, useRef } from 'react'
import { GlobalContext } from '../../helper/context'

const HamburgerButton = () => {
    const state = useContext(GlobalContext)
    const firstDiv = useRef<HTMLDivElement>(null);
    const secondDiv = useRef<HTMLDivElement>(null);
    const thirdDiv = useRef<HTMLDivElement>(null);

    function onClickHamburgerButton(): void {
        if(state.isNavbarActive) {
            firstDiv.current!.style.transform = "rotate(0deg)";
            secondDiv.current!.style.transform = "scale(1)";
            thirdDiv.current!.style.transform = "rotate(0deg)";
        } else {
            firstDiv.current!.style.transform = "rotate(45deg)";
            secondDiv.current!.style.transform = "scale(0)";
            thirdDiv.current!.style.transform = "rotate(-45deg)";
        }
        
        state.setIsNavbarActive(!state.isNavbarActive)
    }

    return(
        <div className="flex flex-col gap-y-[5px]" onClick={onClickHamburgerButton}>
            <div className="w-[25px] h-[3px] bg-black origin-top-left transition duration-300" ref={firstDiv}></div>
            <div className="w-[25px] h-[3px] bg-black transition duration-300" ref={secondDiv}></div>
            <div className="w-[25px] h-[3px] bg-black origin-bottom-left transition duration-300" ref={thirdDiv}></div>
        </div>
    )
}

export default HamburgerButton