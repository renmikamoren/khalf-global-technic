// --- FUNGSI RENDER PRODUK ---
function displayProducts(filteredProducts, limit = null) {
    const grid = document.getElementById('product-grid');
    const noProduct = document.getElementById('no-product');
    
    if (!grid) return; 

    grid.innerHTML = ""; 
    let displayList = limit ? filteredProducts.slice(0, limit) : filteredProducts;

    if (displayList.length === 0) {
        if (noProduct) noProduct.classList.remove('hidden');
    } else {
        if (noProduct) noProduct.classList.add('hidden');
        displayList.forEach(p => {
            grid.innerHTML += `
                <div class="card" data-aos="zoom-in" onclick="location.href='https://wa.me/${CONTACT_WA}?text=Halo%20PT%20Khalf,%20saya%20tertarik%20dengan%20${p.name}">
                    <img src="${p.images[0]}" alt="${p.name}">
                    <div class="card-content">
                        <span class="category" style="color: #e11d48; font-size: 0.7rem; font-weight: bold; text-transform: uppercase;">${p.category}</span>
                        <h4 style="margin: 8px 0; font-size: 1rem; min-height: 45px;">${p.name}</h4>
                        <p style="font-size: 0.75rem; color: #64748b; margin-bottom: 10px;">Brand: ${p.brand}</p>
                        <a href="https://wa.me/${CONTACT_WA}?text=Halo%20PT%20Khalf,%20saya%20tertarik%20dengan%20${p.name}" target="_blank" class="btn-wa">Tanya Stok</a>
                    </div>
                </div>`;
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. DETEKSI HALAMAN ---
    const isCatalogPage = window.location.pathname.includes('catalog.html');
    const isIndexPage = window.location.pathname.includes('index.html') || window.location.pathname === '/';

    if (typeof products !== 'undefined') {
        if (isCatalogPage) {
            displayProducts(products);
        } else if (isIndexPage) {
            displayProducts(products, 4); // Tampilkan 4 produk di home
        }
    }

    // --- 2. FITUR SEARCH (Khusus Katalog) ---
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const keyword = e.target.value.toLowerCase();
            const filtered = products.filter(p => 
                p.name.toLowerCase().includes(keyword) || 
                p.category.toLowerCase().includes(keyword)
            );
            displayProducts(filtered);
        });
    }

    // --- 3. MOBILE MENU ---
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            navList.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
});

// Fungsi untuk memunculkan input kategori manual
function checkCategory(select) {
    const otherInput = document.getElementById('p-category-other');
    
    if (select.value === 'Other') {
        otherInput.style.display = 'block';
        otherInput.setAttribute('required', 'true'); // Wajib isi jika muncul
        otherInput.focus(); // Biar user langsung bisa ngetik
    } else {
        otherInput.style.display = 'none';
        otherInput.removeAttribute('required');
        otherInput.value = ''; // Reset isinya kalau batal pakai kategori manual
    }
}

// Logika saat form di submit
document.getElementById('add-product-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('p-name').value;
    const brand = document.getElementById('p-brand').value;
    const image = document.getElementById('p-image').value;
    
    // Logika pemilihan kategori: pakai dropdown atau input manual
    let category = document.getElementById('p-category').value;
    if (category === 'Other') {
        category = document.getElementById('p-category-other').value;
    }

    // Objek produk baru
    const newProduct = {
        id: Date.now(),
        name: name,
        category: category,
        brand: brand,
        image: image
    };

    // Contoh simpan ke LocalStorage (sesuai yang pernah kita buat dulu)
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));

    alert('Produk ' + name + ' berhasil ditambahkan ke kategori ' + category + '!');
    this.reset();
    document.getElementById('p-category-other').style.display = 'none'; // Sembunyikan lagi input manual
});