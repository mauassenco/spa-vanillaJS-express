import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.seTitle("Posts")
    }

    async getHTML() {
        return /*html*/`
        <h1>Posts</h1>
        <p>
            You are viewing the posts
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, natus libero voluptate ea fugit repudiandae.
        </p>                  
        `
    }
}