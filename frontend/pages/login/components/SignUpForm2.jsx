import React from "react";
import AreaBox from "./AreaBox"
import NumProcessBox from "./NumProcessBox"
import CourseBox from "./CourseBox"
import DegreBox from "./DegreBox"
import ClassBox from "./ClassBox"
import ButtonConfirm from "./ButtonConfirm";
import style from "../../css/Prosseguir.module.css"

function SignUpForm2(){
    return(
        <>
            <form  className={style.sign_in_form+" "+ style.form}>
                <h2 className={style.title+" "+ style.h2}>Cadastrar-se</h2>
                <NumProcessBox/>
                <AreaBox/>
                <CourseBox/>
                <DegreBox/>
                <ClassBox/>
                <ButtonConfirm value="cadastrar"/>
            </form>
        </>
    )
}

export default SignUpForm2