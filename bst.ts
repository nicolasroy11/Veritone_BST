class BSTNode {
    constructor(data: number) {
        this.data = data;
        this.left = undefined;
        this.right = undefined;
    }
    public data: number;
    public left: BSTNode | undefined;
    public right: BSTNode | undefined;
    public insert(data: number, depthHash?: any) {
        this._insert(data, 0, depthHash);
    }

    private _insert(data: number, depth: number = 0, depthHash?: any) {
        if (data <= this.data && this.left) {
            this.left._insert(data, ++depth, depthHash);
        } else if (data <= this.data) {
            this.left = new BSTNode(data);
            depthHash && (++depth, depthHash[depth] ? depthHash[depth].push(this.left.data) : depthHash[depth] = [this.left.data]);
        } else if (data > this.data && this.right) {
            this.right._insert(data, ++depth, depthHash);
        } else if (data > this.data) {
            this.right = new BSTNode(data);
            depthHash && (++depth, depthHash[depth] ? depthHash[depth].push(this.right.data) : depthHash[depth] = [this.right.data]);
        }
    }
}

class TreeDepthMaxima {
    deepest: number[] | number | undefined;
    depth: number | undefined;
}

export default class Tree {
    private rootNode: BSTNode | null;
    private depthHash: { [depth: number]: any } = {};
    constructor(data: number[]) {
        if (data.length > 0) {
            this.depthHash[0] = [data[0]];
            this.rootNode = new BSTNode(<number>data.shift());
            data.forEach((elem: number) => (<BSTNode>this.rootNode).insert(elem, this.depthHash));
        } else {
            this.rootNode = null;
        }
    }

    public getTree(): BSTNode | null {
        return this.rootNode;
    }

    public getTreeDepthMaxima(): TreeDepthMaxima {
        if (!Object.keys(this.depthHash).length) return new TreeDepthMaxima(); 
        const deepestDepth = Object.keys(this.depthHash).sort((a: any, b: any) => b - a)[0];
        return {
            deepest: (this.depthHash[+deepestDepth].length > 1 ? this.depthHash[+deepestDepth] : this.depthHash[+deepestDepth][0]),
            depth: +deepestDepth
        };
    }
}
