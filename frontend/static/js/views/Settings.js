import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.seTitle("Settings")
    }

    async getHTML() {
        return /*html*/`
        <h1>Settings</h1>
        <p>
            Configurantions stuff
        </p>
        <p>
            Lorem ipsum dolor sit amet.
        </p>
        <p>
            Lorem, ipsum dolor.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
           
        `
    }
}