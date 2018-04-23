//function to report total profit for 2017
const profitReport = () => {
    let profit = 0
    transactions.forEach(sale => {
        profit += sale.gross_profit
    });
    return profit
}

console.log(profitReport())