'use strict';

function greeter(person: string) {
    return "Hello, " + person;
}

var user = "Проверка";

document.body.innerHTML = greeter(user);