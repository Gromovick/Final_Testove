document.querySelectorAll(".speakers__person-info").forEach((person) => {
    person.addEventListener("click", () => {
        const isOpen = window.getComputedStyle(person).getPropertyValue("--open");

        document.querySelectorAll(".speakers__person-info").forEach((person) => {
            if (isOpen !== "1") {
                person.classList.remove("speakers__person-info--active");
            }
            const id = person.dataset.id;
            const content = document.querySelector(`#person${id}`);
            content.classList.remove("speakers__content-item--active");
        })
        const id = person.dataset.id;
        const content = document.querySelector(`#person${id}`);
        content.classList.add("speakers__content-item--active");




        if (isOpen === "1") {
            person.classList.toggle("speakers__person-info--active");
        } else {
            person.classList.add("speakers__person-info--active")
        }






    })
})
