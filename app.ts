import * as angular from "angular";

import "./index.css";

import MainCtrl from "./mainCtrl";

import EmailsEditor from "./components/emails-editor/emails-editor";

const app = angular.module("emailsEditorApp", [EmailsEditor.moduleName]);

app.controller("mainCtrl", MainCtrl);