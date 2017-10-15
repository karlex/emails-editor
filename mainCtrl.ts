import EmailsEditor from "./components/emails-editor/emails-editor";

export default class MainCtrl {

    public emailsEditor: EmailsEditor.IEmailsEditorInstance;

    constructor() {
        
    }

    public addRandomEmail() {
        const name = this.randomString("abcdefghijklmnopqrstuvwxyz1234567890", 10);
        
        this.emailsEditor.addEmail(`${name}@mail.ru`);
    }

    public showEmailsCount() {
        alert(this.emailsEditor.count());
    }

    private randomString(alphabet: string, length: number): string {
        let result = "";
        for (let i = 0; i < 10; i++) {
            result += alphabet[Math.floor(Math.random() * alphabet.length)];
        }
        return result;
    }
}