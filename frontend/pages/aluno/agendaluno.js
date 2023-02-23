import Image from "next/image"
import style from '../css/aside.module.css'
import init from '../../public/images/images-system/home.png'
import chat from '../../public/images/images-system/chat.png'
import coord from '../../public/images/images-system/coordenator.png'
import set from '../../public/images/images-system/settings.png'
import exit from '../../public/images/images-system/exit.png'
import NavBarCoordenacao from "./navbar"
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, Label } from "reactstrap"
import { useState } from "react"
import Link from "next/link"
function AgendAluno(){
    const diaSemana = ['Segunda','Terça','Quarta','Quinta','Sexta']
    const hora = ['7:00','7:30','8:00','8:30','9:00','9:30','10:00','10:30','11:00','11:30','12:00']
    return (
        <div>
            <NavBarCoordenacao/>
            <div className={`d-flex flex-nowrap`}>
                <div id={style.background} style={{width:'20%', height:'150vh'}} className={`${style.position} ${style.sticky}`}>
                        <div className="d-flex flex-column p-1">
                           <Link href={'/aluno/homealuno'}>
                                <div className={`${style.theme} d-flex`}>
                                    <Image className="m-2" src={init} alt='inicio' width={30}/>
                                    <p className="m-2" style={{fontWeight:'bold'}}>Inicio</p>
                                </div>
                           </Link>
                           <Link href={'/aluno/chataluno'}>
                                <div className={`${style.theme} d-flex`}>
                                        <Image className="m-2" src={chat} alt='Chat' width={30}/>
                                        <p className="m-2" style={{fontWeight:'bold'}}>Chat</p>
                                </div>
                           </Link>
                            <Link href={'/aluno/agendaluno'}>
                                <div className={`${style.active} d-flex`}>
                                    <Image className="m-2" src={coord} alt='Coordenação' width={30}/>
                                    <p className="m-2" style={{fontWeight:'bold'}}>Agendar</p>
                                </div>
                                
                            </Link>
                            <Link href={'/aluno/settingsaluno'}>
                                <div className={`${style.theme} d-flex`}>
                                    <Image className="m-2" src={set} alt='Definições' width={30}/>
                                    <p className="m-2" style={{fontWeight:'bold'}}>Definições</p>
                                </div>
                            </Link>
                            
                            <Link href={'/'}>
                                <div  className={`${style.theme} d-flex`}>
                                    <Image className="m-2" src={exit} alt='Sair' width={30}/>
                                    <p className="m-2" style={{fontWeight:'bold'}}>Sair</p>
                                </div>
                            </Link>
                        </div>
                </div>
                <div style={{width:'20%', backgroundColor:'red'}}></div>
                <div style={{width:'80%', height:'150vh', marginTop:'60px',}}>
                          
                        <div style={{marginTop:'40px'}}>
                            <div className="p-3">
                                <FormGroup>
                                    <Label>Reclamação para:</Label>
                                    <Input type="select">
                                        <option>Coordenação</option>
                                        <option>Secretária</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <label>Senha:</label>
                                    <Input readOnly></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="attend">Dia de Semana:</Label>
                                    <Input id="attend" type="select">
                                        {diaSemana.map((item, index)=>{
                                            return(
                                                <option key={index} value={index}>{item}</option>
                                            )
                                        })}
                                    </Input> 
                                </FormGroup>
                                <FormGroup>
                                    <Label for="attend">Hora de Atendimento:</Label>
                                    <Input id="attend" type="select">
                                        {hora.map((item, index)=>{
                                            return(
                                                <option key={index} value={index}>{item}</option>
                                            )
                                        })}
                                    </Input> 
                                </FormGroup>
                                <FormGroup>
                                    <Label>Informação:</Label>
                                    <Input type='textarea' style={{}}></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Button color="primary" className="m-2">Agendar</Button>
                                    <Button color="primary" className="m-2">Ver Agendados</Button>
                                </FormGroup>
                            </div>
                        </div>    
                         
                </div>
            </div>


        </div>
    );
}
export default AgendAluno