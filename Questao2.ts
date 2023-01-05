// Retornar a subsequência de números de um array que constitui a maior soma
function maxSubArray(nums: number[]): number {

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

    return maxEsquerda;
}

let nums: number[] = [-2, -1];
console.log(`Exited with : ${maxSubArray(nums)}`);