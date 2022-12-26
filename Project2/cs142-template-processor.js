'use strict';

class Cs142TemplateProcessor {
    constructor(template) {this.template = template;}

    fillIn(dictionary) {
        let str = this.template;
        for (let key in dictionary) {
            let re = new RegExp('\\{\\{' + key + '\\}\\}');
            str = str.replace(re, dictionary[key]);
        }
        str.replace(new RegExp('\\{\\{w+\\}\\}', "g"), "");
        return str;
    }
}