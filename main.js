/* ============================================
   VAPID — Main Script
   Hero Slideshow · Products · Cart · Filters
============================================ */

/* ============================================
   HERO SLIDESHOW
   
   Swap videos by replacing the URL.
   Download your videos as .mp4, upload to repo in
   folder "videos/", then change url to:
   "videos/your-file.mp4"
============================================ */
const heroSlides = [
    {
        type: "video",
        url: "https://videos.pexels.com/video-files/3196481/3196481-hd_1920_1080_25fps.mp4",
        poster: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
    },
    {
        type: "image",
        url: "https://images.unsplash.com/photo-1550995694-3f5f4a7e1bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
    },
    {
        type: "video",
        url: "https://videos.pexels.com/video-files/5057526/5057526-hd_1920_1080_25fps.mp4",
        poster: "https://images.unsplash.com/photo-1614735241165-6756e1df61ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
    },
    {
        type: "image",
        url: "https://images.unsplash.com/photo-1603905470540-1a0a66e06b3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
    }
];

/* ============================================
   PRODUCTS — 48 items
============================================ */
const products = [
    // DISPOSABLES
    { id: 1, name: "Blue Razz Ice 3500", brand: "Elf Bar", category: "disposables", price: 220, emoji: "💨", puffs: "3500", flavour: "Blue Raspberry", nicotine: "20mg", badge: "Best Seller", inStock: true, description: "Elf Bar's signature blue raspberry with an icy finish. Smooth draw, consistent flavour, long-lasting." },
    { id: 2, name: "Watermelon Cherry 5000", brand: "Lost Mary", category: "disposables", price: 280, emoji: "🍉", puffs: "5000", flavour: "Watermelon Cherry", nicotine: "20mg", badge: "New", inStock: true, description: "Juicy watermelon meets ripe cherry. A refreshing summer hit from Lost Mary." },
    { id: 3, name: "Mango Peach 6000", brand: "Hayati Pro", category: "disposables", price: 320, emoji: "🥭", puffs: "6000", flavour: "Mango Peach", nicotine: "20mg", badge: null, inStock: true, description: "Tropical mango blended with sweet peach. 6000 puffs of pure flavour." },
    { id: 4, name: "Strawberry Kiwi 3000", brand: "Elf Bar", category: "disposables", price: 200, emoji: "🍓", puffs: "3000", flavour: "Strawberry Kiwi", nicotine: "20mg", badge: null, inStock: true, description: "Sweet strawberries with tangy kiwi. A classic combination done right." },
    { id: 5, name: "Cola Ice 3500", brand: "Elf Bar", category: "disposables", price: 220, emoji: "🥤", puffs: "3500", flavour: "Cola", nicotine: "20mg", badge: null, inStock: false, description: "Classic cola with a cool finish. Reminds you of the real thing." },
    { id: 6, name: "Pink Lemonade 4000", brand: "Lost Mary", category: "disposables", price: 250, emoji: "🍋", puffs: "4000", flavour: "Pink Lemonade", nicotine: "20mg", badge: null, inStock: true, description: "Sweet and tart pink lemonade. Perfect all-day vape." },
    { id: 7, name: "Blueberry Ice 3500", brand: "Elf Bar", category: "disposables", price: 220, emoji: "🫐", puffs: "3500", flavour: "Blueberry", nicotine: "20mg", badge: null, inStock: true, description: "Frozen blueberries with a cool menthol finish." },
    { id: 8, name: "Cherry Cola 3500", brand: "Elf Bar", category: "disposables", price: 220, emoji: "🍒", puffs: "3500", flavour: "Cherry Cola", nicotine: "20mg", badge: null, inStock: true, description: "Cherry meets cola. A sweet, nostalgic vape." },

    // POD SYSTEMS
    { id: 9, name: "Xros 3 Pod Kit", brand: "Vaporesso", category: "pods", price: 480, emoji: "🔋", puffs: "Refillable", flavour: "Kit", nicotine: "0mg", badge: "Popular", inStock: true, description: "Compact pod system with adjustable airflow and long battery life. Perfect for beginners." },
    { id: 10, name: "Caliburn G3 Kit", brand: "Uwell", category: "pods", price: 550, emoji: "⚡", puffs: "Refillable", flavour: "Kit", nicotine: "0mg", badge: "Best Seller", inStock: true, description: "Uwell's most refined pod system yet. Superior flavour, leak-resistant design." },
    { id: 11, name: "Luxe X Pro Pod", brand: "Vaporesso", category: "pods", price: 620, emoji: "🚀", puffs: "Refillable", flavour: "Kit", nicotine: "0mg", badge: null, inStock: true, description: "High-end pod with adjustable wattage and premium build quality." },
    { id: 12, name: "Aegis Pod 2 Kit", brand: "GeekVape", category: "pods", price: 580, emoji: "🛡️", puffs: "Refillable", flavour: "Kit", nicotine: "0mg", badge: "Rugged", inStock: true, description: "Waterproof, shockproof, dustproof. Built for Botswana's toughest conditions." },
    { id: 13, name: "Novo 5 Kit", brand: "Smok", category: "pods", price: 420, emoji: "💧", puffs: "Refillable", flavour: "Kit", nicotine: "0mg", badge: null, inStock: true, description: "Smok's latest Novo device. Compact, powerful, and affordable." },
    { id: 14, name: "Wenax Q Kit", brand: "GeekVape", category: "pods", price: 380, emoji: "✨", puffs: "Refillable", flavour: "Kit", nicotine: "0mg", badge: null, inStock: true, description: "Sleek pod kit with 1100mAh battery and fast USB-C charging." },

    // MODS
    { id: 15, name: "Drag 4 Box Mod", brand: "VooPoo", category: "mods", price: 950, emoji: "📦", puffs: "200W", flavour: "Mod", nicotine: "0mg", badge: "Pro", inStock: true, description: "200W of pure power with the legendary GENE.FAN chip. For serious vapers." },
    { id: 16, name: "Aegis Legend 3", brand: "GeekVape", category: "mods", price: 1100, emoji: "🦾", puffs: "200W", flavour: "Mod", nicotine: "0mg", badge: null, inStock: true, description: "The toughest mod on the market. IP68 rated. Built to last." },
    { id: 17, name: "Gen 200 Kit", brand: "Vaporesso", category: "mods", price: 850, emoji: "🔧", puffs: "220W", flavour: "Mod", nicotine: "0mg", badge: null, inStock: true, description: "Featherlight 220W mod with premium leather finish." },
    { id: 18, name: "Centaurus M200", brand: "Lost Vape", category: "mods", price: 1250, emoji: "👑", puffs: "200W", flavour: "Mod", nicotine: "0mg", badge: "Premium", inStock: true, description: "Luxury mod with DNA-style chip and stunning resin panels." },
    { id: 19, name: "Thelema Quest 200W", brand: "Lost Vape", category: "mods", price: 1080, emoji: "🏆", puffs: "200W", flavour: "Mod", nicotine: "0mg", badge: null, inStock: true, description: "Premium mod with Quest 2.0 chipset and stunning design." },

    // E-LIQUIDS
    { id: 20, name: "Slow Blow 60ml", brand: "Nasty Juice", category: "liquids", price: 280, emoji: "🧪", puffs: "60ml", flavour: "Pineapple Lemonade", nicotine: "3mg", badge: "Best Seller", inStock: true, description: "Nasty Juice's signature. Tropical pineapple with citrus edge." },
    { id: 21, name: "Lemon Tart 60ml", brand: "Dinner Lady", category: "liquids", price: 300, emoji: "🍋", puffs: "60ml", flavour: "Lemon Tart", nicotine: "3mg", badge: null, inStock: true, description: "Award-winning British liquid. Zesty lemon with buttery pastry." },
    { id: 22, name: "Heisenberg 60ml", brand: "Vampire Vape", category: "liquids", price: 270, emoji: "💜", puffs: "60ml", flavour: "Mixed Berries", nicotine: "3mg", badge: "Classic", inStock: true, description: "The legendary Heisenberg. A mystery blend of berries and menthol." },
    { id: 23, name: "Blueberry Sour 60ml", brand: "Nasty Juice", category: "liquids", price: 280, emoji: "🫐", puffs: "60ml", flavour: "Blueberry Sour", nicotine: "3mg", badge: null, inStock: true, description: "Tart blueberry with a sour twist. Refreshing and moreish." },
    { id: 24, name: "Mango Ice 60ml", brand: "Nasty Juice", category: "liquids", price: 280, emoji: "🥭", puffs: "60ml", flavour: "Mango", nicotine: "3mg", badge: null, inStock: true, description: "Sweet ripe mango with an icy kick." },
    { id: 25, name: "Pink Lemonade 60ml", brand: "Dinner Lady", category: "liquids", price: 300, emoji: "🌸", puffs: "60ml", flavour: "Pink Lemonade", nicotine: "3mg", badge: null, inStock: true, description: "Sweet pink lemonade. Fruity, refreshing, and smooth." },
    { id: 26, name: "Strawberry Whip 60ml", brand: "Dinner Lady", category: "liquids", price: 300, emoji: "🍨", puffs: "60ml", flavour: "Strawberry Cream", nicotine: "3mg", badge: null, inStock: true, description: "Creamy strawberry milkshake flavour. Dessert lovers, this is for you." },
    { id: 27, name: "Grape Ice 60ml", brand: "Nasty Juice", category: "liquids", price: 280, emoji: "🍇", puffs: "60ml", flavour: "Grape", nicotine: "3mg", badge: null, inStock: true, description: "Sweet dark grapes with an icy finish." },

    // NIC SALTS
    { id: 28, name: "Blue Lemonade Nic Salt", brand: "One Cloud", category: "salts", price: 200, emoji: "🔵", puffs: "30ml", flavour: "Blue Lemonade", nicotine: "30mg", badge: "Best Seller", inStock: true, description: "Smooth nicotine salt with blue lemonade flavour. Perfect for pod systems." },
    { id: 29, name: "Frozen Blueberry Nic Salt", brand: "One Cloud", category: "salts", price: 200, emoji: "❄️", puffs: "30ml", flavour: "Frozen Blueberry", nicotine: "50mg", badge: null, inStock: true, description: "Icy blueberry nic salt for a smooth, satisfying hit." },
    { id: 30, name: "Lime Twist Nic Salt", brand: "One Cloud", category: "salts", price: 200, emoji: "🍈", puffs: "30ml", flavour: "Lime Twist", nicotine: "30mg", badge: null, inStock: true, description: "Zesty lime nic salt. Refreshing and clean." },
    { id: 31, name: "Pink Avalanche Nic Salt", brand: "One Cloud", category: "salts", price: 200, emoji: "🌸", puffs: "30ml", flavour: "Pink Lemonade", nicotine: "50mg", badge: null, inStock: true, description: "Sweet pink lemonade nic salt with a cool finish." },
    { id: 32, name: "Zero Kelvin Nic Salt", brand: "One Cloud", category: "salts", price: 200, emoji: "🧊", puffs: "30ml", flavour: "Menthol", nicotine: "30mg", badge: null, inStock: true, description: "Pure icy menthol. Coldest hit you'll find." },

    // COILS & PODS
    { id: 33, name: "GTX Mesh Coils (5-pack)", brand: "Vaporesso", category: "coils", price: 180, emoji: "🔩", puffs: "0.6Ω", flavour: "Coil", nicotine: "0mg", badge: null, inStock: true, description: "Genuine Vaporesso GTX coils. Pack of 5 for consistent performance." },
    { id: 34, name: "Caliburn G3 Pods (4-pack)", brand: "Uwell", category: "coils", price: 200, emoji: "🎯", puffs: "0.9Ω", flavour: "Pod", nicotine: "0mg", badge: "Best Seller", inStock: true, description: "Replacement pods for Caliburn G3. Pack of 4." },
    { id: 35, name: "Aegis Boost Coils", brand: "GeekVape", category: "coils", price: 190, emoji: "⚙️", puffs: "0.4Ω", flavour: "Coil", nicotine: "0mg", badge: null, inStock: true, description: "GeekVape B Series coils for Aegis Boost devices." },
    { id: 36, name: "Novo 5 Replacement Pods", brand: "Smok", category: "coils", price: 160, emoji: "💧", puffs: "0.8Ω", flavour: "Pod", nicotine: "0mg", badge: null, inStock: true, description: "3-pack replacement pods for Novo 5 kit." },
    { id: 37, name: "Xros Replacement Pods", brand: "Vaporesso", category: "coils", price: 170, emoji: "🔋", puffs: "1.0Ω", flavour: "Pod", nicotine: "0mg", badge: null, inStock: true, description: "2-pack pods for Xros 3 and Xros 3 Mini." },

    // TANKS
    { id: 38, name: "Zeus X RTA", brand: "GeekVape", category: "tanks", price: 480, emoji: "⚡", puffs: "5ml", flavour: "RTA", nicotine: "0mg", badge: null, inStock: true, description: "Top-airflow rebuildable tank. Leak-resistant." },
    { id: 39, name: "Drop V2 RDA", brand: "Digiflavor", category: "tanks", price: 450, emoji: "💧", puffs: "24mm", flavour: "RDA", nicotine: "0mg", badge: null, inStock: true, description: "Dual-coil RDA with massive airflow and deep juice well." },
    { id: 40, name: "Dead Rabbit V3 RDA", brand: "Hellvape", category: "tanks", price: 520, emoji: "🐇", puffs: "24mm", flavour: "RDA", nicotine: "0mg", badge: "Popular", inStock: true, description: "Legendary flavour with easy build deck. Postless design." },
    { id: 41, name: "Profile RDTA", brand: "Wotofo", category: "tanks", price: 550, emoji: "📊", puffs: "6ml", flavour: "RDTA", nicotine: "0mg", badge: null, inStock: true, description: "Mesh build deck meets RDTA tank. Best of both worlds." },
    { id: 42, name: "Valyrian 3 Sub-Ohm Tank", brand: "Uwell", category: "tanks", price: 480, emoji: "👑", puffs: "6ml", flavour: "Sub-Ohm", nicotine: "0mg", badge: null, inStock: true, description: "Flagship sub-ohm tank from Uwell. Massive clouds, huge flavour." },
    { id: 43, name: "Falcon King Tank", brand: "HorizonTech", category: "tanks", price: 450, emoji: "🦅", puffs: "5.5ml", flavour: "Sub-Ohm", nicotine: "0mg", badge: null, inStock: true, description: "Premium sub-ohm tank with legendary coil compatibility." },

    // MTL
    { id: 44, name: "MTL Tank Pro", brand: "Innokin", category: "mtl", price: 420, emoji: "🎯", puffs: "2ml", flavour: "Tank", nicotine: "0mg", badge: null, inStock: true, description: "Precision MTL tank for tight, cigarette-like draws." },
    { id: 45, name: "Zlide MTL Tank", brand: "Innokin", category: "mtl", price: 380, emoji: "💨", puffs: "2ml", flavour: "Tank", nicotine: "0mg", badge: "Popular", inStock: true, description: "Slide-fill MTL tank. Perfect for salt nicotine liquids." },
    { id: 46, name: "Berserker V3 MTL RTA", brand: "Vandy Vape", category: "mtl", price: 520, emoji: "🏆", puffs: "2ml", flavour: "RTA", nicotine: "0mg", badge: null, inStock: true, description: "Award-winning MTL rebuildable tank." },

    // ACCESSORIES
    { id: 47, name: "VAPID Carry Case", brand: "Vapid", category: "accessories", price: 220, emoji: "🧳", puffs: "Universal", flavour: "Case", nicotine: "0mg", badge: "New", inStock: true, description: "Premium carry case with VAPID branding. Fits mods, pods, and liquids." },
    { id: 48, name: "18650 Battery (Pair)", brand: "Samsung", category: "accessories", price: 250, emoji: "🔋", puffs: "3000mAh", flavour: "Battery", nicotine: "0mg", badge: null, inStock: true, description: "Genuine Samsung 30Q 18650 batteries. Pair." }
];

