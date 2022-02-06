//on click event listner
document.getElementById("btn").addEventListener("click", function() {

    var new_name = document.getElementById("name").value
    console.log(new_name)
        //urls based on the name input
    const url1 = "https://api.genderize.io?name=" + new_name;
    const url2 = "https://api.agify.io/?name=" + new_name;
    const url3 = "https://api.nationalize.io/?name=" + new_name;

    var result = fetch(url1) // First request
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            showGender(data);
            return fetch(url2);
            // Second request
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            showAge(data);
            return fetch(url3); // Third request
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            showCountry(data);
            //     // Response of third API
        })
        .catch(function(error) {
            console.log('Error', error)
        })

});


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
//for image loading
async function getapi(url) {
    // Storing response
    const response = await fetch(url)
        // Storing data in form of JSON
    var data = await response.json()
    console.log(data)
    showImage(data)
}

window.addEventListener('load', (event) => {
    const url4 = "https://dog.ceo/api/breeds/image/random"
    getapi(url4)
    console.log('page is fully loaded');

});