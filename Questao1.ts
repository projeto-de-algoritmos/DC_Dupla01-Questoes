// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

// Função ajudante para organização da árvore binária
function helper(nums: number[], left:number, right:number): TreeNode | null {
    
    return null;
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
    // Caso o array submetido seja nulo, retornar nulo
    if (nums.length === 0) {
        return null;
    }

    // Pegar o índice do nó raiz da árvore, já que o problema trata apenas soluções de array ordenado
    const rootIndex: number = Math.floor(nums.length / 2);
    // Inicialiação da árvore binária de pesquisa
    let Tree: TreeNode = new TreeNode(nums[rootIndex]);
    


    return Tree;
};

console.log(sortedArrayToBST([-10,-5,0,5,9]));
