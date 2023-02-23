import Image from "next/image"
import style from '../css/aside.module.css'
import init from '../../public/images/images-system/home.png'
import chat from '../../public/images/images-system/chat.png'
import coord from '../../public/images/images-system/coordenator.png'
import set from '../../public/images/images-system/settings.png'
import exit from '../../public/images/images-system/exit.png'
import NavBarCoordenacao from "./navbar"
import { Button, Card, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap"
import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import ModalComponent from "./components/modal"
import Link from "next/link"
import ModalNoSchedule from "./components/modalNoSchedule"
import empty from '../../public/images/images-system/empty.png'
import Head from "next/head"
function HomeCoordenacao(){
    const [datas, setDatas] = useState([])
    const [modal, setModal] = useState(false)
    const toggleModal = ()=> setModal(!modal)
    const modalClose = ()=> setModal(false)
    const [modal2, setModal2] = useState(false)
    const toggleModal2 = ()=> setModal2(!modal2)
    const modalClose2 = ()=> setModal2(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggle = ()=> setDropdownOpen((prevState)=>!prevState)
    useEffect(()=>{
       getUsers()
    },[])
    
    const getUsers = async ()=>{
        const response = await axios.get('http://localhost:5000/horario')
        .then((response)=>{
            console.log('buscando dados no banco de dados')
            setDatas(response.data)
        })
        .catch(()=>console.log('erro: solicitação negada'))
        
        console.log(datas)
    }
    
    
    return (
        <div>
            <Head>
                <title>IPILDIGITAL</title>
                <link rel="icon" type="png/ico" href="../public/images/chat.png"/>
            </Head>
            <NavBarCoordenacao/>
            <div className={`d-flex flex-nowrap`}>
                <div id={style.background} style={{width:'20%', height:'150vh'}} className={`${style.position} ${style.sticky}`}>
                        <div className="d-flex flex-column p-1">
                           <Link href={'/coordenacao/homecoordenacao'}>
                                <div className={`${style.active} d-flex`}>
                                    <Image className="m-2" src={init} alt='inicio' width={30}/>
                                    <p className="m-2" style={{fontWeight:'bold'}}>Inicio</p>
                                </div>
                           </Link>
                           <Link href={'/coordenacao/chatcoordenacao'}>
                                <div className={`${style.theme} d-flex`}>
                                        <Image className="m-2" src={chat} alt='Chat' width={30}/>
                                        <p className="m-2" style={{fontWeight:'bold'}}>Chat</p>
                                </div>
                           </Link>
                            <Link href={'/coordenacao/teamcoordenacao'}>
                                <div className={`${style.theme} d-flex`}>
                                    <Image className="m-2" src={coord} alt='Coordenação' width={30}/>
                                    <p className="m-2" style={{fontWeight:'bold'}}>Coordenação</p>
                                </div>
                                
                            </Link>
                            <Link href={'/coordenacao/settingscoordenacao'}>
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
                <div style={{width:'20%'}}></div>
                <div style={{width:'80%', height:'150vh', marginTop:'60px',}}>
                          
                        <div style={{marginTop:'20px'}} className='p-2'>
                            <Dropdown isOpen={dropdownOpen} toggle={toggle} style={{float:'right'}}>
                                <DropdownToggle style={{backgroundColor:'#276E96'}} size="md">Horário de Atendimento</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={toggleModal}>Criar Horário</DropdownItem>
                                    <DropdownItem onClick={toggleModal2}>Editar Horário</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                           <ModalComponent show={modal} closed={modalClose}/>
                           <ModalNoSchedule show={modal2} closed={modalClose2}/>
                        </div>    
                        <div className="d-flex flex-column align-items-center w-100">
                            <Image style={{width:'600px', height:'400px'}} src={empty} />
                            <p>Nenhuma actividade.</p>
                            {datas.map((value, index)=>{
                                console.log(value)
                            })}
                            
                        </div>
                         
                </div>
                
            </div>


        </div>
    );
}
export default HomeCoordenacao

