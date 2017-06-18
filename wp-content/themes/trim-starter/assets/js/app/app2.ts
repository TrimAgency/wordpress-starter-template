export class HappyClass {
    public talk: string;

    constructor(message: string) {
        this.talk = message;
    }

    say() {
        console.log(this.talk);
    }
}
