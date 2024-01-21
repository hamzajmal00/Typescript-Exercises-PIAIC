"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guestList = ['hamza', 'ali', 'areeb', 'atif'];
for (var i = 0; i < guestList.length; i++) {
    var guest = guestList[i];
    console.log('Dear', guest + ',', 'You are cordially invited to dinner at my place. I would be honored to have your presence.');
}
guestList[guestList.indexOf('ali')] = 'ajmal';
for (var i = 0; i < guestList.length; i++) {
    var guest = guestList[i];
    console.log('Dear', guest + ',', 'You are cordially invited to dinner at my place. I would be honored to have your presence.');
}
