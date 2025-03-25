import { departments } from "./departments.mjs";

document.addEventListener("DOMContentLoaded", function () {
    getInformationCard();
   
});

const getInformationCard = ()=>{
    const id = window.location.search.split("?id=")[1];

    const department = departments.find(department => department.id == id);
    buildCard(department);
}

const buildCard = (department)=>{
    const container = document.getElementById("details");
    const card = document.createElement("div");
    card.setAttribute("data-id", department.id);
    card.classList.add("card-item" ,"w-[95%]", "md:w-[full]","p-2", "border" ,"border-black/32" ,"rounded-lg" ,"flex" ,"flex-col" ,"md:flex-row" ,"gap-4","md:h-[460px]");
    card.innerHTML = `
         <img
      class="w-full rounded-md object-cover md:w-[50%]"
      src="${department.image}"
      alt=""
      />
      <div class="flex flex-col gap-2">
      <p class="text-[28px]">${department.name}</p>
      <p class ="text-xl text-[#D92741]">${department.price} MXN</p>
      <p>${department.description}</p>
      <div class="flex gap-8">
        <div class="flex gap-4">
        <img src="./assets/habitacion.svg" alt="" />
        <p>${department.rooms}</p>
        </div>
        <div class="flex gap-4">
        <img src="./assets/bath.svg" alt="" />
        <p>${department.bathrooms}</p>
        </div>
        <div class="flex gap-4">
        <img src="./assets/medidas.svg" alt="" />
        <p>${department.squareMeters}</p>
        </div>
      </div>
      <div class="flex gap-3 my-6">
        <img
        class="w-[23px] h-[23px]"
        src="./assets/localizacion.svg"
        alt="localizacion"
        />
        <p class="text-sm w-80">${department.location}</p>
      </div>
      <div
        class="flex flex-col gap-8 font-medium  border-black/32"
      >
        <div
          class="cursor-pointer w-[90%] md:max-w-[290px] border border-black/32 text-xl font-bold p-2 text-center rounded-full"
        >
          Asesoría
        </div>
         <div
          class="flex flex-col gap-2"
        >
          <p class="font-medium">${department.details}</p>
          <p class="text-sm font-thin">${department.largeDescription}</p>
        </div>
      </div>
      </div>

    `
    container.appendChild(card);
}