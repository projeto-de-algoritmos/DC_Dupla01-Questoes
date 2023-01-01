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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    // Caso o array submetido seja nulo, retornar nulo
    if (nums.length === 0) {
        return null;
    }
    
    // Inicialiação da árvore binária de pesquisa
    let Tree: TreeNode = new TreeNode();

    nums.map((num, index) => {
        // Para o primeiro elemento da lista
        if(index === 0) {
            Tree.val = num;
            return;
        }
        // Balancear a árvore para cada novo número
    });
    
    return Tree;
};

console.log(sortedArrayToBST([-10,-5,0,5,9]));
