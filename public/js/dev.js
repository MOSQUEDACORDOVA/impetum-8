import { departments } from "./departments.mjs";

document.addEventListener("DOMContentLoaded", function () {
    createDynamicCards();
    clickCard();
});


const createDynamicCards = () => {
  const container = document.getElementById("cards-container");

  departments.forEach(department => {
    const card = document.createElement("div");
    card.setAttribute("data-id", department.id);
    card.classList.add("card-item", "w-[90%]", "md:w-[45%]", "lg:w-[30%]", "p-2", "border", "border-black/32", "flex", "flex-col", "justify-between", "rounded-lg", "cursor-pointer", department.etiqueta);
    card.innerHTML = `
      <div class="flex flex-col gap-4">
        <img
        class="w-full rounded-md h-[264px] object-cover"
        src="${department.image}"
        alt=""
        />
        <div class="flex flex-col gap-2">
          <p class="text-[22px]">${department.name}</p>
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
          <div class="flex gap-3 mt-2 mb-4">
            <img
            class="w-[20px] h-[20px]"
            src="./assets/localizacion.svg"
            alt="localizacion"
            />
            <p class="text-[14px]">${department.location}</p>
          </div>
        </div>
      </div>

      <div 
        class="flex justify-evenly font-medium border-t border-black/32">
          ${department.actions.want ? `<a href="https://api.whatsapp.com/send?phone=5215624033930&text=Hola%20amigos%20de%20Impetum,%20me%20gustaría%20más%20información%20acerca%20de%20${encodeURIComponent(department.name)}" class="p-2">${department.actions.want}</a><p class="border-l border-black/32"></p>` : ""}
          <a href="detalle.html?id=${department.id}" class="p-2">${department.actions.details}</a>
      </div>
    `;
    container.appendChild(card);
  });
};

const clickCard = ()=>{
    document.querySelectorAll(".card-item").forEach(card => {
        card.addEventListener("click", () => {
            const id = card.getAttribute("data-id");
            window.location.href = `detalle.html?id=${id}`;
        });
    });
}