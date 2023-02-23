import Image from "next/image"
import style from '../css/aside.module.css'
import init from '../../public/images/images-system/home.png'
import chat from '../../public/images/images-system/chat.png'
import coord from '../../public/images/images-system/coordenator.png'
import set from '../../public/images/images-system/settings.png'
import exit from '../../public/images/images-system/exit.png'
import NavBarCoordenacao from "./navbar"
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap"
import { useState } from "react"
import Link from "next/link"
import empty from '../../public/images/images-system/empty.png'


function HomeAluno({users}){
    const [modal, setModal] = useState(false)
    const toggleModal = ()=> setModal(!modal)
    const modalClose = ()=> setModal(false)
    const [modal2, setModal2] = useState(false)
    const toggleModal2 = ()=> setModal2(!modal2)
    const modalClose2 = ()=> setModal2(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggle = ()=> setDropdownOpen((prevState)=>!prevState)
    return (
        <div>
            <NavBarCoordenacao/>
            <div className={`d-flex flex-nowrap`}>
                <div id={style.background} style={{width:'20%', height:'150vh'}} className={`${style.position} ${style.sticky}`}>
                        <div className="d-flex flex-column p-1">
                           <Link href={'/aluno/homealuno'}>
                                <div className={`${style.active} d-flex`}>
                                    <Image className="m-2" src={init} alt='inicio' width={30}/>
                                    <p className="m-2" style={{fontWeight:'bold'}}>Inicio</p>
                                </div>
                           </Link>
                           <Link href={'/aluno/chataluno'}>
                                <div className={`${style.theme} d-flex`}>
                                        <Image className="m-2" src={chat} alt='Chat' width={30}/>
                                        <p className="m-2" style={{fontWeight:'bold'}}>Chat</p>
                                </div>
                           </Link>
                            <Link href={'/aluno/agendaluno'}>
                                <div className={`${style.theme} d-flex`}>
                                    <Image className="m-2" src={coord} alt='Coordenação' width={30}/>
                                    <p className="m-2" style={{fontWeight:'bold'}}>Agendar</p>
                                </div>
                                
                            </Link>
                            <Link href={'/aluno/settingsaluno'}>
                                <div className={`${style.theme} d-flex`}>
                                    <Image className="m-2" src={set} alt='Definições' width={30}/>
                                    <p className="m-2" style={{fontWeight:'bold'}}>Definições</p>
                                </div>
                            </Link>
                            
                            <Link href={'/'}>
                                <div  className={`${style.theme} d-flex`}>
                                    <Image className="m-2" src={exit} alt='Sair' width={30}/>
                                    <p className="m-2" style={{fontWeight:'bold'}}>Sair</p>
                                </div>
                            </Link>
                        </div>
                </div>
                <div style={{width:'20%'}}></div>
                <div style={{width:'80%', height:'150vh', marginTop:'60px',}}> 
                        <div className="d-flex flex-column align-items-center w-100">
                            <Image style={{width:'600px', height:'400px'}} src={empty} />
                            <p>Nenhuma actividade.</p>
                        </div>
                         
                </div>
                
            </div>


        </div>
    );
}
export default HomeAluno

