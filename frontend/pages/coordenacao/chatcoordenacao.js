import Image from "next/image"
import style from '../css/aside.module.css'
import init from '../../public/images/images-system/home.png'
import chat from '../../public/images/images-system/chat.png'
import coord from '../../public/images/images-system/coordenator.png'
import set from '../../public/images/images-system/settings.png'
import exit from '../../public/images/images-system/exit.png'
import NavBarCoordenacao from "./navbar"
import empty from '../../public/images/images-system/empty.png'
import Link from "next/link"
import { Button } from "reactstrap"
import Head from "next/head"
import styleSide from'../css/sideBar.module.css'
import styleGeral from '../css/logado.module.css'
import logo from '../../public/images/logotipo.png'

function ChatCoordenacao(){
    return (
        <div>
            <Head>
                <title>IPILDIGITAL</title>
                <link rel="icon" type="png/ico" href="../public/images/chat.png"/>
            </Head>
            <div className={styleGeral.container}>
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
                <div className={styleGeral.content}>
                        <Button className={styleSide.btn}>Enviar Mensagens</Button>
                        <div className="d-flex flex-column align-items-center w-100">
                            <Image className={styleSide.home_img} src={empty} />
                            <p>Nenhuma actividade.</p>
                        </div>
                </div>
                
            </div>


        </div>
    );
}
export default ChatCoordenacao