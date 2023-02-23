import { useState } from "react"
import { Accordion, AccordionHeader, AccordionBody,AccordionItem, Card, CardBody, CardFooter, Button } from "reactstrap"
function AccordionComponent(){
    const [open, setOpen] = useState('1')
    const toggle = (id)=>{
        if(open == id){
            setOpen()
        }
        else{
            setOpen(id)
        }
    }
    return(
        <div>
             <Accordion className="w-100" open={open} toggle={toggle}>
                <AccordionItem>
                    <AccordionHeader targetId="1">Dados Pessoais</AccordionHeader>
                        <AccordionBody accordionId="1">
                          <Card>
                                <CardBody>
                                    <p>mostrar dados</p>
                                </CardBody>
                                <CardFooter className="bg-white">
                                    <Button color="primary" style={{float:'right'}}>Editar</Button>
                                </CardFooter>
                          </Card>
                        </AccordionBody>
                </AccordionItem>
            </Accordion>
            <Accordion open={open} toggle={toggle} className='py-2'>
                <AccordionItem>
                    <AccordionHeader targetId="2"></AccordionHeader>
                    <AccordionBody accordionId="2">
                        
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
export default AccordionComponent