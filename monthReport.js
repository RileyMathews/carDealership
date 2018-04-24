//generate report on which month sold the most cars

const monthReport = () => {
    let bestMonthIndex = 0
    let bestMonth = ''
    let monthSales = [0,0,0,0,0,0,0,0,0,0,0,0]
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
    transactions.forEach(transaction => {
        month = parseInt(transaction.purchase_date.slice(5, 7))
        monthSales[month - 1] += 1
    });
    lastMonth = 0
    monthSales.map((value, index) => {
        if (value > lastMonth) {
            bestMonthIndex = index
            lastMonth = value
        } 
    })
    bestMonth = months[bestMonthIndex]
    return `The best month of sales was ${bestMonth}`
}

