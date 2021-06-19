export class Outcome{
    amount: number;
    createdAt: Date;
    detail: String;
    outcomeId:number;
    updatedAt:Date;

    constructor(){
        this.outcomeId = 0;
        this.amount = 0;
        this.createdAt= new Date();
        this.detail ="";
        this.updatedAt= new Date();
    }

}