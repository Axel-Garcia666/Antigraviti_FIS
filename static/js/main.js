document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const scheduleList = document.getElementById('scheduleList');
    const cards = document.querySelectorAll('.schedule-card');
    const noResults = document.getElementById('noResults');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        let visibleCount = 0;

        cards.forEach(card => {
            if (query === '') {
                card.classList.remove('hidden');
                visibleCount++;
                return;
            }

            // Always show break if it matches key terms or just generally keep structural context?
            // User requirement: Search by category, speaker, title.
            // Let's implement strict filtering to find what matters.
            
            const title = card.getAttribute('data-title').toLowerCase();
            const category = card.getAttribute('data-category').toLowerCase();
            const speakers = card.getAttribute('data-speakers').toLowerCase();

            // Special case for lunch
            if (title.includes('lunch') && query.includes('lunch')) {
                 card.classList.remove('hidden');
                 visibleCount++;
                 return;
            }

            if (title.includes(query) || category.includes(query) || speakers.includes(query)) {
                card.classList.remove('hidden');
                visibleCount++;
            } else {
                card.classList.add('hidden');
            }
        });

        if (visibleCount === 0) {
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
        }
    });
});
