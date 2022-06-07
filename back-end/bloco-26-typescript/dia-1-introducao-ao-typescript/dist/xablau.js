"use strict";
var daysOfTheWeek;
(function (daysOfTheWeek) {
    daysOfTheWeek[daysOfTheWeek["segunda"] = 1] = "segunda";
    daysOfTheWeek[daysOfTheWeek["ter\u00E7a"] = 2] = "ter\u00E7a";
    daysOfTheWeek[daysOfTheWeek["quarta"] = 3] = "quarta";
    daysOfTheWeek[daysOfTheWeek["quinta"] = 4] = "quinta";
    daysOfTheWeek[daysOfTheWeek["sexta"] = 5] = "sexta";
    daysOfTheWeek[daysOfTheWeek["sabado"] = 6] = "sabado";
    daysOfTheWeek[daysOfTheWeek["domingo"] = 7] = "domingo";
})(daysOfTheWeek || (daysOfTheWeek = {}));
;
var arcoIrisColors;
(function (arcoIrisColors) {
    arcoIrisColors["blue"] = "azul";
    arcoIrisColors["green"] = "verde";
    arcoIrisColors["red"] = "vermelho";
})(arcoIrisColors || (arcoIrisColors = {}));
;
var functions;
(function (functions) {
    functions[functions["save"] = 1] = "save";
    functions[functions["print"] = 2] = "print";
    functions[functions["open"] = 3] = "open";
    functions[functions["visualize"] = 4] = "visualize";
    functions[functions["close"] = 5] = "close";
})(functions || (functions = {}));
;
var cardialPoints;
(function (cardialPoints) {
    cardialPoints["north"] = "n";
    cardialPoints["east"] = "e";
    cardialPoints["south"] = "s";
    cardialPoints["west"] = "w";
})(cardialPoints || (cardialPoints = {}));
;
