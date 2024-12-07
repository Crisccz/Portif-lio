document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".social-icon");

    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "scale(1.1)";
        });

        link.addEventListener("mouseout", () => {
            link.style.transform = "scale(1)";
        });
    });

    const contactLinks = document.querySelectorAll("#contatos a");
    contactLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            alert(`Você clicou no contato: ${link.href}`);
        });
    });
});
