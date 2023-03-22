export default function Main(){
    
    let armazenarResultado = []

    function gerarNumeros(){

        let novoNumero = Math.ceil((Math.random()) * 60)
    
        if(armazenarResultado.includes(novoNumero) === false && armazenarResultado.length < 6 ){
            armazenarResultado.push(novoNumero)
            gerarNumeros()
        } else if(armazenarResultado.includes(novoNumero) === true && armazenarResultado.length < 6){
            gerarNumeros()
        } else{
            console.log('Fim da criação de números')
        } 
    }
    //gerarNumeros()
    return(
        <>
          <h1>Números gerados: </h1>
          {armazenarResultado.sort((a, b) => a - b).join(', ')}
          <button onClick={gerarNumeros}>Gerar números</button>
        </>
    )
}