const phTube = async()=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`);
    const data = await res.json();
    console.log(data.data);
    const tubeContainer = document.getElementById('tube-container');
    data.data.forEach(phTubeMain => {

      const div = document.createElement('div');
      div.classList = `  card w-96 bg-base-100 shadow-xl  `;
      div.innerHTML = `  <figure><img src="${phTubeMain.thumbnail}" /></figure>
      <div class="card-body">
      <div class="flex">
      <divs>
          <img src="' ${phTubeMain.authors.profile_picture} '" alt="">
        </divs>
        <div>
          <h1 class="font-bold">Building a Winning UX Strategy <br> Using the Kano Model</h1>
        </div>
        
   </div>
   <p>'${phTubeMain.authors[0]}'</p>
         `
      tubeContainer.appendChild(div);
    })

  }


// Find the "Blog" button by its ID
const blogBtn = document.getElementById('blog-btn');

// Add a click event listener to the "Blog" button
blogBtn.addEventListener('click', () => {
  // Replace the URL below with the actual URL of your blog
  const blogUrl = 'http://127.0.0.1:5500/JS/blog.html';

  // Open the blog URL in a new window
  window.open(blogUrl, '_blank');
});


phTube();