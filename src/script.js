const features = document.querySelectorAll(".basic-feature")

features.forEach((feature) => {
    feature.addEventListener("click", () => {
        feature.classList.toggle("active");
        document.execCommand(feature.id, false, null);
    })
})



