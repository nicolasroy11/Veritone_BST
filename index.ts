import express from 'express';
import Tree from './bst';

const app = express();
app.set('json spaces', 6);
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the best BST builder API everz!');
});

app.get('/tree', (req, res) => {
    try {
        const arr: number[] = <number[]>(JSON.parse(req.query.values as string));
        const tree = new Tree(arr);
        res.json(tree.getTree());
    } catch {
        res.send('An error occured!');
    }

});

app.get('/tree/max-depth', (req, res) => {
    try {
        const arr: number[] = <number[]>(JSON.parse(req.query.values as string));
        const tree = new Tree(arr);
        res.json(tree.getTreeDepthMaxima());
    } catch {
        res.send('An error occured!');
    }
});

app.get('/tree/all', (req, res) => {
    try {
        const arr: number[] = <number[]>(JSON.parse(req.query.values as string));
        const tree = new Tree(arr);
        res.json({maxima: tree.getTreeDepthMaxima(), tree: tree.getTree()});
    } catch {
        res.send('An error occured!');
    }
});

app.get('*', function (req, res) {
    res.status(404).send('That path does not exist!');
});



app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
