export interface MessaageResponse{
    collapseKey:string|undefined;
    from:string;
    messageId:string;
    notification:{
        body:string;
        title:string;
    }
}