/* ============================================
   STATE
============================================ */
let cart = JSON.parse(localStorage.getItem('vapidCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('vapidWishlist')) || [];
let activeFilters = {
    categories: [],
    brands: [],
    nicotine: [],
    minPrice: 0,
    maxPrice: 99999,
    inStock: false
};
let currentSort = 'latest';

/* ============================================
   AGE GATE
============================================ */
function initAgeGate() {
    const gate = document.getElementById('age-gate');
    if (!gate) return;
    if (localStorage.getItem('vapidAgeVerified') === 'true') {
        gate.classList.add('hidden');
    }
}

function confirmAge() {
    localStorage.setItem('vapidAgeVerified', 'true');
    const gate = document.getElementById('age-gate');
    if (gate) gate.classList.add('hidden');
}

function denyAge() {
    alert('You must be 18 or older to enter VAPID.');
    window.location.href = 'https://www.google.com';
}

/* ============================================
   HERO SLIDESHOW
============================================ */
function initHeroSlideshow() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const slidesContainer = document.getElementById('hero-slides');
    const dotsContainer = document.getElementById('hero-dots');
    if (!slidesContainer || !dotsContainer) return;

    heroSlides.forEach((slide, i) => {
        const el = document.createElement('div');
        el.className = 'hero-slide' + (i === 0 ? ' active' : '');

        if (slide.type === 'video') {
            const video = document.createElement('video');
            video.className = 'hero-video';
            video.muted = true;
            video.loop = true;
            video.playsInline = true;
            video.setAttribute('muted', '');
            video.setAttribute('playsinline', '');
            if (slide.poster) video.poster = slide.poster;
            const source = document.createElement('source');
            source.src = slide.url;
            source.type = 'video/mp4';
            video.appendChild(source);
            el.appendChild(video);
        } else {
            el.style.backgroundImage = `url('${slide.url}')`;
        }

        slidesContainer.appendChild(el);

        const dot = document.createElement('button');
        dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Slide ${i + 1}`);
        dot.onclick = () => goToSlide(i);
        dotsContainer.appendChild(dot);
    });

    let current = 0;
    let interval;

    function goToSlide(index) {
        const slides = document.querySelectorAll('.hero-slide');
        const dots = document.querySelectorAll('.hero-dot');
        if (!slides.length) return;

        slides.forEach((s, i) => s.classList.toggle('active', i === index));
        dots.forEach((d, i) => d.classList.toggle('active', i === index));

        const activeVideo = slides[index].querySelector('video');
        if (activeVideo) activeVideo.play().catch(() => {});

        current = index;
    }

    function next() { goToSlide((current + 1) % heroSlides.length); }
    function start() { stop(); interval = setInterval(next, 5500); }
    function stop() { if (interval) clearInterval(interval); }

    hero.addEventListener('mouseenter', stop);
    hero.addEventListener('mouseleave', start);

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) stop();
        else start();
    });

    start();
}

/* ============================================
   CART
============================================ */
function saveCart() {
    localStorage.setItem('vapidCart', JSON.stringify(cart));
    updateCartUI();
}

function addToCart(productId, event) {
    if (event) { event.stopPropagation(); event.preventDefault(); }
    const product = products.find(p => p.id === productId);
    if (!product || !product.inStock) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) existing.quantity += 1;
    else cart.push({ ...product, quantity: 1 });

    saveCart();
    showToast(`${product.name} added to cart`);

    if (event?.currentTarget) {
        const btn = event.currentTarget;
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i>';
        btn.style.background = 'var(--ice-bright)';
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
        }, 1000);
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
}

function updateQuantity(productId, newQty) {
    const qty = parseInt(newQty);
    if (qty <= 0) return removeFromCart(productId);
    const item = cart.find(i => i.id === productId);
    if (item) { item.quantity = qty; saveCart(); }
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}
function getCartCount() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function updateCartUI() {
    document.querySelectorAll('#cart-count').forEach(b => {
        const count = getCartCount();
        b.textContent = count;
        b.style.display = count > 0 ? 'flex' : 'none';
    });

    const container = document.getElementById('cart-items');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-bag"></i>
                <p>Your cart is empty</p>
                <a href="shop.html" class="btn" onclick="closeCart()">Browse Shop</a>
            </div>
        `;
    } else {
        container.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-img">${item.emoji}</div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">P${item.price.toFixed(2)}</p>
                    <div class="cart-item-qty">
                        <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `).join('');
    }

    const totalEl = document.getElementById('cart-total');
    if (totalEl) totalEl.textContent = `P${getCartTotal().toFixed(2)}`;
}

function toggleCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (!drawer) return;
    drawer.classList.toggle('open');
    if (overlay) overlay.classList.toggle('open');
    document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
}

function closeCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
}

function checkoutCart() {
    if (cart.length === 0) { alert('Your cart is empty.'); return; }

    const items = cart.map(i => `• ${i.quantity}× ${i.name} (${i.brand}) — P${(i.price * i.quantity).toFixed(2)}`).join('\n');
    const total = `P${getCartTotal().toFixed(2)}`;
    const message = `Hi VAPID! 🛒\n\nI'd like to order:\n\n${items}\n\nTotal: ${total}\n\nPlease confirm stock and delivery. Thanks!`;

    const phone = '26771234567';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

/* ============================================
   WISHLIST
============================================ */
function toggleWishlist(productId, event) {
    if (event) { event.stopPropagation(); event.preventDefault(); }
    const idx = wishlist.indexOf(productId);
    if (idx > -1) wishlist.splice(idx, 1);
    else wishlist.push(productId);
    localStorage.setItem('vapidWishlist', JSON.stringify(wishlist));
    updateWishlistUI();
    showToast(idx > -1 ? 'Removed from wishlist' : 'Added to wishlist');
}

function updateWishlistUI() {
    document.querySelectorAll('[data-wishlist]').forEach(btn => {
        const id = parseInt(btn.dataset.wishlist);
        btn.classList.toggle('active', wishlist.includes(id));
    });
}

/* ============================================
   FILTERS + SORT
============================================ */
function getFilteredProducts() {
    let list = [...products];

    if (activeFilters.categories.length > 0)
        list = list.filter(p => activeFilters.categories.includes(p.category));
    if (activeFilters.brands.length > 0)
        list = list.filter(p => activeFilters.brands.includes(p.brand));
    if (activeFilters.nicotine.length > 0)
        list = list.filter(p => activeFilters.nicotine.includes(p.nicotine));
    if (activeFilters.inStock)
        list = list.filter(p => p.inStock);

    list = list.filter(p => p.price >= activeFilters.minPrice && p.price <= activeFilters.maxPrice);

    if (currentSort === 'price-low') list.sort((a, b) => a.price - b.price);
    else if (currentSort === 'price-high') list.sort((a, b) => b.price - a.price);
    else if (currentSort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
    else list.sort((a, b) => b.id - a.id);

    return list;
}

function applyFilters() { renderShop(); updateFilterCounts(); }

function toggleFilterCheckbox(type, value, checked) {
    if (checked) activeFilters[type].push(value);
    else activeFilters[type] = activeFilters[type].filter(v => v !== value);
    applyFilters();
}

function applyPriceFilter() {
    activeFilters.minPrice = parseFloat(document.getElementById('min-price')?.value) || 0;
    activeFilters.maxPrice = parseFloat(document.getElementById('max-price')?.value) || 99999;
    applyFilters();
}

function clearFilters() {
    activeFilters = { categories: [], brands: [], nicotine: [], minPrice: 0, maxPrice: 99999, inStock: false };
    document.querySelectorAll('.filter-option input').forEach(i => i.checked = false);
    const minEl = document.getElementById('min-price');
    const maxEl = document.getElementById('max-price');
    if (minEl) minEl.value = '';
    if (maxEl) maxEl.value = '';
    applyFilters();
}

function changeSort(value) { currentSort = value; renderShop(); }

function updateFilterCounts() {
    document.querySelectorAll('[data-count-category]').forEach(el => {
        const cat = el.dataset.countCategory;
        el.textContent = products.filter(p => p.category === cat).length;
    });
    document.querySelectorAll('[data-count-brand]').forEach(el => {
        const brand = el.dataset.countBrand;
        el.textContent = products.filter(p => p.brand === brand).length;
    });
}

/* ============================================
   RENDER SHOP GRID
============================================ */
function renderShop(limit) {
    const grid = document.getElementById('shop-grid');
    if (!grid) return;

    let list = getFilteredProducts();
    if (limit) list = list.slice(0, limit);

    grid.innerHTML = '';

    if (list.length === 0) {
        grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--silver);padding:80px 20px;font-family:var(--mono);font-size:0.85rem;letter-spacing:0.15em;">NO PRODUCTS MATCH YOUR FILTERS</p>`;
        updateResultsCount(0);
        return;
    }

    list.forEach(p => {
        const isWished = wishlist.includes(p.id);
        let badgeHTML = '';
        if (!p.inStock) badgeHTML = '<span class="product-badge danger">Sold Out</span>';
        else if (p.badge) badgeHTML = `<span class="product-badge">${p.badge}</span>`;

        grid.innerHTML += `
            <div class="product-card" onclick="goToProduct(${p.id})">
                <div class="product-img">
                    ${badgeHTML}
                    <button class="product-wishlist ${isWished ? 'active' : ''}" data-wishlist="${p.id}" onclick="toggleWishlist(${p.id}, event)" aria-label="Wishlist">
                        <i class="fa${isWished ? 's' : 'r'} fa-heart"></i>
                    </button>
                    <span class="product-emoji">${p.emoji}</span>
                </div>
                <div class="product-info">
                    <span class="product-brand">${p.brand}</span>
                    <h3>${p.name}</h3>
                    <div class="product-meta">
                        <span class="product-tag-pill">${p.puffs}</span>
                        <span class="product-tag-pill">${p.nicotine}</span>
                    </div>
                    <div class="product-footer">
                        <div class="product-price">P${p.price.toFixed(0)}</div>
                        <button class="product-add" onclick="addToCart(${p.id}, event)" ${!p.inStock ? 'disabled' : ''} aria-label="Add to cart">
                            <i class="fas fa-${p.inStock ? 'plus' : 'times'}"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    updateResultsCount(list.length);
    updateWishlistUI();
}

function updateResultsCount(count) {
    document.querySelectorAll('[data-results]').forEach(el => el.textContent = count);
}

function goToProduct(id) { window.location.href = `product.html?id=${id}`; }

/* ============================================
   MOBILE MENU / FILTERS
============================================ */
function toggleMobileMenu() {
    const nav = document.querySelector('nav');
    const overlay = document.querySelector('.mobile-overlay');
    if (nav) nav.classList.toggle('open');
    if (overlay) overlay.classList.toggle('open');
    document.body.style.overflow = nav?.classList.contains('open') ? 'hidden' : '';
}

function toggleMobileFilters() {
    const filters = document.querySelector('.filters-sidebar');
    if (filters) filters.classList.toggle('open');
}

/* ============================================
   PRODUCT DETAIL PAGE
============================================ */
function initProductDetail() {
    const container = document.getElementById('product-detail');
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id')) || 1;
    const p = products.find(x => x.id === id);
    if (!p) { window.location.href = 'shop.html'; return; }

    document.getElementById('bc-category').textContent = p.category;
    document.getElementById('bc-product').textContent = p.name;
    document.getElementById('product-emoji').textContent = p.emoji;
    document.getElementById('product-name').textContent = p.name;
    document.getElementById('product-brand').textContent = p.brand;
    document.getElementById('product-price').textContent = `P${p.price.toFixed(2)}`;
    document.getElementById('product-description').textContent = p.description;

    document.getElementById('product-specs').innerHTML = `
        <div class="spec-item"><span class="label">Puffs / Size</span><span class="value">${p.puffs}</span></div>
        <div class="spec-item"><span class="label">Nicotine</span><span class="value">${p.nicotine}</span></div>
        <div class="spec-item"><span class="label">Flavour</span><span class="value">${p.flavour}</span></div>
        <div class="spec-item"><span class="label">Stock</span><span class="value" style="color:${p.inStock ? 'var(--ice)' : 'var(--danger)'}">${p.inStock ? 'In Stock' : 'Sold Out'}</span></div>
    `;

    const addBtn = document.getElementById('product-add-btn');
    if (addBtn) {
        if (!p.inStock) {
            addBtn.disabled = true;
            addBtn.innerHTML = '<i class="fas fa-times"></i> Sold Out';
        } else {
            addBtn.onclick = (e) => addToCart(p.id, e);
        }
    }

    const wishBtn = document.getElementById('product-wishlist-btn');
    if (wishBtn) {
        wishBtn.dataset.wishlist = p.id;
        if (wishlist.includes(p.id)) wishBtn.classList.add('active');
        wishBtn.onclick = (e) => toggleWishlist(p.id, e);
    }

    const related = document.getElementById('related-grid');
    if (related) {
        const relatedList = products.filter(x => x.category === p.category && x.id !== p.id).slice(0, 4);
        relatedList.forEach(r => {
            related.innerHTML += `
                <div class="product-card" onclick="goToProduct(${r.id})">
                    <div class="product-img">
                        <span class="product-emoji">${r.emoji}</span>
                    </div>
                    <div class="product-info">
                        <span class="product-brand">${r.brand}</span>
                        <h3>${r.name}</h3>
                        <div class="product-footer" style="border:none;padding-top:8px;">
                            <div class="product-price">P${r.price.toFixed(0)}</div>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    document.title = `${p.name} | VAPID`;
}

/* ============================================
   TOAST
============================================ */
function showToast(message) {
    let toast = document.getElementById('vapid-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'vapid-toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), 2200);
}

/* ============================================
   FORMS
============================================ */
function submitContact(e) {
    e.preventDefault();
    const name = document.getElementById('c-name')?.value || 'friend';
    alert(`Thanks, ${name}! Your message has been sent to VAPID.\n\nWe'll reply within 24 hours.`);
    e.target.reset();
}

/* ============================================
   INIT
============================================ */
document.addEventListener('DOMContentLoaded', () => {
    initAgeGate();
    initHeroSlideshow();

    if (document.getElementById('shop-grid')) {
        const limit = document.body.dataset.limit ? parseInt(document.body.dataset.limit) : undefined;
        renderShop(limit);
    }

    initProductDetail();
    updateCartUI();
    updateWishlistUI();
    updateFilterCounts();

    document.querySelectorAll('nav a').forEach(a => {
        a.addEventListener('click', () => {
            if (window.innerWidth <= 900) {
                const nav = document.querySelector('nav');
                const overlay = document.querySelector('.mobile-overlay');
                if (nav) nav.classList.remove('open');
                if (overlay) overlay.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    });
});
