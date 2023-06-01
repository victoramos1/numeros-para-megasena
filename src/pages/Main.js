import { useState } from 'react'
import './Main.css'
import logo01 from '../img/logo01.png'

function Main() {

  let armazenaNumeros = []
  let data = new Date()
  const [mostraResultado, setMostraResultado] = useState(["Gere uma sequência"])
  const [mostraHorario, setMostraHorario] = useState('Sem horário')

  function geraNumero() {
    let numeroGerado = Math.ceil((Math.random()) * 60)
    armazenaNumero(numeroGerado)
  }

  function armazenaNumero(numeroGerado) {
    if (armazenaNumeros.includes(numeroGerado) === false && armazenaNumeros.length < 6) {
      armazenaNumeros.push(numeroGerado)
      geraNumero()
    } else if (armazenaNumeros.includes(numeroGerado) === true && armazenaNumeros.length < 6) {
      geraNumero()
    } else {
      setMostraResultado(armazenaNumeros.sort((a, b) => a - b))
      console.log(typeof mostraResultado)
      ajustaMinutos()
      setMostraHorario(`${data.getHours()}:${ajustaMinutos()}`)
    }
  }

  function ajustaMinutos() {
    return (data.getMinutes() < 10) ? `0${data.getMinutes()}` : data.getMinutes()
  }

  return (
    <div className="containerGeral">
      <div className="containerElementos">
        <img src={logo01} alt="Logo da Megasena" className="logo"></img>
        <h1 className="frase">Números gerados: </h1>
        <div className="alinhamentoResultado">{mostraResultado.map((item, indice) => (
          <div className={mostraResultado.includes("Gere uma sequência") ? "semResultado" : "resultado"} key={indice}>{item}</div>
        ))}</div>
        <button className="btn" onClick={geraNumero}>Gerar números</button>
        <h5 className="horario">Números gerados às: {mostraHorario}</h5>
      </div>
    </div>
  )
}

export default Main