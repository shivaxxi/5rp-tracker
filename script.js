const houses = [
    {name: 'Дом №1', district: 'center', price: 500000, garage: true, timer: 3600},
    {name: 'Дом №2', district: 'south', price: 300000, garage: false, timer: 7200},
    {name: 'Дом №3', district: 'north', price: 800000, garage: true, timer: 1800},
];

const housesList = document.getElementById('housesList');

function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
}

function renderHouses() {
    housesList.innerHTML = '';
    houses.forEach((house, index) => {
        const card = document.createElement('div');
        card.className = 'house-card';
        
        let timerColor = 'green';
        if (house.timer < 1800) timerColor = 'red';
        else if (house.timer < 3600) timerColor = 'orange';

        card.innerHTML = `
            <h3>${house.name}</h3>
            <p>Район: ${house.district}</p>
            <p>Цена: $${house.price}</p>
            <p>Гараж: ${house.garage ? 'Да' : 'Нет'}</p>
            <p class='timer ${timerColor}' id='timer-${index}'>${formatTime(house.timer)}</p>
        `;
        housesList.appendChild(card);
    });
}

function updateTimers() {
    houses.forEach((house, index) => {
        if (house.timer > 0) house.timer--;
        let timerColor = 'green';
        if (house.timer < 1800) timerColor = 'red';
        else if (house.timer < 3600) timerColor = 'orange';
        document.getElementById(`timer-${index}`).textContent = formatTime(house.timer);
        document.getElementById(`timer-${index}`).className = `timer ${timerColor}`;
    });
}

renderHouses();
setInterval(updateTimers, 1000);