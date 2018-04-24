//app to report most popular car sold
const popularCarReport = () => {
    mostPopularCar = ''
    const cars = []
    let carSales = []
    transactions.map(sale => {
        let car = sale.vehicle.model
        if (!cars.includes(car)) {
            cars.push(car)
            carSales[cars.indexOf(car)] = 1
        } else {
            carSales[cars.indexOf(car)] += 1
        }
    })
    let mostSold = 0
    let mostPopularCarIndex
    carSales.map((current, index) => {
        if (current > mostSold) {
            mostSold = current
            mostPopularCarIndex = index
        }
    })
    mostPopularCar = cars[mostPopularCarIndex]
    return `${mostPopularCar} was the most popular car`
}
