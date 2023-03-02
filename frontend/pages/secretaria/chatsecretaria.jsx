import Image from "next/image"
import Head from "next/head"
import empty from '../../public/images/images-system/empty.png'
import { Button } from "reactstrap"
import styleSide from'../css/sideBar.module.css'
import styleGeral from '../css/logado.module.css'
import NavBarSecretaria from "./navbar"
import SideBarSecretaria from "./sidebar"

function ChatSecretaria(){
    return (
        <div>
            <Head>
                <title>SECRETARIA | Chat</title>
                <link rel="icon" type="png/ico" href="../public/images/chat.png"/>
            </Head>
            <NavBarSecretaria></NavBarSecretaria>
            <div className={styleGeral.container}>
                <SideBarSecretaria></SideBarSecretaria>
                <div className={styleGeral.content}>    
                    <Button className={styleSide.btn}>Enviar Mensagens</Button>        
                    <div className="d-flex flex-column align-items-center w-100">
                        <Image  className={styleSide.home_img} src={empty} />
                        <p>Nenhuma actividade.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ChatSecretaria