import { useState } from 'react'

export default function Main(){

        let armazenarNumeros = []

        const [mostrarResultado, setMostrarResultado] = useState()

        function gerarNumeros(){

            let numeroGerado = Math.ceil((Math.random()) * 60)
    
            if(armazenarNumeros.includes(numeroGerado) === false && armazenarNumeros.length < 6 ){
                armazenarNumeros.push(numeroGerado)
                gerarNumeros()

            } else if(armazenarNumeros.includes(numeroGerado) === true && armazenarNumeros.length < 6){
                gerarNumeros()

            } else{
                setMostrarResultado(armazenarNumeros.sort((a, b) => a - b).join(', '))
            }       
        } 

    return(
        <>
          <h1>Números gerados: </h1>
          <h3>{mostrarResultado}</h3>
          <button className="btn" onClick={gerarNumeros}>Gerar números</button>
        </>
    )
}    