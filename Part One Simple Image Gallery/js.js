const filterBtns = document.querySelectorAll('.filter-btn');
const gridItems = document.querySelectorAll('.item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        filterItems(filter);
        setActiveFilterBtn(btn);
    });
});

function filterItems(filter) {
    gridItems.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function setActiveFilterBtn(activeBtn) {
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    activeBtn.classList.add('active');
}