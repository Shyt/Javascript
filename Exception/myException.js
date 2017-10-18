//Отлов ошибок

var calculate = function(n) {
    if (n > 10) throw new Error("Fak");
    return n + 10;
}

try {
    calculate(20);
} catch (e) { //Сокращенно error
    console.log("Ошибка: " + e.message);
}