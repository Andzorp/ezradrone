function toggleCategory(categoryId) {
    const category = document.getElementById(categoryId);
    const header = category.previousElementSibling;
    category.classList.toggle('open');
    header.querySelector('.arrow').classList.toggle('rotate');
}
