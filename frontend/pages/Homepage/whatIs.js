import Image from 'next/image'
import what from '../../public/images/initial.png'
import style from '../css/services.module.css'
const WhatIs = ()=>{
    return(
        <div className='container-fluid p-2 '>
            <h2  className='text-center'>O que é o IPILDIGITAL?</h2>
            <div className={style.container_sobre}>
                <div className={style.contentText}>
                    <p className='text-center '>
                        IPILDIGITAL é um sistema que permite melhorar o funcionamento da escola tornando os trabalhos totalmente digitais.
                        
                    </p>
                </div>
                 <div className='w-100 p-3'>
                    <Image className={style.img_sobre}  src={what} alt={'o que é o IPILDIGITAL'} />
                </div>
            </div>
            
        </div>
    )
}

export default WhatIs