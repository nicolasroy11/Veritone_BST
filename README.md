# Veritone_BST

## Implementation of a binary search tree
The Tree class is instantiated with an array of integer values (ex: const tree = new Tree([12, 11, 10, 90, 82, 7, 9, 9])). To obtain the deepest value or values (several values can exist at the same depth), the user has to invoke the getTreeDepthMaxima() method on the tree instance. Example below:

        const tree = new Tree([12, 11, 10, 90, 82, 7, 9, 9]);
        console.log(tree.getTreeDepthMaxima());

I assumed the following:
        - all array values are numerical
        - if two consecutive values are identical, the second value will be the left node of the first

## Testing
To see this bit of functionality in action, follow these steps:
        - npm start
        - go to localhost:3000
