import style from '../css/navbar.module.css'
import logo from '../../public/images/logotipo.png'
import { Link} from 'react-scroll'
import { Button, CloseButton, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap'
import Image from 'next/image'
import { useState } from 'react'
function NavBarCoordenacao(){
    const [open, setOpen] = useState(false)
    const setOpenned = ()=>{
        setOpen(true)
    }
    const closed = ()=>{
        setOpen(false)
    }
    return(
        <Navbar className='d-flex flex-nowrap' color='light' dark={true} expand='lg'  fixed='top'>
            <NavbarBrand id={style.brand} className='px-5' href=''>
                <Image src={logo} alt='logotipo' width={60}/>
               <span id={style.logo}>IPIL<b>DIGITAL</b></span>
            </NavbarBrand>
        </Navbar>
    )
}
export default NavBarCoordenacao