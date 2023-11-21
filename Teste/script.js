const url = "https://gerador-nomes.wolan.net/nome/";

const postPage = document.querySelector("#post");
// Load post
const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get("id");

async function getAllPosts() {
    const response = await fetch(url);
  
    console.log(response);
  
    const data = await response.json();
  
    console.log(data);
  
  
    data.map((post) => {
      const div = document.createElement("div");
      const pessoa = document.createElement("p");
     
      pessoa.innerText = post.title; 
      div.appendChild(title);;
      postsContainer.appendChild(div);
    });
  }

  async function getPost(name) {
    const responsePost = await Promise.all([
      fetch(`${url}/${name}`)
      
    ]);
  //dados do post
    const dataPost = await responsePost.json();
    
    const title = document.createElement("h1");
    const body = document.createElement("p");
  
    title.innerText = dataPost.title;
    body.innerText = dataPost.body;
  
    postContainer.appendChild(title);
    postContainer.appendChild(body);
  
    dataComments.map((comment) => {
      createComment(comment);
    });
  }