//print report to dom
const output = document.querySelector("#output")
const section = document.createElement("section")
section.appendChild(createpelement(profitReport()))
section.appendChild(createpelement(monthReport()))
section.appendChild(createpelement(salesPersonReport()))
section.appendChild(createpelement(employeeProfitReport()))
section.appendChild(createpelement(popularCarReport()))
section.appendChild(createpelement(bankReport()))

output.appendChild(section)
