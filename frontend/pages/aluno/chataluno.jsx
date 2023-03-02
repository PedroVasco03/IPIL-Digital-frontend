import Image from "next/image"
import empty from '../../public/images/images-system/empty.png'
import { Button } from "reactstrap"
import Head from "next/head"
import styleSide from'../css/sideBar.module.css'
import styleGeral from '../css/logado.module.css'
import NavBarAluno from "./navbar"
import SideBarAluno from "./sidebar"

function ChatAluno(){
    return (
        <div>
            <Head>
                <title>ALUNO | Chat</title>
                <link rel="icon" type="png/ico" href="../public/images/chat.png"/>
            </Head>
            <NavBarAluno></NavBarAluno>
            <div className={styleGeral.container}>
                <SideBarAluno/>
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
export default ChatAluno