import React from "react";

function ClassBox(){
    const [turma, setTurma] = React.useState('');
    return(
        <>
            <div className="input-field div">
                <i className="bi-person-lines-fill i"></i>
                    <select name="turma" className="select" value={turma} onChange={(event) => setTurma (event.target.value)}>
                        <option className="option" disabled value="">Selecione a turma</option>
                        <option className="option" value="...">...</option>
                        required={true}
                    </select>
            </div>
        </>
    )
}

export default ClassBox