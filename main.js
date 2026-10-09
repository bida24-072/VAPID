/* ============================================
   VAPID — Main Script
============================================ */

/* ============================================
   HERO SLIDESHOW DATA
   Change slides here. Each slide has: type, image/video, and duration.
   - type: "image" or "video"
   - For "image": url
   - For "video": url (mp4) — will autoplay, mute, loop
============================================ */
const heroSlides = [
    {
        type: "video",
        url: "https://videos.pexels.com/video-files/3196481/3196481-hd_1920_1080_25fps.mp4",
        poster: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
    },
    {
        type: "image",
        url: "https://images.unsplash.com/photo-1550995694-3f5f4a7e1bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
        poster: null
    },
    {
        type: "video",
        url: "https://videos.pexels.com/video-files/5057526/5057526-hd_1920_1080_25fps.mp4",
        poster: "https://images.unsplash.com/photo-1614735241165-6756e1df61ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
    },
    {
        type: "image",
        url: "https://images.unsplash.com/photo-1603905470540-1a0a66e06b3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
        poster: null
    }
];

/* ============================================
   PRODUCT DATA — 48 products
============================================ */
const products = [
    // DISPOSABLES
    { id: 1, name: "Blue Razz Ice 3500", brand: "Elf Bar", category: "disposables", price: 220, emoji: "💨", puffs: "3500", flavour: "Blue Raspberry", nicotine: "20mg", badge: "Best Seller", inStock: true, description: "Elf Bar's signature blue raspberry with an icy finish. Smooth draw, consistent
