function personagemMorreu(dano, saude){
    let resultado = 0

    if(dano>=saude){
        resultado = 1
        return resultado
    }

    return resultado
}
console.log(personagemMorreu(12, 40))