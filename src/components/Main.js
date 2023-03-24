import { useState } from 'react'
import styles from './Main.module.css'
import logo01 from '../img/logo01.png'

export default function Main(){

        let armazenarNumeros = []
        let data = new Date()

        const [mostrarResultado, setMostrarResultado] = useState('Gere uma sequência')
        const [mostrarHorario, setMostrarHorario] = useState('Sem horário')

        function gerarNumeros(){

            function ajusteMinutos(){
                return (data.getMinutes() < 10) ? `0${data.getMinutes()}` : data.getMinutes()
            }

            let numeroGerado = Math.ceil((Math.random()) * 60)
    
            if(armazenarNumeros.includes(numeroGerado) === false && armazenarNumeros.length < 6 ){
                armazenarNumeros.push(numeroGerado)
                gerarNumeros()

            } else if(armazenarNumeros.includes(numeroGerado) === true && armazenarNumeros.length < 6){
                gerarNumeros()

            } else{
                setMostrarResultado(armazenarNumeros.sort((a, b) => a - b).join(' - '))
                setMostrarHorario(`${data.getHours()}:${ajusteMinutos()}`) 
            }   
        } 

    return(
        <div className={styles.containerNativo}>
            <div className={styles.containerElementos}>
                <img src={logo01} alt="Logo da Megasena" className={styles.logo}></img>
                <h1 className={styles.frase}>Números gerados: </h1>
                <h3 className={styles.resultado}>{mostrarResultado}</h3>
                <button className={styles.btn} onClick={gerarNumeros}>Gerar números</button>
                <h5 className={styles.horario}>Números gerados às: {mostrarHorario}</h5>
            </div>
        </div>
    )
}    