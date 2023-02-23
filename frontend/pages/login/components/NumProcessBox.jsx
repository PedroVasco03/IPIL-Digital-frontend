import React from "react";

function deteta (e){
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
function NumProcessBox(){
    const [numprocesso, setNumProcesso] = React.useState('');
    return(
        <>
            <div className="input-field div">
                <i className="bi-123"></i>
                <input 
                    type="number" 
                    name="processnumber" 
                    className="input"
                    placeholder="Número de Processo" 
                    value={numprocesso}
                    required={true}
                    onKeyPress={deteta}
                    onChange={(event) => setNumProcesso (event.target.value)}
                />
            </div>
        </>
    )
}

export default NumProcessBox