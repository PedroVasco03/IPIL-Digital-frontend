import Image from "next/image"
import NavBarCoordenacao from "./navbar"
import empty from '../../public/images/images-system/empty.png'
import { Button } from "reactstrap"
import Head from "next/head"
import styleSide from'../css/sideBar.module.css'
import styleGeral from '../css/logado.module.css'
import SideBarCoordenacao from "./sidebar"

function ChatCoordenacao(){
    return (
        <div>
            <Head>
                <title>COORDENACAO | Chat</title>
                <link rel="icon" type="png/ico" href="../public/images/chat.png"/>
            </Head>
            <NavBarCoordenacao/>
            <div className={styleGeral.container}>
                <SideBarCoordenacao></SideBarCoordenacao>
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