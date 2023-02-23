import React from "react";

function DegreBox(){
    const [classe, setClasse] = React.useState('');
    return(
        <>
            <div className="input-field div">
                <i className="bi-text-indent-right i"></i>
                    <select name="classe" className="select" value={classe} onChange={(event) => setClasse (event.target.value)}>
                        <option disabled value="">Selecione a classe</option>
                        <option value="10" className="option">10ª classe</option>
                        <option value="11" className="option">11ª classe</option>
                        <option value="12" className="option">12ª classe</option>
                        <option value="13" className="option">13ª classe</option>
                        required={true}
                    </select>
                </div>
        </>
    )
}

export default DegreBox