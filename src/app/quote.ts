export class Quote {
    showDetails: boolean;
    up:boolean;
    down:boolean;
    constructor(public q:string,public author:string,public sub:string, public upVote:number, public downVote:number){
        this.showDetails= false;
    }
}
