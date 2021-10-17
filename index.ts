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
        if (data < this.data && this.left) {
            this.left._insert(data, ++depth, depthHash);
        } else if (data < this.data) {
            this.left = new BSTNode(data);
            depthHash && (depthHash[this.left.data] = ++depth);
        } else if (data > this.data && this.right) {
            this.right._insert(data, ++depth, depthHash);
        } else if (data > this.data) {
            this.right = new BSTNode(data);
            depthHash && (depthHash[this.right.data] = ++depth);
        }
    }
}

class TreeDepthMaxima {
    depth: number = 0;
    values: any[] = [];
}

class Tree {
    private rootNode: BSTNode | null;
    private depthHash: any = {};
    constructor(data: number[]) {
        if (data.length > 0) {
            this.depthHash[data[0]] = 0;
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
        let maxDepth = 0, maxValues: any[] = [];
        for (let key in this.depthHash) {
            if (maxDepth <= this.depthHash[+key]) {
                maxDepth = +this.depthHash[key];
                maxValues.push(key);
            }
        }
        return { depth: maxDepth, values: maxValues };
    }
}

const tree = new Tree([12, 11, 90, 82, 7, 9, -99, 0, 7, 88, 4]);

console.log(JSON.stringify(tree, null, 4));
console.log(tree.getTreeDepthMaxima());
