//app to report which salesperson sold the most cars
const salesPersonReport = () => {
    mostSellingEmployee = ''
    const employees = []
    let employeeSales = []
    transactions.map(sale => {
        let name = sale.sales_agent.first_name
        if (!employees.includes(name)) {
            employees.push(name)
            employeeSales[employees.indexOf(name)] = 1
        } else {
            employeeSales[employees.indexOf(name)] += 1
        }
    })
    let mostSold = 0
    let mostSellingEmployeeIndex
    employeeSales.map((current, index) => {
        if (current > mostSold) {
            mostSold = current
            mostSellingEmployeeIndex = index
        }
    })
    mostSellingEmployee = employees[mostSellingEmployeeIndex]
    console.log(`${mostSellingEmployee} sold the most cars`)
}

salesPersonReport()