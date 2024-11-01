window.onload = function() {
    const profilePhoto = document.getElementById('profile-photo');
    const dropdown = document.getElementById('dropdown');

    profilePhoto.addEventListener('click', function (event) {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        event.stopPropagation();
    });

    document.addEventListener('click', function (event) {
        if (!dropdown.contains(event.target) && event.target !== profilePhoto) {
            dropdown.style.display = 'none';
        }
    });
    
   
   fetch('posts.json')
        .then((response) => response.json())
        .then(json => {
            console.log(json);
            for (let i = 0; i < json.length; i++) {
                let main = document.getElementsByClassName("main")[0];
                let article = document.createElement("article");
                let postHeader = document.createElement("table");
                let postHeaderUser = document.createElement("td");
                let postHeaderDateTime = document.createElement("td");
                let postBody = document.createElement("p");
                let profileImage = document.createElement("img");
                let imgURL = json[i].image;

                article.className = "post";
                postHeader.setAttribute("width", "100%");
                postHeaderUser.style.setProperty("text-align", "left");
                postHeaderUser.style.setProperty("vertical-align", "middle");
                postHeaderDateTime.style.setProperty("text-align", "right");

                profileImage.id = "icon";
                profileImage.setAttribute("src", "Images/User.png");
                postHeaderUser.appendChild(profileImage);

                let usernameBold = document.createElement("strong");
                usernameBold.appendChild(document.createTextNode(" " + json[i].username));
                postHeaderUser.appendChild(usernameBold);
                
                postHeaderDateTime.appendChild(document.createTextNode(" " + json[i].datetime));

                postHeader.appendChild(postHeaderUser);
                postHeader.appendChild(postHeaderDateTime);

                article.appendChild(postHeader);
                if (imgURL != "") {
                    let imageP = document.createElement("p");
                    let image = document.createElement("img");
                    image.setAttribute("src", imgURL);
                    image.className = "post-img";
                    imageP.appendChild(image);
                    article.appendChild(imageP);
                }
                postBody.innerText = json[i].post;
                article.appendChild(postBody);

                main.appendChild(article);
            }
        });


    // read json from online.

    /*const endpoint = 'https://api.npoint.io/2092d03acd3b61433b4f'; // Use your actual JSON endpoint

    fetch(endpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(posts => {
            const main = document.getElementsByClassName("main")[0]; // Access the main container
            main.innerHTML = ""; // Clear existing content

            posts.forEach(post => {
                let article = document.createElement("article");
                let postHeader = document.createElement("table");
                let postHeaderUser = document.createElement("td");
                let postHeaderDateTime = document.createElement("td");
                let postBody = document.createElement("p");
                let profileImage = document.createElement("img");
                let imgURL = post.image; // Image URL from the post

                article.className = "post"; // Assign class to article
                postHeader.setAttribute("width", "100%"); // Set header width
                postHeaderUser.style.textAlign = "left"; // Align user info to the left
                postHeaderUser.style.verticalAlign = "middle"; // Center user info vertically
                postHeaderDateTime.style.textAlign = "right"; // Align date/time to the right

                profileImage.id = "icon"; // Assign ID to the profile image
                profileImage.setAttribute("src", "User.png"); // Set default profile image
                postHeaderUser.appendChild(profileImage); // Add image to user header

                const usernameBold = document.createElement("strong");
                usernameBold.appendChild(document.createTextNode(" " + post.username)); // Add username
                postHeaderUser.appendChild(usernameBold);

                postHeaderDateTime.appendChild(document.createTextNode(" " + post.datetime)); // Add datetime

                postHeader.appendChild(postHeaderUser); // Append user info to header
                postHeader.appendChild(postHeaderDateTime); // Append datetime to header
                article.appendChild(postHeader); // Append header to article

                if (imgURL) { // Check if image URL exists
                    let imageP = document.createElement("p");
                    let image = document.createElement("img");
                    image.setAttribute("src", imgURL); // Set the post image source
                    image.className = "post-img"; // Assign class to image
                    imageP.appendChild(image); // Append image to paragraph
                    article.appendChild(imageP); // Append paragraph to article
                }

                postBody.innerText = post.post; // Set the post text
                article.appendChild(postBody); // Append body text to article
                main.appendChild(article); // Finally, append the article to the main container
            });
        })
        .catch(error => console.error('Error fetching posts:', error));*/
}