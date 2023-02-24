import Image from "next/image"
import style from '../css/aside.module.css'
import init from '../../public/images/images-system/home.png'
import chat from '../../public/images/images-system/chat.png'
import coord from '../../public/images/images-system/coordenator.png'
import set from '../../public/images/images-system/settings.png'
import exit from '../../public/images/images-system/exit.png'
import NavBarCoordenacao from "./navbar"
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input } from "reactstrap"
import { useState } from "react"
import Modal from "./components/modal"
import ModalComponent from "./components/modal"
import Link from "next/link"
import Head from "next/head"
import styleSide from'../css/sideBar.module.css'
import logo from '../../public/images/logotipo.png'

function TeamCoordenacao(){
    return (
        <div>
            <Head>
                <title>IPILDIGITAL</title>
                <link rel="icon" type="png/ico" href="../public/images/chat.png"/>
            </Head>
            {/* <NavBarCoordenacao/> */}
            <div className={`d-flex flex-nowrap`}>
                {/* <div id={style.background} style={{width:'20%', height:'150vh'}} className={`${style.position} ${style.sticky}`}>
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
                                <div className={`${style.active} d-flex`}>
                                    <Image className="m-2" src={coord} alt='Coordenação' width={30}/>
                                    <p className="m-2" style={{fontWeight:'bold'}}>Coordenação</p>
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
                </div> */}
                <nav className={styleSide.nav}>
                    <ul className={styleSide.ul}>
                    <li className={styleSide.li}><a href="/coordenacao/homecoordenacao" className={styleSide.a+" "+styleSide.logo}> 
                            <Image className={styleSide.i} src={logo} alt='logo'/>
                            <span className={styleSide.nav_item+" "+styleSide.span}>IPIL DIGITAL</span>
                        </a></li>
                        <li className={styleSide.li}><a href="/coordenacao/homecoordenacao" className={styleSide.a}> 
                            <Image className={styleSide.i} src={init} alt='inicio'/>
                            <span className={styleSide.nav_item+" "+styleSide.span}>Início</span>
                        </a></li>
                        <li className={styleSide.li}><a href="/coordenacao/chatcoordenacao" className={styleSide.a}>
                            <Image className={styleSide.i} src={chat} alt='Chat'/>
                            <span className={styleSide.nav_item+" "+styleSide.span}>Chat</span>
                        </a></li>
                        <li className={styleSide.li}><a href="/coordenacao/teamcoordenacao" className={styleSide.a}>
                            <Image className={styleSide.i} src={coord} alt='Coordenação'/>
                            <span className={styleSide.nav_item+" "+styleSide.span}>Coordenação</span>
                        </a></li>
                        <li className={styleSide.li}><a href="/coordenacao/settingscoordenacao" className={styleSide.a}>
                            <Image className={styleSide.i} src={set} alt='Definições' />
                            <span className={styleSide.nav_item+" "+styleSide.span}>Definições</span>
                        </a></li>
                        <li className={styleSide.li}><a href="#" className={styleSide.a+" "+styleSide.logout}>
                            <Image className={styleSide.i } src={exit} alt='Sair' />
                            <span className={styleSide.nav_item+" "+styleSide.span}>Sair</span>
                        </a></li>
                    </ul>
                </nav>
                <div style={{width:'20%'}}></div>
                <div style={{width:'80%', height:'150vh', marginTop:'60px',}}>
                          
                        <div style={{marginTop:'40px'}}>
                            <div className="m-2"  style={{float:'right'}}>
                                
                            </div>
                        </div>    
                         
                </div>
            </div>


        </div>
    );
}
export default TeamCoordenacao