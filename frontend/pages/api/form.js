export default function handler(req, res){
    const body = req.body
    console.log('body: ', body)
    if(!body.diasemana || !body.hora || !body.hora2 || !body.limit){
        return res.status(400).json({data: 'Data not send'})
    }
    res.status(200).json({data:{
        diasemana: body.diasemana,
        idInicio: body.hora,
        idFim: body.hora2,
        limite: body.limit
    }})
}