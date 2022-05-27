const calculateTip = (tipPercentage) => {
    const billTotal = Number(document.getElementById("billTotal").value)
    const tipAmount = billTotal * (tipPercentage / 100)
    const totalWTip = tipAmount + billTotal
    const nPeople = Number(document.getElementById("people").value)
    const totalPerPeople = totalWTip / nPeople
    const totalTipPerPeople = tipAmount / nPeople

    /////imprimir///////

    const amountPerson = document.getElementById("amount")
    const totalPerson = document.getElementById("total")

    amountPerson.value = totalTipPerPeople
    totalPerson.value = totalPerPeople

}