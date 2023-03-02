import NavBarCoordenacao from "./navbar"
import styleGeral from '../css/logado.module.css'
import AccordionComponent from "./components/accordion"
import Head from "next/head"
import SideBarCoordenacao from "./sidebar"
function SettingsCoordenacao(){
    return (
        <div>
            <Head>
                <title>COORDENACAO | Definicoes</title>
                <link rel="icon" type="png/ico" href="../public/images/chat.png"/>
            </Head>
            <NavBarCoordenacao/>
            <div className={styleGeral.container}>
                <SideBarCoordenacao/>
                <div className={styleGeral.content}>
                    <p>
                        sdfdssssssssssssssssssssssssssssssssssss
                    </p>
                    <div className="w-100 p-2">
                        <AccordionComponent></AccordionComponent>
                    </div>
                    <div className="w-100 p-2">
                        <AccordionComponent></AccordionComponent>
                    </div>
                    <div className="w-100 p-2">
                        <AccordionComponent></AccordionComponent>
                    </div>
                    <div className="w-100 p-2">
                        <AccordionComponent></AccordionComponent>
                    </div>
                    </div>    
            </div>
        </div>
    );
}
export default SettingsCoordenacao