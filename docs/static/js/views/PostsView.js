import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.seTitle("Viewing Post")
    }

    async getHTML() {
        return /*html*/`
            <h1>Post View</h1>
            <p>Viewing a post</p>
        `
    }
}