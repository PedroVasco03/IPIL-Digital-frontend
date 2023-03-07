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
import { validateName, validateEmail, validateTelefone, validateBi, validatePassword} from "./utils/regex";
import style from "../../css/Login.module.css"

function deteta (e){
    const Code = (e.charCode ? e.charCode : e.wich);
    if(Code > 40 && Code <=62){
        e.preventDefault()
    }
}
function detetaNum (e){ 
    const Code = (e.charCode ? e.charCode : e.wich);
    if(Code < 40 || Code > 58){
        e.preventDefault()
    }
}
function detetaPro (e){
    const Code = (e.key ? e.key : e.key);
    console.log(Code)
    if( Code !== '0' & 
        Code !== '1' & 
        Code !== '2' & 
        Code !== '3' & 
        Code !== '4' & 
        Code !== '5' & 
        Code !== '6' & 
        Code !== '7' & 
        Code !== '8' & 
        Code !== '9'){
        e.preventDefault()
    }
}
function SignUpForm({user}){
    const [desabilitado, setDesabilitado] = React.useState(false)
    const [nome, setNome] = React.useState('');
    const [nomeErr, setNomeErr] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [emailErr, setEmailErr] = React.useState(false);
    const [telefone, setTelefone] = React.useState('');
    const [telefoneErr, setTelefoneErr] = React.useState('');
    const [numbi, setNumBi] = React.useState('');
    const [biErr, setBiErr] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [senhaErr, setSenhaErr] = React.useState(false);
    const [sexo, setSexo] = React.useState('');
    const [curso, setCurso] = React.useState('');
    const [numprocesso, setNumProcesso] = React.useState('');

    function handleChangue({target}){
        setSexo(target.value);
    }

    const validate = () => {
        if(!validateName.test(nome)){
            setNomeErr(true)
            setDesabilitado(true)
        }else{
            setNomeErr(false)
            setDesabilitado(false)
        }
        if(!validateEmail.test(email)){
            setEmailErr(true)
            setDesabilitado(true)
        }else{
            setEmailErr(false) 
            setDesabilitado(false)
        }
        if(!validateTelefone.test(telefone)){
            setTelefoneErr(true)
            setDesabilitado(true)
        }else{
            setTelefoneErr(false)
            setDesabilitado(false)
        }
        if(!validateBi.test(numbi)){
            setBiErr(true)
            setDesabilitado(true)
        }else{
            setBiErr(false)
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


    if (user === "aluno" ) {
    return(
        <>
            <form className={style.sign_up_form+" "+ style.form}>
                <h2 className={style.title+" "+ style.h2}>Cadastrar-se</h2>
                <div className={style.input_field+" " +style.div}>
                <i className={"bi-person-fill "+style.i}></i>
                <input 
                    type="text" 
                    name="usernew" 
                    placeholder="Nome" 
                    className={style.input}
                    value={nome}
                    id="nome"
                    onKeyPress={deteta  }
                    onChange={
                        (event) => {
                        setNome (event.target.value)
                        setNomeErr(false)
                        setDesabilitado(false)
                        }
                    } 
                onBlur={validate}
                required={true}
                />
            </div>
            {nomeErr && <p>Por favor digite nome válido</p>}

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

            <div className={style.input_field+" " +style.div}>
                <i className={"bi-phone-fill "+style.i}></i>
                <input 
                    type="text" 
                    name="mailnew" 
                    placeholder="Telefone"
                    className={style.input}
                    maxLength={11}
                    minLength={9}
                    value={telefone}
                    onKeyPress={detetaNum}
                    onChange={
                        (event) => {
                        setTelefone (event.target.value)
                        setTelefoneErr(false)
                        setDesabilitado(false)
                        }
                    }
                    onBlur={validate}
                    required={true}
                />
            </div>
            {telefoneErr && <p>Por favor digite número válido EX: "999-999-999"</p>}

            <div className={style.input_field +" "+style.div}>
                <i className={"bi-card-heading "+ style.i}></i>
                <input 
                    type="text" 
                    name="binew" 
                    className={style.input}
                    placeholder="Bilhete de identidade" 
                    maxLength={14}
                    value={numbi}
                    onChange={
                        (event) => {
                        setNumBi (event.target.value) 
                        setBiErr(false)
                        setDesabilitado(false)
                    }
                    }
            onBlur={validate}
            required={true}
            />
        </div>
        {biErr && <p>Por favor digite numero do bilhete válido</p>}

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
        {senhaErr && 
            <p>
                A senha deve incluir: 8 dígitos , incluíndo uma letra maiúscula e um número
            </p>
        }

                <div className="gender-field div"  onChange={(event) => setSexo (event.target.value)}>
                    <p>Sexo</p>
                    <div className="radio-field div" >
                        <label htmlFor="masculino" >Masculino</label>
                        <input 
                            type="radio" 
                            value="masculino"
                            id="masculino"
                            className="input"
                            checked={sexo === 'masculino'}
                            onChange={handleChangue}
                        />
                        <label htmlFor="feminino">Feminino</label>
                        <input 
                            type="radio" 
                            id="feminino"
                            value="feminino"
                            className="input"
                            checked={sexo==='feminino'}
                            onChange={handleChangue}
                        />
                    </div>
                </div>
            {sexo}

                <a href="../aluno/ProsseguirAluno"><input type="submit" value="Prosseguir" disabled={desabilitado}  className={style.btn+" "+ style.solid+" "+ style.input}></input>  </a> 
            </form>
        </>
    )}else if(user === "coordenador"){
        return(
            <>
                <form className={style.sign_up_form+" "+ style.form}>
                    <h2 className={style.title+" "+ style.h2}>Cadastrar-se</h2>
                    <div className={style.input_field+" " +style.div}>
                        <i className={"bi-person-fill "+style.i}></i>
                        <input 
                            type="text" 
                            name="usernew" 
                            placeholder="Nome" 
                            className={style.input}
                            value={nome}
                            id="nome"
                            onKeyPress={deteta  }
                            onChange={
                                (event) => {
                                setNome (event.target.value)
                                setNomeErr(false)
                                setDesabilitado(false)
                                }
                            } 
                        onBlur={validate}
                        required={true}
                        />
                    </div>
                    {nomeErr && <p>Por favor digite nome válido</p>}
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

                    <div className={style.input_field+" " +style.div}>
                        <i className={"bi-phone-fill "+style.i}></i>
                        <input 
                            type="text" 
                            name="mailnew" 
                            placeholder="Telefone"
                            className={style.input}
                            maxLength={11}
                            minLength={9}
                            value={telefone}
                            onKeyPress={detetaNum}
                            onChange={
                                (event) => {
                                setTelefone (event.target.value)
                                setTelefoneErr(false)
                                setDesabilitado(false)
                                }
                            }
                            onBlur={validate}
                            required={true}
                        />
                    </div>
                    {telefoneErr && <p>Por favor digite número válido EX: "999-999-999"</p>}
                    <div className={style.input_field +" "+  style.div}>
                        <i className={"bi-bar-chart-steps " + style.i}></i>
                            <select className={style.select+" "+style.input} name="curso" value={curso} onChange={(event) => setCurso (event.target.value)}>
                                <option className="option" disabled value="">Selecione o curso</option>
                                <option className="option" value="ii">Técnico de Infor. {"(II)"}</option>
                                <option className="option" value="ig">Técnico de G.S. Infor. {"(IG)"}</option>
                                required={true}
                            </select>
                    </div>
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
                    {senhaErr && 
                        <p>
                            A senha deve incluir: 8 dígitos , incluíndo uma letra maiúscula e um número
                        </p>
                    }
                    <input type="submit" value="Cadastrar" disabled={desabilitado}  className={style.btn+" "+ style.solid+" "+ style.input}></input>
                </form>
            </>
        )
    }else if(user === "encarregado"){
        return(
            <>
                <form className={style.sign_up_form+" "+ style.form}>
                    <h2 className={style.title+" "+ style.h2}>Cadastrar-se</h2>
                    <div className={style.input_field+" " +style.div}>
                        <i className={"bi-person-fill "+style.i}></i>
                        <input 
                            type="text" 
                            name="usernew" 
                            placeholder="Nome" 
                            className={style.input}
                            value={nome}
                            id="nome"
                            onKeyPress={deteta  }
                            onChange={
                                (event) => {
                                setNome (event.target.value)
                                setNomeErr(false)
                                setDesabilitado(false)
                                }
                            } 
                        onBlur={validate}
                        required={true}
                        />
                    </div>
                    {nomeErr && <p>Por favor digite nome válido</p>}
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

                    <div className={style.input_field+" " +style.div}>
                        <i className={"bi-phone-fill "+style.i}></i>
                        <input 
                            type="text" 
                            name="mailnew" 
                            placeholder="Telefone"
                            className={style.input}
                            maxLength={11}
                            minLength={9}
                            value={telefone}
                            onKeyPress={detetaNum}
                            onChange={
                                (event) => {
                                setTelefone (event.target.value)
                                setTelefoneErr(false)
                                setDesabilitado(false)
                                }
                            }
                            onBlur={validate}
                            required={true}
                        />
                    </div>
                    {telefoneErr && <p>Por favor digite número válido EX: "999-999-999"</p>}
                    <div className={style.input_field+" "+ style.div}>
                        <i className={"bi-123 "+ style.i}></i>
                        <input 
                            type="number" 
                            name="processnumber" 
                            className={style.input}
                            placeholder="Número de Processo" 
                            value={numprocesso}
                            required={true}
                            onKeyPress={detetaPro}
                            onChange={(event) => setNumProcesso (event.target.value)}
                        />
                    </div>
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
                    {senhaErr && 
                        <p>
                            A senha deve incluir: 8 dígitos , incluíndo uma letra maiúscula e um número
                        </p>
                    }
                    <input type="submit" value="Cadastrar" disabled={desabilitado}  className={style.btn+" "+ style.solid+" "+ style.input}></input>
                </form>
            </>
        )
    }else {return(<><h1>nada</h1></>)}
}

export default SignUpForm