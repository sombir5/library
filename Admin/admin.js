let form = document.getElementById("form")
form.addEventListener("submit", bookAdded);


async function bookAdded() {
    try { 
     let res = await fetch("http://localhost:3000/books", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         first_name: document.getElementById("fname").value,
         last_name: document.getElementById("lname").value,
         id: +document.getElementById("id").value,
       }),
     });
                    
        })
    } catch (error) {
        console.log(error)
    }
}