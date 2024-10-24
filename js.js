let money = +prompt("Ваш бюджет на месяц"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

appData = {
    cash:money,
    expenses:{},
    optionalExpenses:{},
    income:[],
    timeData: time,
    saving:false
    
}


for (i = 0; i < 2; i++){
    let firstAnswer = prompt("Введите обязательную статью расходов в этом месяце", "");
    let seconAnswer = prompt("Во сколько обойдется?", "")

    if (typeof(firstAnswer) === 'string' && typeof(firstAnswer) != null && typeof(seconAnswer) != null
        && firstAnswer != '' && seconAnswer != '' && firstAnswer.length < 50) {
        console.log('Done');
        appData.expenses[firstAnswer] = seconAnswer;
    } else {

    }
    
};
appData.moneyPerDay = appData.cash / 30;
alert("every day money: " + appData.moneyPerDay);

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
    console.log("fucking smrt boy (bustard)")
}