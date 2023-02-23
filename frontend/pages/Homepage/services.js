import Image from "next/image"
import service from '../../public/images/services.png'
import chat from '../../public/images/chat.png'
import schedule from '../../public/images/schedule.png'
import attend from '../../public/images/attend.png'
import style from '../css/services.module.css'
const Services = ()=>{
    return(
        <div>
            <h2 style={{fontWeight:'bold'}} className='text-center'>Serviços</h2>
            <p className="text-center">O IPILDIGITAL tem como objectivo facilitar alguns serviços de forma simples e rápida.</p>
            <div className={'d-flex '+style.containerServices}>
            
                <div id={style.serviceImage}>
                    <Image src={service} className={style.img} alt='Serviços'/>
                </div>
               
                <div>
                    <div className="d-flex flex-row">
                         <div className={'p-3 ' + style.serviceItem}>
                            <Image src={chat} alt='Chat Online' width={40}/>
                            <h3>Chat Online</h3>
                            <p>Agora podes entra em contacto com os teus colegas e podes estar a par de todas informações.</p>
                         </div>

                         <div className={'p-3 ' + style.serviceItem}>
                            <Image src={schedule} alt='Marcações Online' width={40}/>
                            <h3>Marcações Online</h3>
                            <p>As marcações serão feitas de forma simples agendando o horário e o assunto que pretende que seja atendido.</p>
                         </div>   
                    </div>
                    <div className={'p-3 ' + style.serviceItem}>
                    <Image src={attend} alt='Atendimento Online' width={40}/>
                        <h3>Atendimento Online</h3>
                        <p>Receba atendimento da coordenação e da secretária de forma simples, tendo uma experiência única.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services