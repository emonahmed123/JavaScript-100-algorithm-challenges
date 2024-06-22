// 1- Given a string ,reverse each word in the sentence


const str = "hello world  it very hard"

const ReversWord = (sentence) => {
    let worlds = sentence.split(' ')

    let result = [];

    for (let i = 0; i < worlds.length; i++) {
        let resultWorld = ''
        let world = worlds[i]

        for (let j = world.length - 1; j >= 0; j--) {

            resultWorld += world[j]
        }
        result.push(resultWorld)
    }

    console.log(result.join(' '))


}

const resultWorld = ReversWord(str)
