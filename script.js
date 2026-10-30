const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

// Tutup menu setelah salah satu tautan dipilih di layar HP.
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka menu");
    menuToggle.textContent = "☰";
  });
});

// Filter galeri berdasarkan kategori.
const filterButtons = document.querySelectorAll("[data-filter]");
const projects = document.querySelectorAll(".project");
const projectDetail = document.querySelector("#projectDetail");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    projects.forEach((project) => {
      project.hidden = category !== "all" && project.dataset.category !== category;
    });

    projectDetail.classList.remove("visible");
    projectDetail.textContent = "";
  });
});

// Klik kartu proyek untuk menampilkan deskripsi.
projects.forEach((project) => {
  project.addEventListener("click", () => {
    projectDetail.textContent = `${project.dataset.title} — ${project.dataset.desc}`;
    projectDetail.classList.add("visible");
  });
});
