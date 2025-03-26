import { departments } from "./departments.mjs";
import PhotoSwipeLightbox from "https://cdn.jsdelivr.net/npm/photoswipe@5/dist/photoswipe-lightbox.esm.js";

document.addEventListener("DOMContentLoaded", function () {
  getInformationCard();
});

const getInformationCard = () => {
  const id = window.location.search.split("?id=")[1];

  const department = departments.find((department) => department.id == id);
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
};

const buildCard = (department) => {
  const container = document.getElementById("details");
  const card = document.createElement("div");
  card.setAttribute("data-id", department.id);
  card.classList.add(
    "card-item",
    "w-[95%]",
    "md:w-[full]",
    "p-2",
    "border",
    "border-black/32",
    "rounded-lg",
    "flex",
    "flex-col",
    "md:flex-row",
    "gap-4",
    "md:h-[460px]"
  );
  card.innerHTML = `
     <img
      id="openGallery"
      class="w-full rounded-md object-cover md:w-[50%] cursor-pointer"
      src="${department.image}"
      alt=""
      />
      <div class="flex flex-col gap-2">
      <p class="text-[22px]">${department.name}</p>
      <p class ="text-2xl text-[#D92741]">$ ${department.price} MXN</p>
      <p>${department.description}</p>
      <div class="flex gap-8">
        <div class="flex gap-4">
        <img src="../assets/habitacion.svg" alt="" />
        <p>${department.rooms}</p>
        </div>
        <div class="flex gap-4">
        <img src="../assets/bath.svg" alt="" />
        <p>${department.bathrooms}</p>
        </div>
        <div class="flex gap-4">
        <img src="../assets/medidas.svg" alt="" />
        <p>${department.squareMeters}</p>
        </div>
      </div>
      <div class="flex gap-3 my-6">
        <img
        class="w-[23px] h-[23px]"
        src="../assets/localizacion.svg"
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
          Asesoria
        </div>
         <div
          class="flex flex-col gap-2"
        >
          <p class="font-medium">${department.details}</p>
          <p class="text-sm font-thin">${department.largeDescription}</p>
        </div>
      </div>
      </div>
    `;
  container.appendChild(card);
};

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
    link.dataset.pswpWidth = "2500";
    link.dataset.pswpHeight = "1875";

    const img = document.createElement("img");
    img.src = image;
    img.alt = `Imagen ${index + 1}`;

    link.appendChild(img);
    gallery.appendChild(link);
  });
};
