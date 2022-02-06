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
//Show data functions
function showGender(data) {

    let gender = `${data.gender}`
    const genderstr = gender.charAt(0).toUpperCase() + gender.slice(1)
    document.getElementById("gender").innerText = "Gender: " + genderstr
}

function showAge(data) {
    let age = `${data.age}`
    document.getElementById("age").innerText = "Age: " + age
}

function showCountry(data) {

    let countries = data.country
    for (var i = 0; i < countries.length; i++) {
        let c = countries[i].country_id
        let k = i + 1
        document.getElementById("nationality").innerText += "Nationality(" + k++ + "):" + " " + c + "\n \n"
    }
}

function showImage(data) {
    let message = `${data.message}`
    document.getElementById("image").src = message
}

window.addEventListener('load', (event) => {
    const url4 = "https://dog.ceo/api/breeds/image/random"
    getapi4(url4)
    console.log('page is fully loaded');
});