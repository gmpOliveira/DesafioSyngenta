function getCheapestHotel (input) {
    //separando argumentos
    var splitInput = input.split(":");
    var typeClient = splitInput[0];
    var dates = splitInput[1];
    var separateDates = dates.split(",");
   
    //contando os dias de hospedagem
    var weekCont = 0;
    var weekendCont = 0;

    for (let i = 0; i < separateDates.length; i++){
        let transformDay = new Date(separateDates[i]);
        let day = transformDay.getDay(); 
        if (day < 5 && day != 0){
            weekCont++;
        }
        else {
            weekendCont++;
        }
    };

    //verificar melhor hotel
    if (typeClient == "Regular"){

        var Lakewood = weekCont * 110 + weekendCont * 90;
        var Bridgewood = weekCont * 160 + weekendCont * 60;
        var Ridgewood = weekCont * 220 + weekendCont * 150;
        

        if (Lakewood < Bridgewood && Lakewood < Ridgewood){
            return "Lakewood";
        }
        if (Bridgewood < Lakewood && Bridgewood < Ridgewood){
            return "Bridgewood";
        }
        if (Ridgewood < Lakewood && Ridgewood < Bridgewood){
            return "Ridgewood";
        }
        if (Lakewood == Bridgewood){
            return "Bridgewood";
        }
        if (Lakewood == Ridgewood){
            return "Ridgewood";
        }
        if (Bridgewood == Ridgewood){
            return "Ridgewood";
        }
    } 

    if (typeClient == "Rewards"){ 
        var Lakewood = weekCont * 80 + weekendCont * 80;
        var Bridgewood = weekCont * 110 + weekendCont * 50;
        var Ridgewood = weekCont * 100 + weekendCont * 40;

        if (Lakewood < Bridgewood && Lakewood < Ridgewood){
            return "Lakewood";
        }
        if (Bridgewood < Lakewood && Bridgewood < Ridgewood){
            return "Bridgewood";
        }
        if (Ridgewood < Lakewood && Ridgewood < Bridgewood){
            return "Ridgewood";
        }
        if (Lakewood == Bridgewood){
            return "Bridgewood";
        }
        if (Lakewood == Ridgewood){
            return "Ridgewood";
        }
        if (Bridgewood == Ridgewood){
            return "Ridgewood";
        }
    }
}

function getInput () {
    //recebendo input pelo terminal
    var readline = require('readline');
    var input = "";

    var leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    leitor.question("Informe qual tipo de cliente você é e quais dias irá permanecer nos hotéis: \n", function(answer) {
        var input = answer;
        console.log(getCheapestHotel(input));
        leitor.close();
    });

}
getInput();

exports.getCheapestHotel = getCheapestHotel
