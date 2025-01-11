const handle = (e) => {
    e.preventDefault();

    const name = e.target.emon.value
    const sumon = e.target.sumon.value
    if (
        sumon == ""
    ) {
        alert("Please enter your name and email")
    }
    else {
        alert("Thank you for your submission")
    }
}