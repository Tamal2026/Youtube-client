const handleCategory = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();

  const btnContainer = document.getElementById('btn-container');
  data.data.forEach((btn)=>{
const div = document.createElement('div');
div.innerHTML= `  
<button id="all-btn" onclick = "handlerLoad('${btn.category_id}')" class=" py-1 px-5 rounded-lg bg-slate-300 font-light ">${btn.category}</button>

`
btnContainer.appendChild(div);

  })};
const handlerLoad = async(id)=>{
  const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id} `);
  const data = await res.json();
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = "";

  if (data.data.length === 0) {

    const noDataContainer = document.createElement('div');
    noDataContainer.classList = 'no-data-container ';

    
    const noDataImage = document.createElement('img');
    noDataImage.src = 'icon.png';
    noDataImage.alt = '';

   
    const noDataMessage = document.createElement('p');
    noDataMessage.textContent = ' Opps !! Videos available.';

    noDataContainer.appendChild(noDataImage);
    noDataContainer.appendChild(noDataMessage);

    cardContainer.appendChild(noDataContainer);
  } else {
    data.data.forEach((videos)=>{
      const div = document.createElement('div');
    div.classList = `  card w-96 bg-base-100 shadow-xl relative  `;
    div.innerHTML =` 
     <img src=" ${videos.thumbnail}" alt="" style=" height: 200px;">
      <div class="absolute bottom-40 right-2">
        ${
          videos.others.posted_date
            ? `<p class="bg-gray-900 text-white rounded-md px-3 py-2">${convertTime(videos.others.posted_date)}</p>`: ''
        }
      </div>
      <div class="card-body">
        <div class="flex gap-4">
          <div>
            <img src=" ${videos.authors[0].profile_picture}" alt="" style="width: 40px; height: 40px; border-radius: 50%;">
          </div>
          <div>
            <h1 class="font-bold">${videos.title}</h1>
            <div class="flex items-center gap-2">
              <div>
                <p class="mt-2">${videos.authors[0].profile_name}</p>
              </div>
              <div>
                <img class="mt-2" src="${
                  videos.authors[0].verified ? 'Group 3.png' : 'unverified-image.png'
                }" alt="">
              </div>
            </div>
          </div>
        </div>
        <p class="mt-2 ml-14">${videos.others.views} views</p>
      </div>
    `;
    cardContainer.appendChild(div);
    
    })
  }



  function convertTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
  
  
    return `${hours} hrs ${minutes} min ago`;
  }
  
  
  console.log(convertedTime);
  

}
    handleCategory();
    handlerLoad('1000');