document.getElementById("btn").addEventListener("click", function() {

    var new_name = document.getElementById("name").value
    console.log(new_name)

    const url1 = "https://api.genderize.io?name=" + new_name;
    const url2 = "https://api.agify.io/?name=" + new_name;
    const url3 = "https://api.nationalize.io/?name=" + new_name;

    getapi1(url1)
    getapi2(url2)
    getapi3(url3)

});
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