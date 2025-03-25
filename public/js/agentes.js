import { departments } from "./agentes.mjs";

document.addEventListener("DOMContentLoaded", function () {
    createDynamicCards();
    clickCard();
});


const createDynamicCards = () => {
  const container = document.getElementById("cards-container");

  departments.forEach(department => {
    const card = document.createElement("div");
    card.setAttribute("data-id", department.id);
    card.classList.add("card-item", "w-[90%]", "md:w-[45%]", "p-2", "border", "border-black/32", "flex", "flex-col", "justify-between", "rounded-lg");
    card.innerHTML = `
      <div class="flex flex-col gap-4">
        <img
        class="w-full rounded-md h-[464px] object-cover"
        src="${department.image}"
        alt=""
        />
        <div class="flex flex-col gap-2">
          <p class="text-[22px]">${department.name}</p>
          
          <div class="flex gap-3">
            <img
            class="w-[20px] h-[20px]"
            src="./assets/mail.svg"
            alt="localizacion"
            />
            <p class="text-[14px]">${department.mail}</p>
          </div>

          <div class="flex gap-3">
            <img
            class="w-[20px] h-[20px]"
            src="./assets/phone.svg"
            alt="localizacion"
            />
            <p class="text-[14px]">${department.phone}</p>
          </div>
        </div>
      </div>

    `;
    container.appendChild(card);
  });
};