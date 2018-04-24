//app to report which employee had the most profit
const employeeProfitReport = () => {
    mostEmployeeProfit = ''
    const employees = []
    let employeeProfit = []
    transactions.map(sale => {
        let name = sale.sales_agent.first_name
        if (!employees.includes(name)) {
            employees.push(name)
            employeeProfit[employees.indexOf(name)] = sale.gross_profit
        } else {
            employeeProfit[employees.indexOf(name)] += sale.gross_profit
        }
    })
    let bestProfit = 0
    let mostSellingEmployeeIndex
    employeeProfit.map((current, index) => {
        if (current > bestProfit) {
            bestProfit = current
            mostSellingEmployeeIndex = index
        }
    })
    mostEmployeeProfit = employees[mostSellingEmployeeIndex]
    return `${mostEmployeeProfit} had the most profit`
}

