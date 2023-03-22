export default function Main(){
    
    let numbers = []

    let steps = () =>{

        let newNumber = Math.floor((Math.random())*61)
    
        if(numbers.includes(newNumber) === false && numbers.length < 6 ){
            numbers.push(newNumber)
            steps()
        } else if(numbers.includes(newNumber) === true && numbers.length < 6){
            steps()
        } else{
            console.log('Fim da criação de números') 
            console.log(numbers.sort((a, b) => a - b).join(', '))
        } 
    }

    steps()
    
    return(
        <>
        {numbers.join(', ')}
        </>
    )
}