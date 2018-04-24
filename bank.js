//app to report the most used bank
const bankReport = () => {
    mostUsedBank = ''
    const banks = []
    let bankUsed = []
    transactions.map(sale => {
        let name = sale.credit.credit_provider
        if (!banks.includes(name)) {
            banks.push(name)
            bankUsed[banks.indexOf(name)] = 1
        } else {
            bankUsed[banks.indexOf(name)] += 1
        }
    })
    let mostSold = 0
    let mostUsedBankIndex
    bankUsed.map((current, index) => {
        if (current > mostSold) {
            mostSold = current
            mostUsedBankIndex = index
        }
    })
    mostUsedBank = banks[mostUsedBankIndex]
    return `${mostUsedBank} was the most used bank`
}