// Retorna o maior número entre 2
function max(x: number, y:number): number {
    return ((x > y) ? x : y);
}

// Retornar a subsequência de números de um array que constitui a maior soma
function maxSubArray(nums: number[]): number {
    // Caso o array seja de só um número
    if (nums.length == 1) {
        return nums[0];
    }

    let meio: number = Math.floor((nums.length - 1) / 2)

    let arrayEsquerda: number[] = nums.slice(0, meio + 1);
    let arrayDireita: number[] = nums.slice(meio + 1, nums.length);

    let maxEsquerda: number = Number.MIN_SAFE_INTEGER;
    let soma: number = 0;

    // Maior soma do array da esquerda
    for (let i: number = (arrayEsquerda.length - 1); i >= 0; i--) {
        soma += arrayEsquerda[i];
        if (soma > maxEsquerda) {
            maxEsquerda = soma;
        }
    }

        
    let maxDireita: number = Number.MIN_SAFE_INTEGER;
    soma = 0;
    
    // Maior soma do array da direita
    for (let i: number = 0; i < arrayDireita.length; i++) {
        soma += arrayDireita[i];
        if(soma > maxDireita){
            maxDireita = soma;
        }
    }
    
    let maxEsquerdaDireita = max(maxSubArray(arrayEsquerda), maxSubArray(arrayDireita));

    return max(maxEsquerdaDireita, maxEsquerda + maxDireita);;
}

let nums: number[] = [-2, -1];
console.log(`Exited with : ${maxSubArray(nums)}`);
