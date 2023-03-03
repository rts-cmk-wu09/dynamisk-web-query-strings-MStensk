document.querySelector(".container").addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-heart")) {
        let eleId = e.target.closest("figure").attributes.id.value;
        if(!localStorage.getItem(eleId, eleId)) {
            localStorage.setItem(eleId, eleId);
            e.target.classList.add("fa-solid");
        } else {
            localStorage.removeItem(eleId);
            e.target.classList.remove("fa-solid");
            e.target.classList.add("fa-regular")
        }
    }
});