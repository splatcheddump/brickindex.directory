(function() {
    function filterItems() {
        const searchTerm = document.getElementById('searchBox').value.toLowerCase();
        const filterType = document.getElementById('filter-select').value;
        const items = document.querySelectorAll('.listItem');
        items.forEach(item => {
            const name = item.dataset.name;
            const description = item.dataset.description;
            const type = item.dataset.type;
            const matchesSearch = name.includes(searchTerm) || description.includes(searchTerm);
            const matchesFilter = filterType === 'all' || type === filterType;
            if (matchesSearch && matchesFilter) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }

    document.getElementById('searchBox').addEventListener('input', filterItems);
    document.getElementById('filter-select').addEventListener('change', filterItems);
})();
