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
import styleSide from'../css/sideBar.module.css'
import styleGeral from '../css/logado.module.css'
import logo from '../../public/images/logotipo.png'
import AccordionComponent from "./components/accordion"
import Head from "next/head"
function SettingsCoordenacao(){
    return (
        <div>
            <Head>
                <title>IPILDIGITAL</title>
                <link rel="icon" type="png/ico" href="../public/images/chat.png"/>
            </Head>
            <div className={styleGeral.container}>
                <nav className={styleSide.nav +" "+styleGeral.nav}>
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
                          
                        <div className={styleGeral.content}>
                            <div className="w-100 p-2">
                                <AccordionComponent></AccordionComponent>
                            </div>
                        </div>    
            </div>
        </div>
    );
}
export default SettingsCoordenacao