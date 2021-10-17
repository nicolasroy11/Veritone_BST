// This solution does not get run.
// This is an alternative to the regular solution. Instead of creating a hash, the deepest node is calculated during value insertion and is returned directly.
// This needs to be adjusted to return all values at the deepest level instead of only the last one processed.

class BSTNode {
    public data: number;
    public left: BSTNode | undefined;
    public right: BSTNode | undefined;
    constructor(data: number) {
        this.data = data;
    }

    public insert(data: number, deepestNode?: TreeDepthMaxima) {
        this._insert(data, 0, deepestNode);
    }

    private _insert(data: number, depth: number, deepestNode?: TreeDepthMaxima) {
        if (data <= this.data && this.left) {
            this.left._insert(data, ++depth, deepestNode);
        } else if (data <= this.data) {
            this.left = new BSTNode(data);
            deepestNode && (++depth, deepestNode.deepest = this.left.data, deepestNode.depth = depth);
        } else if (data > this.data && this.right) {
            this.right._insert(data, ++depth, deepestNode);
        } else if (data > this.data) {
            this.right = new BSTNode(data);
            deepestNode && (++depth, deepestNode.deepest = this.right.data, deepestNode.depth = depth);
        }
    }
}

class TreeDepthMaxima {
    deepest: number[] | number | undefined;
    depth: number | undefined;
}

export default class Tree {
    private rootNode: BSTNode | null;
    private deepestNode = new TreeDepthMaxima();
    constructor(data: number[]) {
        if (data.length > 0) {
            this.rootNode = new BSTNode(<number>data.shift());
            data.forEach((elem: number) => (<BSTNode>this.rootNode).insert(elem, this.deepestNode));
            console.log(this.deepestNode);
        } else {
            this.rootNode = null;
        }
    }

    public getTree(): BSTNode | null {
        return this.rootNode;
    }

    public getTreeDepthMaxima(): TreeDepthMaxima {
        return this.deepestNode;
    }
}
