"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name = 'Hamza Ajmal';
console.log(name.toUpperCase());
console.log(name.toLowerCase());
function TitleCase(str) {
    str = str.toLowerCase();
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}
console.log(TitleCase('hi my name is hamza ajmal'));
