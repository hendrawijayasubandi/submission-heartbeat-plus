document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    var img1 = document.getElementById("myImg1");
    var img2 = document.getElementById("myImg2");
    var img3 = document.getElementById("myImg3");
    var img4 = document.getElementById("myImg4");
    var img5 = document.getElementById("myImg5");

    img1.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    img2.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    img3.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    img4.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    img5.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    function closeModal() {
        modal.style.display = "none";
    }

    // Get the <span> element that closes the modal
    var span = document.querySelector(".close");
    span.onclick = closeModal;
});

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const menu = document.getElementById("menu");

    menuIcon.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    document.addEventListener("click", (event) => {
        if (menu.classList.contains("active") && !menu.contains(event.target) && event.target !== menuIcon) {
            menu.classList.remove("active");
        }
    });
});