//app to return html elements
const createpelement = (content) => {
    const element = document.createElement('p')
    element.textContent = content
    return element
}