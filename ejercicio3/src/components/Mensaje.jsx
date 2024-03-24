import { useState } from "react";

const Mensaje = ({mensaje})=>{
    const [nota, setNota] = useState("")

    return(
        <>
            <h1>Hello {mensaje}{nota}!</h1>
            <button onClick={()=>{setNota(' (from changed state)')}}>Click aquí</button>
        </>
    );
}

export default Mensaje