import { CloseButton, Modal, ModalBody, ModalFooter, Button, ModalHeader } from "reactstrap"

function ModalNoSchedule({show, closed}){
    return(
        <Modal isOpen={show} onClosed={closed} centered={true}>
            <ModalHeader toggle={closed}>
                <h2>Aviso</h2>
            </ModalHeader>
            <ModalBody>
                <div>
                    Ainda não foi criado um Horário de Atendimento.
                </div>
            </ModalBody>
            <ModalFooter>
                <Button onClick={closed} color={'primary'}>Sim</Button>
            </ModalFooter>

        </Modal>
    )
}
export default ModalNoSchedule