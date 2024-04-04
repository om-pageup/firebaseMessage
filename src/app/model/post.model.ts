export interface PostMessage{
    notification: {
        title: string;
        body: string;
    },

    to: string;
}