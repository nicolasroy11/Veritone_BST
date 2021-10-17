# Veritone BST

## Testing
To see this bit of functionality in action, follow these steps:
1. clone and cd into the root of the project
2. npm start (this installs dependencies, compiles TypeScript, and fires up the very rudimentary Node server)
3. go to localhost:3000
4. to see a tree structure, use the following pattern: http://localhost:3000/tree?values=[12,11,90,32,8]
4. to see the maxima of the tree as required by the exercise, use the following pattern: http://localhost:3000/tree/max-depth?values=[12,11,90,32,8]

## Implementation of a binary search tree
The Tree class is instantiated with an array of integer values (ex: const tree = new Tree([12, 11, 10, 90, 82, 7, 9, 9])). To obtain the deepest value or values (several values can exist at the same depth), the user has to invoke the getTreeDepthMaxima() method on the tree instance. Example below:

        const tree = new Tree([12, 11, 10, 90, 82, 7, 9, 9]);
        console.log(tree.getTreeDepthMaxima());

I assumed the following: 
- all array values are numerical
- if two consecutive values are identical, the second value will be the left node of the first
