import express from 'express';
import Tree from './bst';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the best BST builder API everz!');
});

app.get('/tree', (req, res) => {
    const arr: number[] = <number[]>(JSON.parse(req.query.values as string));
    const tree = new Tree(arr);
    res.json(tree.getTree());
});

app.get('/tree/max-depth', (req, res) => {
    const arr: number[] = <number[]>(JSON.parse(req.query.values as string));
    const tree = new Tree(arr);
    res.json(tree.getTreeDepthMaxima());
});

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
