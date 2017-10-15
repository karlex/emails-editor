import * as angular from "angular";
import "./emails-editor.css";
import templateString from "./emails-editor.html";

module EmailsEditor {
    
    export const moduleName = "emailsEditor";

    // https://www.w3.org/TR/html/sec-forms.html#email-state-typeemail
    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    function emailsEditor(): angular.IDirective {
        return {
            replace: true,
            //templateUrl: "/components/emails-editor/emails-editor.html",
            template: templateString,
            scope: {
                instance: "=",
            },
            link: (scope: IScope, element, attrs) => {
                scope.emailList = [];

                scope.instance = {
                    addEmail: (email) => scope.addEmail(email),
                    count: () => scope.emailList.length,
                };

                scope.addEmail = (email) => {
                    if (typeof email != "string" || email.length <= 0) {
                        return;
                    }

                    scope.emailList.push({
                        email: email,
                        valid: emailRegExp.test(email),
                    });
                };

                scope.addEmailFromInput = () => {
                    scope.addEmail(scope.newEmail);
                    scope.newEmail = "";
                };

                scope.onInputKeyPress = (event) => {
                    switch (event.which) {
                        case 13:
                        case 44:
                            event.preventDefault();
                            scope.addEmailFromInput();
                        break;
                    }
                };

                scope.onInputPaste = (event: ClipboardEvent) => {
                    scope.addEmail(event.clipboardData.getData("text"));
                    event.preventDefault();
                };

                scope.removeEmailByIndex = (index) => scope.emailList.splice(index, 1);
            },
        };
    };

    interface IScope extends angular.IScope {
        instance: IEmailsEditorInstance,
        newEmail: string;
        emailList: {
            email: string; 
            valid: boolean
        }[];
        onInputKeyPress(event: JQueryKeyEventObject): void;
        onInputPaste(event: ClipboardEvent): void;
        addEmail(email: string): void;
        addEmailFromInput(): void;
        removeEmailByIndex(index: number): void;
    }

    export interface IEmailsEditorInstance {
        addEmail(email: string): void;
        count(): number;
    }

    angular.module(moduleName, []).directive("emailsEditor", emailsEditor);

}

export default EmailsEditor;