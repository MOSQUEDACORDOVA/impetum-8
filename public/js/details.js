import { departments } from "./departments.mjs";
import PhotoSwipeLightbox from "https://cdn.jsdelivr.net/npm/photoswipe@5/dist/photoswipe-lightbox.esm.js";

document.addEventListener("DOMContentLoaded", function () {
    getInformationCard();
   
});

const getInformationCard = ()=>{
    const id = window.location.search.split("?id=")[1];

    const department = departments.find(department => department.id == id);
    buildCard(department);
    buildGallery(department.otherImages);

    const lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery",
      children: "a",
      pswpModule: () =>
        import(
          "https://cdn.jsdelivr.net/npm/photoswipe@5/dist/photoswipe.esm.js"
        ),
    });
  
    lightbox.init();
    document.getElementById("openGallery").addEventListener("click", function () {
      document.querySelector("#gallery a").click();
    });
}


const buildCard = (department)=>{
    const container = document.getElementById("details");
    const card = document.createElement("div");
    card.setAttribute("data-id", department.id);
    card.classList.add("card-item" ,"w-[95%]", "md:w-[full]","p-2", "border" ,"border-black/32" ,"rounded-lg" ,"flex" ,"flex-col" ,"md:flex-row" ,"gap-4","md:h-[560px]", department.etiqueta);
    card.innerHTML = `
        
      <div class="relative rounded-md md:w-1/2 ">
      <img
      class="h-full w-full object-cover"
      src="${department.image}"
      alt="department.name"
      />
        <img id="openGallery" class="cursor-pointer z-50 absolute h-8 absolute bottom-2 right-2" src="./assets/expand.svg" alt="expand" />
      </div>
      
      <div class="w-full md:w-1/2 flex flex-col gap-4 justify-center">
      <p class="text-[28px]">${department.name}</p>
      ${department.etiqueta !== "etiqueta_vendido" ? `<p class="text-xl text-[#D92741]">${department.price} MXN</p>` : ""}
      <p>${department.description}</p>
      <div class="flex gap-8">
        <div class="flex gap-2 items-center">
        <img src="./assets/habitacion.svg" alt="" />
        <p>${department.rooms}</p>
        </div>
        <div class="flex gap-2 items-center">
        <img src="./assets/bath.svg" alt="" />
        <p>${department.bathrooms}</p>
        </div>
        <div class="flex gap-2 items-center">
        <img src="./assets/medidas.svg" alt="" />
        <p>${department.squareMeters}</p>
        </div>
      </div>
      <div class="flex gap-3 my-4">
        <img
        class="w-[20px] h-[20px]"
        src="./assets/localizacion.svg"
        alt="localizacion"
        />
        <p class="text-sm w-80">${department.location}</p>
      </div>
      <div
        class="flex flex-col gap-8 font-medium  border-black/32"
      >
        ${department.etiqueta !== "etiqueta_vendido" ? `
        <a href="https://api.whatsapp.com/send?phone=525624033930&text=Hola%20amigos%20de%20Impetum,%20me%20gustaría%20más%20información%20acerca%20de%20${encodeURIComponent(department.name)}"
          class="cursor-pointer md:w-[90%] md:max-w-[290px] border border-black/32 text-xl font-bold p-2 text-center rounded-full"
          target="_blank"
        >
          Asesoría
        </a>` : ""}
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

const buildGallery = (otherImages) => {
  const gallery = document.getElementById("gallery");
  
  gallery.classList.remove("hidden");
  gallery.style.visibility = "hidden";
  gallery.style.position = "absolute";
  gallery.style.width = "1px";
  gallery.style.height = "1px";
  gallery.style.overflow = "hidden";
  
  gallery.innerHTML = "";
  
  otherImages.forEach((image, index) => {
    const link = document.createElement("a");
    link.href = image;
    const tempImg = new Image();
    tempImg.onload = function() {
      link.dataset.pswpWidth = this.width;
      link.dataset.pswpHeight = this.height;
    };
    tempImg.src = image;
    
    const img = document.createElement("img");
    img.src = image;
    img.alt = `Imagen ${index + 1}`;
    
    link.appendChild(img);
    gallery.appendChild(link);
  });
};