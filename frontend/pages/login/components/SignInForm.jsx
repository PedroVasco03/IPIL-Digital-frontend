import React from "react";
import ButtonConfirm from "./ButtonConfirm";
import EmailBox from "./EmailBox"
import PasswordBox from "./PasswordBox"
import style from "../../css/Login.module.css"


function SignInForm(){
    return(
        <>
            <form className={style.sign_in_form+" " +style.form} >
                <h2 className={style.title + " " +style.h2}>Entrar</h2>
                <EmailBox/>
                <PasswordBox/>
                <ButtonConfirm value="Entrar"/>
            </form>
        </>
    )
}

export default SignInForm