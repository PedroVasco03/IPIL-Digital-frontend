import Image from 'next/image'
import what from '../../public/images/initial.png'
import style from '../css/services.module.css'
const WhatIs = ()=>{
    return(
        <div className='container-fluid p-2'>
            <h2 style={{fontWeight:'bold'}} className='text-center'>O que é o IPILDIGITAL?</h2>
            <p className='text-center'>IPILDIGITAL é um sistema que permite melhorar o funcionamento da escola tornando os trabalhos totalmente digitais.</p>
            <div className='w-100 p-3'>
                <Image className={style.img_sobre}  src={what} alt={'o que é o IPILDIGITAL'} />
            </div>
        </div>
    )
}

export default WhatIs