import Head from "next/head"
import styleGeral from '../css/logado.module.css'
import NavBarAluno from "./navbar"
import SideBarAluno from "./sidebar"

function SettingsAluno(){
    return (
        <div>
            <Head>
                <title>ALUNO | Definicoes</title>
                <link rel="icon" type="png/ico" href="../public/images/chat.png"/>
            </Head>
            <NavBarAluno/>
            <div className={styleGeral.container}>
                <SideBarAluno/>
                <div className={styleGeral.content}>  
                </div>
            </div>
        </div>
    );
}
export default SettingsAluno