"use strict";
var months;
(function (months) {
    months[months["janeiro"] = 1] = "janeiro";
    months[months["fevereiro"] = 2] = "fevereiro";
    months[months["mar\u00E7o"] = 3] = "mar\u00E7o";
    months[months["abril"] = 4] = "abril";
    months[months["maio"] = 5] = "maio";
    months[months["junho"] = 6] = "junho";
    months[months["julho"] = 7] = "julho";
    months[months["agosto"] = 8] = "agosto";
    months[months["setembro"] = 9] = "setembro";
    months[months["outubro"] = 10] = "outubro";
    months[months["novembro"] = 11] = "novembro";
    months[months["dezembro"] = 12] = "dezembro";
})(months || (months = {}));
;
const janeiro = months.janeiro;
console.log(janeiro);
