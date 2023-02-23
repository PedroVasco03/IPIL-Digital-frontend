import React from "react";

function CourseBox(){
    const [curso, setCurso] = React.useState('');
    return(
        <>
            <div className="input-field  div">
                <i className="bi-bar-chart-steps i"></i>
                    <select className="select" name="curso" value={curso} onChange={(event) => setCurso (event.target.value)}>
                        <option className="option" disabled value="">Selecione o curso</option>
                        <option className="option" value="ii">Técnico de Infor. {"(II)"}</option>
                        <option className="option" value="ig">Técnico de G.S. Infor. {"(IG)"}</option>
                        required={true}
                    </select>
            </div>
        </>
    )
}

export default CourseBox