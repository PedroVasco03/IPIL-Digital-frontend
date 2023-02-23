import React from "react"
import imagem from "../images/undraw_working_re_ddwy2.svg"
import style1 from "../../css/Login.module.css"
import style2 from "../../css/Prosseguir.module.css"
import Link from "next/link"
import SignUpForm2 from "./SignUpForm2"

function Prosseguir() {
    return(
        <>
            <div className={style1.container}>
                <div className={style1.forms_container}>
                    <div className={style1.signin_signup}>
                        <SignUpForm2/>
                    </div>
                </div>
                <div className="panels-container div">
                    <div className="panel left-panel div">
                        <div className="content div">
                            <h3 className="h3">Algum problema ?</h3>
                            <p className="p"> Caso insiras alguma informação errada saiba que 
                                existe aqui a opção de regressares a página anterior, 
                                clique em <strong>Voltar</strong> e atualize as suas informações.</p>
                               <button className="btn transparent" id="sign-up-btn">Voltar</button>
                        </div>
                        <img src={imagem} className="image" alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Prosseguir