# Travel adventure blog

## To run the project
This project depends on Node and Angular.
Firstly, run:
```
npm install
```

The server will use what is located in the dist folder. This folder gets added when you build a angular project. 

Use the following to build the project:
```
ng b --prod
```
And to start the server: 

```
npm start
```
## How the files will be displayed
Once the server is up and running you can add files to the dist/assets folder. The server loads markdown files in ascending order based of the title. It is therefore important to name the files accordingly:
```
1.md
3.md
2.md
```
Would show the files in the following order:
```
3.md
2.md 
1.md
```
## Comment section
This project has a commentsection. All comments are stored in a azure storage. To make this work for a local machine, a enviormental variable needs to be [set](https://azure.github.io/azure-storage-node/TableService.html).

The structure of the storage is the following:
```
PartitionKey: The file the comment is attached upon
RowKey: The text of the comment
Timestamp : The current time
Person: Name of person
```