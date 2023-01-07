let solucao: number[] = [];

function buscaInsereBinario(nums: number[], l: number, r: number, num: number): void {

    if (l == r) {
        if (num <= nums[l]) {
            nums.splice(l, 0, num);
            solucao.unshift(l);
        } else {
            nums.splice(l+1, 0, num);
            solucao.unshift(l+1);
        }
        return;
    }

    // Encontra o meio do array
    const meio: number = Math.floor((r + l) / 2);
    
    if (num <= nums[meio]) {
        // Caso seja menor que o número no meio do array
        buscaInsereBinario(nums, l, meio, num);
    } else if (num > nums[meio]) {
        // Caso seja maior que o número no meio do array
        buscaInsereBinario(nums, meio+1, r, num);
    }

    return;
};

function countSmaller(nums: number[]): number[] {
    if(nums.length <= 1) return [0];
    
    let tmp: number[] = [];

    // Inserir o elmento mais à direita no array temporário
    tmp[0] = nums[nums.length-1];
    // Adicionar a quantidade 0 para o elemento mais à direita do array nums
    solucao.push(0);

    for (let i = nums.length - 2; i >= 0; i--) {
        buscaInsereBinario(tmp, 0, tmp.length - 1, nums[i]);
    }
    return solucao;
};