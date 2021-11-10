import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.seTitle("Dashboard")
    }

    async getHTML() {
        return /*html*/`
        <h1>Wecolme back, User</h1>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, soluta.
        </p>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quo eveniet, quidem cumque nisi suscipit laudantium consectetur impedit, quasi perferendis unde distinctio accusamus dolores non perspiciatis asperiores esse optio ipsa!
        </p>
        <a href="/posts" data-link>View recent posts</a>            
        `
    }
}