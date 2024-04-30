// Code EyesOnMe Component Here
export default  function EyesOnMe(){
const handleFocus=()=>{
    console.log("Good!");
}

const handleBlur = () =>{
    console.log("Hey! Eyes on me!")
}
const button = "Eyes on me !"
    return(
        
            <button onFocus={handleFocus} onBlur={handleBlur} >{button}</button>
        
    )
}
