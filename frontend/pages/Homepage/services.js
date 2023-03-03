import Image from "next/image"
import service from '../../public/images/services.png'
import chat from '../../public/images/chat2.png'
import schedule from '../../public/images/schedule2.png'
import attend from '../../public/images/attend2.png'
import style from '../css/services.module.css'
const Services = ()=>{
    return(
        <div data-aos="fade-up">
            <h2 style={{fontWeight:'bold'}} className='text-center'>Serviços</h2>
            <p className="text-center">O IPILDIGITAL tem como objectivo facilitar alguns serviços de forma simples e rápida.</p>
            <div className={'d-flex '+style.containerServices}>
            
                
               
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
                    <Image src={attend}  alt='Atendimento Online' width={40}/>
                        <h3>Atendimento Online</h3>
                        <p>Receba atendimento da coordenação e da secretária de forma simples, tendo uma experiência única.</p>
                    </div>
                </div>
            </div>
            
            <div className={style.todos}>
                <div className={style.contentText}>
                    <h2 style={{fontWeight:'bold'}} className={style.title}>Serviços</h2>
                    <p className={style.text}>O IPILDIGITAL tem como objectivo facilitar alguns serviços de forma simples e rápida.</p>
                </div>

                <div id={style.serviceImage}>
                    <Image src={service} className={style.img} alt='Serviços'/>
                </div>
                
                <div className={style.container +" "+style.div}>
                 <div className={style.card +" "+style.div}>
                        <div className={style.div +" "+style.lines}></div>
                        <div className={style.imgBx+" "+style.div}>
                            <Image src={chat} className={style.imgS} alt='Chat Online'/>
                        </div>
                        <div className={style.content}>
                            <div className={style.details}>
                                <h2 className={style.h2}>Chat Online</h2>
                                <p className={style.p}>Agora podes entra em contacto com os teus colegas e podes estar a par de todas informações.</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.card +" "+style.div}>
                        <div className={style.div +" "+style.lines}></div>
                        <div className={style.imgBx+" "+style.div}>
                            <Image src={schedule} className={style.imgS} alt='Marcacoes Online'/>
                        </div>
                        <div className={style.content}>
                            <div className={style.details}>
                                <h2 className={style.h2}>Marcações Online</h2>
                                <p className={style.p}>As marcações serão feitas de forma simples agendando o horário e o assunto que pretende que seja atendido.</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.card +" "+style.div}>
                        <div className={style.div +" "+style.lines}></div>
                        <div className={style.imgBx+" "+style.div}>
                            <Image src={attend} className={style.imgS} alt='Atendimento Online'/>
                        </div>
                        <div className={style.content}>
                            <div className={style.details}>
                                <h2 className={style.h2}>Atendimento Online</h2>
                                <p className={style.p}>Receba atendimento da coordenação e da secretária de forma simples, tendo uma experiência única.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}
export default Services