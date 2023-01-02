// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

// Função ajudante para organização da árvore binária
function helper(nums: number[], left: number, right: number): TreeNode | null {
    // Retornar nulo como forma de captura de erros
    if (left > right) {
        return null;
    }

    // Encontrar o meio do array e criar um novo nó para ele (raiz da árvore)
    let meio: number = Math.floor((left + right) / 2);
    let raizArvore: TreeNode = new TreeNode(nums[meio]);

    // Dividir o array na parte esquerda (do extremo esquerdo até antes do meio)
    raizArvore.left = helper(nums, left, meio - 1);

    // Dividir o array na parte esquerda (do extremo esquerdo até antes do meio)
    raizArvore.right = helper(nums, meio + 1, right);

    // Retornar a árvore binária de pesquisa
    return raizArvore;
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
    // Caso o array submetido seja nulo, retornar nulo
    if (nums.length === 0) {
        return null;
    }

    const Tree: TreeNode | null = helper(nums, 0, nums.length - 1);

    return Tree;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));