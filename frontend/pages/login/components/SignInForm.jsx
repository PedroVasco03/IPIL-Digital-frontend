import React from "react";
import ButtonConfirm from "./ButtonConfirm";
import {validateEmail,validatePassword} from "./utils/regex"
import style from "../../css/Login.module.css"


function SignInForm(){
    const [desabilitado, setDesabilitado] = React.useState(false)
    
    const [email, setEmail] = React.useState('');
    const [emailErr, setEmailErr] = React.useState(false);
    const [senha, setSenha] = React.useState('');
    const [senhaErr, setSenhaErr] = React.useState(false);
    const validate = () => {
        if(!validateEmail.test(email)){
            setEmailErr(true)
            setDesabilitado(true)
        }else{
            setEmailErr(false)
            setDesabilitado(false)
        }
        if(!validatePassword.test(senha)){
            setSenhaErr(true)
            setDesabilitado(true)
        }else{
            setSenhaErr(false)
            setDesabilitado(false)
        }
    }
   
    return(
        <>
            <form className={style.sign_in_form+" " +style.form} >
                <h2 className={style.title + " " +style.h2}>Entrar</h2>
                <div className={style.input_field + " " +style.div}>
                    <i className={"bi-envelope-fill"+" "+ style.i}></i>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Email" 
                        className={style.input}
                        value={email}
                        onChange={(event) =>{ 
                            setEmail(event.target.value)
                            setEmailErr(false)
                            setDesabilitado(false)
                        }}
                        onBlur={validate}
                        required={true}

                        
                    />
                </div>
            {emailErr && <p>Por favor  digite um email válido</p>}

            <div className={style.input_field +" "+style.div}>
                <i className={"bi-lock-fill "+style.i}></i>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Senha"
                    className={style.input}
                    minLength={8}
                    value={senha}
                    onChange={
                            (event) => {
                            setSenha (event.target.value)
                            setSenhaErr(false)
                            setDesabilitado(false)}
                    } 
                    onBlur={validate}
                    required={true}
                />
            </div>
            {senhaErr && <p>A senha deve incluir:
                            8 dígitos , incluíndo uma letra maiúscula e um número
                        </p>}

             <input type="submit" value={desabilitado} disabled={desabilitado}  className={style.btn+" "+ style.solid+" "+ style.input}></input>
            </form>
        </>
    )
}

export default SignInForm