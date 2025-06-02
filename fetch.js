  // card
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
        const limitedData = data.slice(0, 50);
        // Generate HTML for each albumId and URL
        const content = limitedData.map(photo => 
            `<div class="card" style="width: 18rem;text-align:center;float:left; margin :10px ;height:400px">
             <img src=${`https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmV8ZW58MHx8MHx8fDA%3D`} class="card-img-top" alt="..." />
             <div class="card-body">
             <h5 class="card-title">AblumID : 2 : ${photo.id}</h5>
             <p class="card-text">Email : ${photo.email}</p>
             <p class="card-text"Street : >Street : ${photo.address.street}</p>
             <h5 class="card-text">Zipcode : ${photo.address.zipcode}</h5>
             </div>
        </div>`
        ).join("");

        // Set the generated HTML to the element with ID 'data'
        document.getElementById("write").innerHTML = content;
    })
