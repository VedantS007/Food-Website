import React, { useState } from 'react'
import Navbar from '../Navbar/NavMain'
import Sidebar from '../Sidebar/SideMain'
import { HeroContainer, HeroContent, HeroP, HeroH1, HeroItems, HeroBtn } from "./HeroElement"

const Hero = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} /> 
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greatest Pizza Ever</HeroH1>
                    <HeroP>Ready in 60 seconds</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
            
    )
}

export default Hero
