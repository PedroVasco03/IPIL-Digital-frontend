import Image from "next/image"
import style from '../css/aside.module.css'
import init from '../../public/images/images-system/home.png'
import chat from '../../public/images/images-system/chat.png'
import coord from '../../public/images/images-system/coordenator.png'
import set from '../../public/images/images-system/settings.png'
import exit from '../../public/images/images-system/exit.png'
import NavBarCoordenacao from "./navbar"
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input } from "reactstrap"
import { useState } from "react"
import Modal from "./components/modal"
import ModalComponent from "./components/modal"
import Link from "next/link"
import AccordionComponent from "./components/accordion"
import Head from "next/head"
function SettingsCoordenacao(){
    return (
        <div>
            <Head>
                <title>IPILDIGITAL</title>
                <link rel="icon" type="png/ico" href="../public/images/chat.png"/>
            </Head>
            <NavBarCoordenacao/>
            <div className={`d-flex flex-nowrap`}>
                <div id={style.background} style={{width:'20%', height:'150vh'}} className={`${style.position} ${style.sticky}`}>
                        <div className="d-flex flex-column p-1">
                           <Link href={'/coordenacao/homecoordenacao'}>
                                <div className={`${style.theme} d-flex`}>
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
                                    <p className="m-2" style={{fontWeight:'bold'}}>Coordenação</p>
                                </div>
                                
                            </Link>
                            <Link href={'/coordenacao/settingscoordenacao'}>
                                <div className={`${style.active} d-flex`}>
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
                <div style={{width:'20%', backgroundColor:'red'}}></div>
                <div style={{width:'80%', height:'150vh', marginTop:'60px',}}>
                          
                        <div style={{marginTop:'40px'}}>
                            <div className="w-100 p-2">
                                <AccordionComponent></AccordionComponent>
                            </div>
                        </div>    
                         
                </div>
            </div>


        </div>
    );
}
export default SettingsCoordenacao