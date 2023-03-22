import { useState } from 'react'
import styles from './Main.module.css'
import logo01 from '../img/logo01.png'

export default function Main(){

        let armazenarNumeros = []
        let date = new Date()

        const [mostrarResultado, setMostrarResultado] = useState('Nenhuma sequência gerada')
        const [mostrarHorario, setMostrarHorario] = useState('Nenhum horário para mostrar')

        function gerarNumeros(){

            let numeroGerado = Math.ceil((Math.random()) * 60)
    
            if(armazenarNumeros.includes(numeroGerado) === false && armazenarNumeros.length < 6 ){
                armazenarNumeros.push(numeroGerado)
                gerarNumeros()

            } else if(armazenarNumeros.includes(numeroGerado) === true && armazenarNumeros.length < 6){
                gerarNumeros()

            } else{
                setMostrarResultado(armazenarNumeros.sort((a, b) => a - b).join(' - '))
                setMostrarHorario(`${date.getHours()}:${date.getMinutes()}`)
            }       
        } 

    return(
        <div className={styles.containerNativo}>
            <div className={styles.containerDosElementos}>
            <img src={logo01} alt="Logo da Megasena" className={styles.logo}></img>
            <h1>Números gerados: </h1>
            <h3 className={styles.resultado}>{mostrarResultado}</h3>
            <button className={styles.btn} onClick={gerarNumeros}>Gerar números</button>
            <h5 className={styles.horario}>Números gerados às: {mostrarHorario}</h5>
            </div>
        </div>
    )
}    