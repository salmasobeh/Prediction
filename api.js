// Defining async functions
//Gender
async function getapi1(url) {
    // Storing response
    const response = await fetch(url)
        // Storing data in form of JSON
    var data = await response.json()
    console.log(data)
    showGender(data)
}
//Age
async function getapi2(url) {
    const response = await fetch(url)
    var data = await response.json()
    console.log(data)
    showAge(data)
}
//Countries
async function getapi3(url) {
    const response = await fetch(url)
    var data = await response.json()
    console.log(data)
    showCountry(data)
}
//image
async function getapi4(url) {
    const response = await fetch(url)
    var data = await response.json()
    console.log(data)
    showImage(data)
}