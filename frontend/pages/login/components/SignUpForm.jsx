import React from "react";
import Link from 'next/link'
import PhoneBox from "./PhoneBox";
import NameBox from "./NameBox";
import EmailBox from "./EmailBox";
import BiBox from "./BiBox";
import PasswordBox from "./PasswordBox";
import GenderField from "./GenderField";
import ButtonConfirm from "./ButtonConfirm";
import CourseBox from "./CourseBox";
import NumProcessBox from "./NumProcessBox";
import style from "../../css/Login.module.css"

function SignUpForm({user}){

    if (user === "aluno" ) {
    return(
        <>
            <form className={style.sign_up_form+" "+ style.form}>
                <h2 className={style.title+" "+ style.h2}>Cadastrar-se</h2>
                <NameBox/>
                <EmailBox/>
                <PhoneBox/>
                <BiBox/>
                <PasswordBox/>
                <GenderField/>
                <a href="../aluno/ProsseguirAluno"><ButtonConfirm value="Prosseguir" />  </a> 
            </form>
        </>
    )}else if(user === "coordenador"){
        return(
            <>
                <form className={style.sign_up_form+" "+ style.form}>
                    <h2 className={style.title+" "+ style.h2}>Cadastrar-se</h2>
                    <NameBox/>
                    <EmailBox/>
                    <PhoneBox/>
                    <CourseBox/>
                    <PasswordBox/>
                    <ButtonConfirm value="Cadastrar"/>
                </form>
            </>
        )
    }else if(user === "encarregado"){
        return(
            <>
                <form className={style.sign_up_form+" "+ style.form}>
                    <h2 className={style.title+" "+ style.h2}>Cadastrar-se</h2>
                    <NameBox/>
                    <EmailBox/>
                    <PhoneBox/>
                    <NumProcessBox/>
                    <PasswordBox/>
                    <ButtonConfirm value="Cadastrar"/>
                </form>
            </>
        )
    }else {return(<><h1>nada</h1></>)}
}

export default SignUpForm