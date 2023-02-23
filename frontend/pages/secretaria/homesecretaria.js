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
import ModalComponent from "./components/modal"
import Link from "next/link"
import ModalNoSchedule from "./components/modalNoSchedule"
import empty from '../../public/images/images-system/empty.png'


function HomeCoordenacao({users}){
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
                           <Link href={'/coordenacao/homecoordenacao'}>
                                <div className={`${style.active} d-flex`}>
                                    <Image className="m-2" src={init} alt='inicio' width={30}/>
                                    <p className="m-2" style={{fontWeight:'bold'}}>Inicio</p>
                                </div>
                           </Link>
                           <Link href={'/coordenacao/chatcoordenacao'}>
                                <div className={`${style.theme} d-flex`}>
                                        <Image className="m-2" src={chat} alt='Chat' width={30}/>
                                        <p className="m-2" style={{fontWeight:'bold'}}>Chat</p>
                                </div>
                           </Link>
                            <Link href={'/coordenacao/teamcoordenacao'}>
                                <div className={`${style.theme} d-flex`}>
                                    <Image className="m-2" src={coord} alt='Coordenação' width={30}/>
                                    <p className="m-2" style={{fontWeight:'bold'}}>Secretária</p>
                                </div>
                                
                            </Link>
                            <Link href={'/coordenacao/settingscoordenacao'}>
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
                          
                        <div style={{marginTop:'20px'}} className='p-2'>
                            <Dropdown isOpen={dropdownOpen} toggle={toggle} style={{float:'right'}}>
                                <DropdownToggle style={{backgroundColor:'#276E96'}} size="md">Horário de Atendimento</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={toggleModal}>Criar Horário</DropdownItem>
                                    <DropdownItem onClick={toggleModal2}>Editar Horário</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                           <ModalComponent show={modal} closed={modalClose}/>
                           <ModalNoSchedule show={modal2} closed={modalClose2}/>
                        </div>    
                        <div className="d-flex flex-column align-items-center w-100">
                            <Image style={{width:'600px', height:'400px'}} src={empty} />
                            <p>Nenhuma actividade.</p>
                        </div>
                         
                </div>
                
            </div>


        </div>
    );
}
export default HomeCoordenacao

