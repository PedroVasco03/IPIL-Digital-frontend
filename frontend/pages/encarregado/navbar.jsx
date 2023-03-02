import styleNav from '../css/navLogado.module.css'
import logo from '../../public/images/logotipo.png'
import Image from 'next/image'
function NavBarEncarregado(){
    return(
        <nav className={styleNav.nav}>
            <li className={styleNav.li}><a href="/secretaria/homesecretaria" className={styleNav.a+" "+styleNav.logo}> 
                <Image className={styleNav.i} src={logo} alt='logo'/>
                    <span className={styleNav.nav_item+" "+styleNav.span}>IPIL<span className={styleNav.digital}> DIGITAL</span> </span>
            </a></li>
        </nav>
    )
}
export default NavBarEncarregado