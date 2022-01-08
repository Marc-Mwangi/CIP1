export class Quote {
    showDetails: boolean;
    constructor(public q:string,public author:string,public sub:string, public upVote:number, public downVote:number){
        this.showDetails= false;
    }
}
