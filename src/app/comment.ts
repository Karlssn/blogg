export class Comment{
    PartitionKey:string;
    RowKey:string;
    Person:string;
    Timestamp:string;
    constructor(Pkey,Rkey,Person,time){
        this.PartitionKey = Pkey;
        this.RowKey = Rkey;
        this.Person = Person;
        this.Timestamp = time;
    }
}