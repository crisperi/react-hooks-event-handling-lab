// Code Keypad Component Here

function Keypad (){
const keyPadEvent = (e) =>{
    console.log('Entering password...')
}


    return (
        <>
            <form>
                <input type="password" name="passsword" onChange={keyPadEvent} />
            </form>
        </>
    )
}

export default Keypad;