window.onload = function() {
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
                profileImage.setAttribute("src", "login.png");
                postHeaderUser.appendChild(profileImage);
                postHeaderUser.appendChild(document.createTextNode(" " + json[i].username));
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
        })
}