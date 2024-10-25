let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц");
    }
}

start();
appData = {
    cash:money,
    expenses:{},
    optionalExpenses:{},
    income:[],
    timeData: time,
    saving:true
    
}
function chooseExpenses(){
    for (i = 0; i < 2; i++){
        let firstAnswer = prompt("Введите обязательную статью расходов в этом месяце", "");
        let seconAnswer = prompt("Во сколько обойдется?", "")
    
        if (typeof(firstAnswer) === 'string' && typeof(firstAnswer) != null && typeof(seconAnswer) != null
            && firstAnswer != '' && seconAnswer != '' && firstAnswer.length < 50) {
            appData.expenses[firstAnswer] = seconAnswer;
        } else {
                i = i - 1;
        }
        
    }; 
}

function chooseOptExpenses(){
    for (i = 0; i < 3; i++){
        let answer = prompt("Статья необязательных расходов?");
    
    if (typeof(answer) === 'string' && typeof(answer) != null){
        appData.optionalExpenses[i] = answer;
    console.log(appData.optionalExpenses);
    }
}
}


function detectedDayBudget(){
    appData.moneyPerDay = (appData.cash / 30).toFixed();
    console.log(appData.moneyPerDay);
    detectedLevel()
    alert("every day money: " + appData.moneyPerDay);
}



function detectedLevel(){
    if(appData.moneyPerDay < 100) {
        console.log("fucking untermentsh");
    } 
    else if (appData.moneyPerDay < 100 && appData.moneyPerDay < 2000) {
        console.log("normis boy");
    }
    else if ( appData.moneyPerDay > 2000) {
        console.log("rich boy");
    }
    else {
        console.log("fucking smrt boy (bustard)");
    }
}

function checkSavings(){
    if (appData.saving == true) {
        let save = +prompt("How you save money?"),
            procent = +prompt("You procent?");

        appData.mouthIncome = save/100/12*procent;
        alert("You cash in you deposite: " + appData.mouthIncome);

    }
}

detectedDayBudget();
chooseExpenses();
//chooseOptExpenses();

checkSavings();
