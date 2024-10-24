let money = prompt("Ваш бюджет на месяц"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

appData = {
    cash:money,
    expenses:{},
    optionalExpenses:{},
    income:[],
    timeData: time,
    saving:false
    
}
let firstAnswer = prompt("Введите обязательную статью расходов в этом месяце", "");
let seconAnswer = +prompt("Во сколько обойдется?", "")
appData.expenses.firstAnswer = seconAnswer;
alert(appData.cash / 30)