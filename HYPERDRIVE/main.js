const cars = [
    {
        id: 1,
        brand: "Porsche",
        name: "911 GT3 RS (992) Weissach",
        price: "$10,000,000 MXN",
        hp: "525 hp",
        topSpeed: "296 km/h",
        img: "https://www.europeanprestige.co.uk/blobs/stock/577/images/45f3295c-923a-40fd-b1e7-6f6d0d129de2/hi4a4328.jpg?width=2000&height=1333",
        description: "El Porsche 911 GT3 RS con paquete Weissach es la cúspide del rendimiento en pista. Aligerado con fibra de carbono expuesta y aerodinámica extrema de DRS."
    },
    {
        id: 2,
        brand: "Dodge",
        name: "Charger SRT Hellcat Redeye",
        price: "$2,200,000 MXN",
        hp: "797 hp",
        topSpeed: "326 km/h",
        img: "https://static.cargurus.com/images/forsale/2026/02/07/13/37/2022_dodge_charger-pic-6200484461508760425-1024x768.jpeg",
        description: "El Charger SRT Hellcat Redeye Widebody es el sedán de producción más rápido y potente del mundo. Un verdadero dragster de cuatro puertas."
    },
    {
        id: 3,
        brand: "Dodge",
        name: "Challenger SRT Demon 170",
        price: "$5,000,000 MXN",
        hp: "1,025 hp",
        topSpeed: "346 km/h",
        img: "proximamente_custom.jpg",
        isComingSoon: true,
        description: "El Demon 170 es la máxima expresión de los muscle cars de Dodge. Próximamente disponible en nuestro inventario con imágenes detalladas de su configuración Last Call."
    },
    {
        id: 4,
        brand: "Pagani",
        name: "Zonda R",
        price: "$2,800,000 USD",
        hp: "740 hp",
        topSpeed: "350 km/h",
        img: "proximamente_custom.jpg",
        isComingSoon: true,
        description: "El Pagani Zonda R es una obra maestra técnica de pista. Estamos actualizando nuestra galería con las especificaciones exactas de esta unidad de colección."
    },
    {
        id: 5,
        brand: "Lamborghini",
        name: "Aventador SVJ",
        price: "$517,770 USD",
        hp: "770 hp",
        topSpeed: "351 km/h",
        img: "proximamente_custom.jpg",
        isComingSoon: true,
        description: "Super Veloce Jota. El Aventador SVJ optimizado para pista. Imágenes reales de nuestra unidad en stock próximamente disponibles."
    },
    {
        id: 6,
        brand: "Bugatti",
        name: "Chiron Pur Sport",
        price: "$3,600,000 USD",
        hp: "1,500 hp",
        topSpeed: "350 km/h",
        img: "https://eventosmotor.com/wp-content/uploads/2025/08/Chiron-Pur-Sport_eventosmotor.jpg",
        description: "Diseñado para la agilidad absoluta. El Chiron Pur Sport domina las curvas con su aerodinámica revisada y relaciones de marcha optimizadas."
    }
];

const carGrid = document.getElementById('car-grid');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');

function renderCars() {
    carGrid.innerHTML = cars.map(car => `
        <div class="car-card">
            ${car.isComingSoon ? '<div class="car-badge">Próximamente</div>' : ''}
            <img src="${car.img}" alt="${car.name}" class="car-img" onerror="this.src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2083'">
            <div class="car-info">
                <div class="car-brand">${car.brand}</div>
                <div class="car-name">${car.name}</div>
                <div class="car-stats">
                    <span>${car.hp}</span>
                    <span>${car.topSpeed}</span>
                </div>
                <div class="car-price">${car.price}</div>
                <div class="card-btns">
                    <button class="btn-detail" onclick="showDetails(${car.id})">Detalles</button>
                    <button class="btn-buy" onclick="simulateBuy('${car.name}')">Comprar</button>
                </div>
            </div>
        </div>
    `).join('');
}

function showDetails(id) {
    const car = cars.find(c => c.id === id);
    modalBody.innerHTML = `
        <div class="modal-layout">
            <img src="${car.img}" alt="${car.name}" style="width:100%; border-radius:15px; margin-bottom: 1.5rem;" onerror="this.src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2083'">
            <div class="car-brand" style="font-size: 1.2rem;">${car.brand}</div>
            <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">${car.name}</h2>
            <p style="color: #b0b0b0; margin-bottom: 2rem; font-size: 1.1rem;">${car.description}</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 2rem;">
                <div style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 10px;">
                    <div style="font-size: 0.8rem; color: #00d4ff;">Potencia</div>
                    <div style="font-size: 1.5rem; font-weight: 700;">${car.hp}</div>
                </div>
                <div style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 10px;">
                    <div style="font-size: 0.8rem; color: #00d4ff;">Velocidad Máxima</div>
                    <div style="font-size: 1.5rem; font-weight: 700;">${car.topSpeed}</div>
                </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="font-size: 2rem; font-weight: 900; color: #d4af37;">${car.price}</div>
                <button class="btn-primary" onclick="simulateBuy('${car.name}')">Iniciar Compra</button>
            </div>
        </div>
    `;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function simulateBuy(name) {
    alert(`¡Felicidades! Has iniciado el proceso de compra de tu ${name}.\nUn asesor de HyperDrive Motors se pondrá en contacto contigo para los detalles de pago y entrega.`);
}

closeModal.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};

// Initial render
renderCars();
