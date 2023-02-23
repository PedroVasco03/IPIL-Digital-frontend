import { useState } from "react"
import { Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
const listDay = []
function ModalEdit({show, closed}){
    const diaSemana = ['Segunda','Terça','Quarta','Quinta','Sexta']
    const [check, setCheck] =useState(
        new Array(diaSemana.length).fill(false)
    )
    
    const setDay = (item, index)=>{
        if(!check[index]){
            listDay.push(item)
            console.log(listDay)
        }
        else{
            const number = listDay.indexOf(item)
            listDay.splice(number, 1)
            console.log(listDay)
        }
    }
    const handleOnChange = (position)=>{
        const updateCheck = check.map((item, index)=>{
            if(position === index){
                return !item
            }
            else{
                return item
            }
        })
        setCheck(updateCheck)
        console.log(updateCheck)
    }
    const hora = ['7:00','7:30','8:00','8:30','9:00','9:30','10:00','10:30','11:00','11:30','12:00']
    return(
        <div>
            <Modal isOpen={show} onClosed={closed}>
                <ModalHeader toggle={closed}>
                    <h2>Horário de Atendimento</h2>
                    
                </ModalHeader>
                <ModalBody>
                    <Label>Dia de atendimento:</Label>
                    {diaSemana.map((item, index)=>{
                        return(
                            <FormGroup key={index}>
                                <Label className="mx-1">{item}</Label> 
                                <Input checked={check[index]} onChange={()=>handleOnChange(index)} onClick={()=>{setDay(item, index)}} type="checkbox" className="mx-1"></Input> 
                            </FormGroup>
                        )
                    })}
                    <Label for="attend">Hora de atendimento início:</Label>
                    <Input id="attend" type="select">
                    {hora.map((item, index)=>{
                        return(
                            <option key={index} value={index}>{item}</option>
                        )
                    })}
                    </Input>
                    <Label for="attend2">Hora de atendimento fim:</Label>
                    <Input id="attend2" type="select">
                    {hora.map((item, index)=>{
                        return(
                            <option key={index} value={index}>{item}</option>
                        )
                    })}
                    </Input>
                   <Label for="limit">Limite de Pessoas:</Label>
                   <Input id="limit" type="number"/>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger">Eliminar</Button>
                    <Button color="danger">Salvar alterações</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
export default ModalEdit