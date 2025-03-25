import { departments } from "./departments.mjs";

document.addEventListener("DOMContentLoaded", function () {
    createDynamicCards();
    clickCard();
});


const createDynamicCards = ()=>{
  const container = document.getElementById("cards-container");

  departments.forEach(department => {
    const card = document.createElement("div");
    card.setAttribute("data-id", department.id);
    card.classList.add("card-item" ,"w-[90%]", "md:w-[45%]", "lg:w-[30%]","p-2", "border" ,"border-black/32" ,"rounded-lg" ,"flex" ,"flex-col" ,"gap-4","cursor-pointer");
    card.innerHTML = `
      <img
      class="w-full rounded-md h-[264px] object-cover"
      src="${department.image}"
      alt=""
      />
      <div class="flex flex-col gap-2">
      <p class="text-[22px]">${department.name}</p>
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
      <div class="flex gap-3 mt-6">
        <img
        class="w-[23px] h-[23px]"
        src="../assets/localizacion.svg"
        alt="localizacion"
        />
        <p>${department.location}</p>
      </div>
      <div
        class="flex justify-evenly font-medium border-t border-black/32"
      >
        <p class="p-2">${department.actions.want}</p>
        <p class="border-l border-black/32"></p>
        <p class="p-2">${department.actions.details}</p>
      </div>
      </div>

    `;
    container.appendChild(card);
  });

}

const clickCard = ()=>{
    document.querySelectorAll(".card-item").forEach(card => {
        card.addEventListener("click", () => {
            const id = card.getAttribute("data-id");
            window.location.href = `detalle.html?id=${id}`;
        });
    });
}