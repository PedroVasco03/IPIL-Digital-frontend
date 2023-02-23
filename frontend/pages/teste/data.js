
function Data(){
    const handleSubmit = async (event)=>{
        event.preventDefault()
        const data = {
            first: event.target.first.value,
            last: event.target.last.value
        }
        const JSONdata = JSON.stringify(data)
        const endpoint = '/api/form'

        const options = {
            method: 'POST',
            headders:{
                'Content-Type': 'application/json'
            },
            body: JSONdata,
        }
        const response = await fetch(endpoint, options)
        const result = await response.json()
        alert(`Is this your full name ${result.data}`)
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <label>FirstName</label>
            <input type={'text'} id='first' name="first" required/>
            <label>Second Name</label>
            <input type={'text'} id='last' name="last" required/>
            <button type="submit">submit</button>
        </form>
    )
}

export default Data