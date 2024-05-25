function searchISP() {
    const input = document.getElementById('search');
    const filter = input.value.toLowerCase();
    const list = document.getElementById('isp-list');
    const items = list.getElementsByClassName('isp-item');

    for (let i = 0; i < items.length; i++) {
        let h3 = items[i].getElementsByTagName('h3')[0];
        if (h3.innerHTML.toLowerCase().indexOf(filter) > -1) {
            items[i].style.display = '';
        } else {
            items[i].style.display = 'none';
        }
    }
}

function sortISP(criteria, order) {
    const list = document.getElementById('isp-list');
    const items = Array.from(list.getElementsByClassName('isp-item'));

    items.sort((a, b) => {
        let valA, valB;
        if (criteria === 'price') {
            valA = parseInt(a.getAttribute('data-price'));
            valB = parseInt(b.getAttribute('data-price'));
        } else if (criteria === 'rating') {
            valA = parseInt(a.getAttribute('data-rating'));
            valB = parseInt(b.getAttribute('data-rating'));
        }

        if (order === 'asc') {
            return valA - valB;
        } else {
            return valB - valA;
        }
    });

    // Clear current list and append sorted items
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    items.forEach(item => list.appendChild(item));
}

// Initialize random ratings for all ISP items
document.addEventListener('DOMContentLoaded', () => {
    const items = document.getElementsByClassName('isp-item');
    for (let i = 0; i < items.length; i++) {
        const rating = Math.floor(Math.random() * 5) + 1; // Random rating between 1 and 5
        items[i].setAttribute('data-rating', rating);
        items[i].getElementsByTagName('p')[4].innerText = `Rating: ${rating}`;
    }
});
