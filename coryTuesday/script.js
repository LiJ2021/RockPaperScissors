//querySelector helps us find whatrever we are looking for on the webpage, which is a document. So onthe inspect tool we would enter
document.querySelector(/*whatever we are looking for in the coument */)

function changeWords() {
    document.querySelector('p').innerHTML = "Something Else"
}

//finds teh p tag, getw whats inside the HTML and update it to what was assigned on line 5

function submitForm() {
    let name = document.querySelector('#name').value
    alert("Your name is: " + name)
    let position = document.querySelector('input [name=position]:checked').value
    let languages = document.querySelector('input[name=language]:checked').value
    let elements = document.querySelectorAll('input [name=language]:checked')

    let languages =[]
    elements.forEach(function(element) {
        languages.push(element.value)
    })


    alert(`Your name is: ${name} and you are a ${position} and you like ${languages}`)
}

//query selector does a funny thing where it gets the first value then stops, so if you have checkboxes it wont return multiple selections.  How do we get around that?  document.querySelectorAll()