const phTube = async(id)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
   const phTubeData = data.data;
   displayAllData(phTubeData);
}

const displayAllData = (phTubeData) =>{

    const tubeContainer = document.getElementById('tube-container');
    const div = document.createElement('div');
    div.classList = `  card w-96 bg-base-100 shadow-xl  `;
    div.innerHTML = `  <figure><img src="" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">${phTubeData.title}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>  `
    tubeContainer.appendChild(div);



}


phTube();