// console.log('hello world')

const list = document.getElementById('list')

list.addEventListener('click', (e) => {
    console.dir(e.target)
    if (e.target.matches('li')) {
        e.target.style.backgroundColor = "red"

        if (e.target.
            textContent == 'Php') {
            e.target.style.backgroundColor = "blue"
        }



    }

})

const addElement = () => {

    const newElement = document.createElement('li')
    newElement.textContent = 'New Element'
    list.appendChild(newElement)

}