var posts = [
    {
        src: "images/watch.jpg",
        credit: "Photo by David Bartus from Pexels",
        heading: "Watches",
        p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. " + 
        "Repellat tenetur explicabo ipsam quisquam! Ea dolore quae culpa nemo? Incidunt " +
        "voluptas in porro possimus, necessitatibus vero beatae dignissimos nulla quod est " +
        "enim saepe dolor, optio quisquam.",
        p2: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet " +
        "itaque quis molestiae neque aliquam id nobis possimus eos nemo pariatur."
    },
    {
        src: "images/watch2.jpg",
        credit: "Photo by Giallo from Pexels",
        heading: "Pocket Watches",
        p1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, cum itaque. Et esse similique obcaecati.",
        p2: "Autem eos soluta itaque esse aliquid odit. Nihil, cum itaque. Et esse similique obcaecati."
    },
    {
        src: "images/watch3.jpg",
        credit: "Photo by Matej from Pexels",
        heading: "Pocket Watches",
        p1: "Pariatur quam repellendus laborum incidunt vel inventore! Dolorum harum hic voluptatem perferendis obcaecati quaerat.",
        p2: "Qui ipsam facere adipisci, in amet exercitationem. Enim doloremque vero velit sint asperiores quidem. Mollitia nesciunt recusandae, soluta tenetur quod ratione!"
    },
    {
        src: "images/watch4.jpg",
        credit: "Photo by James Sutton from Pexels",
        heading: "Pocket Watches",
        p1: "Debitis, ut fugit reiciendis et sapiente quod. Nisi commodi doloremque unde nostrum laborum veritatis?",
        p2: "Architecto iure laboriosam suscipit cupiditate quod illum. Earum unde quidem maxime voluptatum consequatur architecto. " +
            "Qui repudiandae excepturi nemo veniam! Error exercitationem sapiente voluptatem fugit fuga recusandae."
    },
];

function changePost(id) {
    const pic = document.getElementsByTagName("img")[0];
    const caption = document.getElementsByTagName("figcaption")[0];
    const h2 = document.getElementById("change");
    const p1 = document.getElementsByTagName("p")[0];
    const p2 = document.getElementsByTagName("p")[1];
    const index = id-1;

    const data = posts[index];
    pic.src = data.src;
    caption.textContent = data.credit;
    h2.textContent = data.heading;
    p1.textContent = data.p1;
    p2.textContent = data.p2;    
}


function postComment() {
    const date = new Date();
    const name = document.getElementById("name");
    const content = document.getElementById("content");

    if (name.value === "" || content.value === "") {
        return;
    }

    if (content.value.length > 400) {
        var message = "Your message is too long..." +
            "Please shorten your message by " + (content.value.length - 400) + " words."; 
        alert(message);
        return;
    }

    createComment(date, name, content);
}

function createComment(date, name, comment) {

    // div.comments
    const commentsDiv = document.getElementsByClassName("comments")[0];

    // div.comment
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");

    // header
    const header = document.createElement("header");
    // header date
    const dateH4 = document.createElement("h4");
    // header name
    const nameH4 = document.createElement("h4");
    
    // content 
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content");
    // content p
    const p = document.createElement("p");

    // set values 
    dateH4.textContent = date.toLocaleString();
    nameH4.textContent = name.value;
    p.textContent = comment.value;

    // append children
    contentDiv.appendChild(p);
    header.appendChild(dateH4);
    header.appendChild(nameH4);
    commentDiv.appendChild(header);
    commentDiv.appendChild(contentDiv);
    commentsDiv.appendChild(commentDiv);

    // reset values
    name.value = "";
    content.value = "";
}

const submit = document.getElementById("submit");
submit.addEventListener("click", postComment);

