import Image from "next/image"
import NavBarCoordenacao from "./navbar"
import { Button, Card, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap"
import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import ModalComponent from "./components/modal"
import ModalNoSchedule from "./components/modalNoSchedule"
import empty from '../../public/images/images-system/empty.png'
import Head from "next/head"
import styleSide from'../css/sideBar.module.css'
import styleGeral from '../css/logado.module.css'
import SideBarCoordenacao from "./sidebar"

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
                <title>COORDENACAO | Inicio</title>
                <link rel="icon" type="png/ico" href="../public/images/chat.png"/>
            </Head>    
            <NavBarCoordenacao></NavBarCoordenacao>
            <div className={styleGeral.container}>
                <SideBarCoordenacao></SideBarCoordenacao>
                <div className={styleGeral.content}>          
                        <div >
                            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                <DropdownToggle className={styleSide.btn}>Horário de Atendimento</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={toggleModal}>Criar Horário</DropdownItem>
                                    <DropdownItem onClick={toggleModal2}>Editar Horário</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                           <ModalComponent show={modal} closed={modalClose}/>
                           <ModalNoSchedule show={modal2} closed={modalClose2}/>
                        </div>    
                        <div className="d-flex flex-column align-items-center w-100">
                            <Image  className={styleSide.home_img} src={empty} />
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

