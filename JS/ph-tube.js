const phTube = async(id)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`);
    const data = await res.json();
    console.log(data.data);
    const tubeContainer = document.getElementById('tube-container');
    data.data.forEach(phTubeMain => {

      const div = document.createElement('div');
      div.classList = `  card w-96 bg-base-100 shadow-xl  `;
      div.innerHTML = ` <img src=" ${phTubeMain.thumbnail}" alt="" style=" height: 200px;">
      <div class="card-body">
      <div class="flex gap-4">
      <div>
          <img src=" ${phTubeMain.authors[0].profile_picture}" alt="" style="width: 40px; height: 40px; border-radius: 50%;">
        </div>
        <div>
          <h1 class="font-bold">${phTubeMain.title}</h1>
          <div class="flex items-center gap-2">
          <div>
              <p class ="mt-2">${phTubeMain.authors[0].profile_name}</p>
          </div>
          <div>
          <img class="mt-2" src="${phTubeMain.authors[0].verified ? 'Group 3.png' : 'unverified-image.png'}" alt="">
          </div>
      </div>
        </div>
   
   </div>

   
         `
      tubeContainer.appendChild(div);
    })

  }


const blogBtn = document.getElementById('blog-btn');


blogBtn.addEventListener('click', () => {
 
  const blogUrl = 'http://127.0.0.1:5500/JS/blog.html';
  window.open(blogUrl,'_blank');
});
phTube();