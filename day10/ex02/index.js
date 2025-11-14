export default async function main() {

    console.log('hello')

    var a = 1

    console.log(`a : ${a}`)
    a= a + 1
    console.log(`a : ${a}`)

    let b = 1
    b += 5
    console.log(`b : ${b}`)

    const c = 1
    // c += 1
    console.log(`c : ${c}`)
    
    let a1 = 1
    console.log(`a1: ${a1}`)
    {
        let a1 = 3
        a1 += 1 
        console.log(` a1: ${a1}`)
    }
    console.log(`a1: ${a1}`)
    
}