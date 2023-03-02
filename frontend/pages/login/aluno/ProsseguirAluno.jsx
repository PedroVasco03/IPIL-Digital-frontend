import React from "react"
import imagem from "../images/undraw_working_re_ddwy2.svg"
import style1 from "../../css/Login.module.css"
import style2 from "../../css/Prosseguir.module.css"
import Link from "next/link"
import SignUpForm2 from "../components/SignUpForm2"

function Prosseguir() {
    return(
        <>
            <div className={style2.container}>
                <div className={style2.forms_container}>
                    <div className={style2.signin_signup}>
                        <SignUpForm2/>
                    </div>
                </div>
                <div className={style1.panels_container+" "+ style1.div}>
                    <div className={style2.panel+" "+ style2.left_panel+" "+ style1.div}>
                        <div className={style2.content+" "+ style1.div}>
                            <h3 className={style2.h3}>Algum problema ?</h3>
                            <p className={style2.p}> Caso insiras alguma informação errada saiba que 
                                existe aqui a opção de regressares a página anterior, 
                                clique em <strong>Voltar</strong> e atualize as suas informações.</p>
                               <button className={style2.btn+" "+ style2.transparent +" "+ style2.button} id="sign-up-btn">Voltar</button>
                        </div>
                        <img src={imagem} className={style2.image} alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Prosseguir