function beautifulArray(n: number): number[] {
    
    // Criar um array que irá conter as repostas 
    let resposta: number[] = [];
    resposta.push(1);
    
    // Enquanto o array resposta ainda tenha menos elementos que o necessário
    while (resposta.length < n) {
        let tmp: number[] = [];

        /*  Para cada elemento dentro do array inicial ([1]), gerar um par de subarrays
            Um contendo números ímpares e outro, números pares.
            Número ímpar = (2 * n) - 1
            Número par = 2 * n 
        */
        resposta.map((elemento: number) => {
            let novoElemento = (elemento * 2) - 1;
            if (novoElemento <= n) {
                tmp.push(novoElemento);
            }
        });

        resposta.map((elemento: number) => {
            let novoElemento = 2 * elemento;
            if (novoElemento <= n) {
                tmp.push(novoElemento);
            }
        });

        resposta = tmp;
    }

    return resposta;
}

console.log(beautifulArray(5));