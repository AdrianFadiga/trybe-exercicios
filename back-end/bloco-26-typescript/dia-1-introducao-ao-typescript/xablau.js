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
console.log(daysOfTheWeek);
