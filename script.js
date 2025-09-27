// Dados dos produtos (8 produtos para exibir em 4 linhas de 2)
const products = [
    {
        id: 1,
        name: "Bateria Moura M60GD 12V 60Ah",
        price: 299.90,
        installments: "12x de R$ 24,99 sem juros",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        category: "automotiva",
        amperage: 60,
        popular: true,
        categoryLabel: "Automotiva"
    },
    {
        id: 2,
        name: "Bateria Moura MA5-D 5Ah Moto",
        price: 149.90,
        installments: "6x de R$ 24,98 sem juros",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
        category: "moto",
        amperage: 5,
        popular: true,
        categoryLabel: "Moto"
    },
    {
        id: 3,
        name: "Bateria Moura M150BD 150Ah Pesada",
        price: 899.90,
        installments: "12x de R$ 74,99 sem juros",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
        category: "pesada",
        amperage: 150,
        popular: false,
        categoryLabel: "Pesada"
    },
    {
        id: 4,
        name: "Bateria Moura 12MB105 105Ah Náutica",
        price: 649.90,
        installments: "12x de R$ 54,16 sem juros",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        category: "nautica",
        amperage: 105,
        popular: false,
        categoryLabel: "Náutica"
    },
    {
        id: 5,
        name: "Bateria Moura M50ED 12V 50Ah",
        price: 249.90,
        installments: "10x de R$ 24,99 sem juros",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
        category: "automotiva",
        amperage: 50,
        popular: true,
        categoryLabel: "Automotiva"
    },
    {
        id: 6,
        name: "Bateria Moura MA8.6-E 8.6Ah Moto",
        price: 189.90,
        installments: "8x de R$ 23,74 sem juros",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        category: "moto",
        amperage: 8.6,
        popular: false,
        categoryLabel: "Moto"
    },
    {
        id: 7,
        name: "Bateria Moura M75LD 12V 75Ah",
        price: 349.90,
        installments: "12x de R$ 29,16 sem juros",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
        category: "automotiva",
        amperage: 75,
        popular: true,
        categoryLabel: "Automotiva"
    },
    {
        id: 8,
        name: "Bateria Moura 12MB220 220Ah Náutica",
        price: 1299.90,
        installments: "12x de R$ 108,33 sem juros",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        category: "nautica",
        amperage: 220,
        popular: false,
        categoryLabel: "Náutica"
    }
];

// Dados de veículos (simulação)
const vehicleData = {
    volkswagen: {
        gol: ['2020', '2021', '2022', '2023', '2024'],
        polo: ['2020', '2021', '2022', '2023', '2024'],
        jetta: ['2020', '2021', '2022', '2023', '2024']
    },
    chevrolet: {
        onix: ['2020', '2021', '2022', '2023', '2024'],
        cruze: ['2020', '2021', '2022', '2023', '2024'],
        tracker: ['2020', '2021', '2022', '2023', '2024']
    },
    ford: {
        ka: ['2020', '2021', '2022', '2023', '2024'],
        ecosport: ['2020', '2021', '2022', '2023', '2024'],
        ranger: ['2020', '2021', '2022', '2023', '2024']
    },
    fiat: {
        argo: ['2020', '2021', '2022', '2023', '2024'],
        uno: ['2020', '2021', '2022', '2023', '2024'],
        toro: ['2020', '2021', '2022', '2023', '2024']
    },
    toyota: {
        corolla: ['2020', '2021', '2022', '2023', '2024'],
        hilux: ['2020', '2021', '2022', '2023', '2024'],
        etios: ['2020', '2021', '2022', '2023', '2024']
    },
    honda: {
        civic: ['2020', '2021', '2022', '2023', '2024'],
        fit: ['2020', '2021', '2022', '2023', '2024'],
        hrv: ['2020', '2021', '2022', '2023', '2024']
    },
    hyundai: {
        hb20: ['2020', '2021', '2022', '2023', '2024'],
        creta: ['2020', '2021', '2022', '2023', '2024'],
        tucson: ['2020', '2021', '2022', '2023', '2024']
    },
    nissan: {
        march: ['2020', '2021', '2022', '2023', '2024'],
        versa: ['2020', '2021', '2022', '2023', '2024'],
        kicks: ['2020', '2021', '2022', '2023', '2024']
    }
};

// Estado da aplicação
let currentProducts = [...products];
let cartCount = 0;

// Elementos DOM
const menuToggle = document.querySelector('.menu-toggle');
const sidebarMenu = document.querySelector('.sidebar-menu');
const closeMenu = document.querySelector('.close-menu');
const productsGrid = document.getElementById('products-grid');
const cartCountElement = document.querySelector('.cart-count');

// Filtros
const categoryFilter = document.getElementById('category-filter');
const priceFilter = document.getElementById('price-filter');
const sortFilter = document.getElementById('sort-filter');

// Busca por veículo
const brandSelect = document.getElementById('brand');
const modelSelect = document.getElementById('model');
const yearSelect = document.getElementById('year');
const searchBtnForm = document.querySelector('.search-btn-form');

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    loadProducts();
    setupVehicleSearch();
    initializeAnimations();
}

function setupEventListeners() {
    // Menu lateral
    menuToggle.addEventListener('click', openSidebar);
    closeMenu.addEventListener('click', closeSidebar);
    
    // Clique fora do menu para fechar
    document.addEventListener('click', function(e) {
        if (!sidebarMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            closeSidebar();
        }
    });
    
    // Filtros
    categoryFilter.addEventListener('change', applyFilters);
    priceFilter.addEventListener('change', applyFilters);
    sortFilter.addEventListener('change', applyFilters);
    
    // Categorias
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            categoryFilter.value = category;
            applyFilters();
            document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // CTA buttons
    document.querySelector('.cta-btn').addEventListener('click', function() {
        document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
    });
}

function openSidebar() {
    sidebarMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    sidebarMenu.classList.remove('active');
    document.body.style.overflow = '';
}

function loadProducts() {
    productsGrid.innerHTML = '';
    
    // Exibir todos os produtos de uma vez com animação escalonada
    currentProducts.forEach((product, index) => {
        const productCard = createProductCard(product);
        productCard.style.animationDelay = `${index * 0.1}s`;
        productsGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image-container">
            <div class="category-badge">${product.categoryLabel}</div>
            <img src="${product.image}" alt="${product.name}" class="product-image" 
                 onerror="this.src='https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop'"
                 loading="lazy">
        </div>
        <div class="product-content">
            <h3 class="product-name">${product.name}</h3>
            <div class="price-section">
                <div class="product-price">R$ ${formatPrice(product.price)}</div>
                <div class="product-installments">${product.installments}</div>
            </div>
            <div class="warranty-badge">Garantia Moura inclusa</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})" aria-label="Adicionar ${product.name} ao carrinho">
                Adicionar ao carrinho
            </button>
        </div>
    `;
    return card;
}

function formatPrice(price) {
    return price.toFixed(2).replace('.', ',');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    cartCount++;
    updateCartCount();
    
    // Feedback visual no botão
    const button = event.target;
    const originalText = button.textContent;
    const originalBackground = button.style.background;
    
    button.textContent = 'Adicionado!';
    button.style.background = 'linear-gradient(135deg, #10B981, #059669)';
    button.disabled = true;
    
    // Animação do carrinho
    animateCartIcon();
    
    // Restaurar botão após delay
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = originalBackground;
        button.disabled = false;
    }, 2000);
    
    // Simular redirecionamento ou ação específica
    console.log(`Produto ${product.name} adicionado ao carrinho`);
    
    // Aqui você pode adicionar a lógica para redirecionar para um link específico
    // window.location.href = `https://exemplo.com/produto/${productId}`;
}

function updateCartCount() {
    cartCountElement.textContent = cartCount;
    cartCountElement.style.transform = 'scale(1.3)';
    cartCountElement.style.background = '#10B981';
    
    setTimeout(() => {
        cartCountElement.style.transform = 'scale(1)';
        cartCountElement.style.background = '';
    }, 300);
}

function animateCartIcon() {
    const cartBtn = document.querySelector('.cart-btn');
    cartBtn.style.transform = 'scale(1.2)';
    cartBtn.style.color = '#10B981';
    
    setTimeout(() => {
        cartBtn.style.transform = 'scale(1)';
        cartBtn.style.color = '';
    }, 300);
}

function applyFilters() {
    const category = categoryFilter.value;
    const priceRange = priceFilter.value;
    const sortBy = sortFilter.value;
    
    // Filtrar produtos
    currentProducts = products.filter(product => {
        // Filtro por categoria
        if (category && product.category !== category) {
            return false;
        }
        
        // Filtro por preço
        if (priceRange) {
            const [min, max] = priceRange.split('-').map(p => p.replace('+', ''));
            const minPrice = parseInt(min);
            const maxPrice = max ? parseInt(max) : Infinity;
            
            if (product.price < minPrice || product.price > maxPrice) {
                return false;
            }
        }
        
        return true;
    });
    
    // Ordenar produtos
    switch (sortBy) {
        case 'price-asc':
            currentProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            currentProducts.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            currentProducts.sort((a, b) => b.id - a.id);
            break;
        case 'popular':
        default:
            currentProducts.sort((a, b) => {
                if (a.popular && !b.popular) return -1;
                if (!a.popular && b.popular) return 1;
                return 0;
            });
            break;
    }
    
    loadProducts();
    
    // Scroll suave para os produtos após filtrar
    setTimeout(() => {
        document.getElementById('products-grid').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }, 100);
}

function setupVehicleSearch() {
    brandSelect.addEventListener('change', function() {
        const selectedBrand = this.value;
        
        // Limpar e habilitar select de modelo
        modelSelect.innerHTML = '<option value="">Selecione o modelo</option>';
        modelSelect.disabled = !selectedBrand;
        
        // Limpar e desabilitar select de ano
        yearSelect.innerHTML = '<option value="">Primeiro selecione o modelo</option>';
        yearSelect.disabled = true;
        
        if (selectedBrand && vehicleData[selectedBrand]) {
            Object.keys(vehicleData[selectedBrand]).forEach(model => {
                const option = document.createElement('option');
                option.value = model;
                option.textContent = model.charAt(0).toUpperCase() + model.slice(1);
                modelSelect.appendChild(option);
            });
        }
    });
    
    modelSelect.addEventListener('change', function() {
        const selectedBrand = brandSelect.value;
        const selectedModel = this.value;
        
        // Limpar e habilitar select de ano
        yearSelect.innerHTML = '<option value="">Selecione o ano</option>';
        yearSelect.disabled = !selectedModel;
        
        if (selectedBrand && selectedModel && vehicleData[selectedBrand][selectedModel]) {
            vehicleData[selectedBrand][selectedModel].forEach(year => {
                const option = document.createElement('option');
                option.value = year;
                option.textContent = year;
                yearSelect.appendChild(option);
            });
        }
    });
    
    searchBtnForm.addEventListener('click', function() {
        const brand = brandSelect.value;
        const model = modelSelect.value;
        const year = yearSelect.value;
        
        if (brand && model && year) {
            // Simular busca de bateria compatível
            showNotification(`Buscando bateria compatível para ${brand.charAt(0).toUpperCase() + brand.slice(1)} ${model.charAt(0).toUpperCase() + model.slice(1)} ${year}...`);
            
            // Filtrar por categoria automotiva e redirecionar
            categoryFilter.value = 'automotiva';
            applyFilters();
            
            setTimeout(() => {
                document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
            }, 500);
        } else {
            showNotification('Por favor, selecione marca, modelo e ano do seu veículo.', 'error');
        }
    });
}

function showNotification(message, type = 'success') {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: ${type === 'error' ? '#EF4444' : '#10B981'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1002;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function initializeAnimations() {
    // Animações ao scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    document.querySelectorAll('.product-card, .category-card, .benefit-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Efeito parallax suave no hero
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image img');
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
}

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        closeSidebar();
    });
});

// Lazy loading para imagens
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Otimizações de performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplicar debounce aos filtros para melhor performance
const debouncedApplyFilters = debounce(applyFilters, 300);

// Substituir event listeners dos filtros
categoryFilter.removeEventListener('change', applyFilters);
priceFilter.removeEventListener('change', applyFilters);
sortFilter.removeEventListener('change', applyFilters);

categoryFilter.addEventListener('change', debouncedApplyFilters);
priceFilter.addEventListener('change', debouncedApplyFilters);
sortFilter.addEventListener('change', debouncedApplyFilters);

// Inicializar lazy loading
document.addEventListener('DOMContentLoaded', setupLazyLoading);

// Adicionar estados de hover melhorados via JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Melhorar interações dos cards
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('.product-card')) {
            const card = e.target.closest('.product-card');
            card.style.willChange = 'transform';
        }
    });
    
    document.addEventListener('mouseout', function(e) {
        if (e.target.closest('.product-card')) {
            const card = e.target.closest('.product-card');
            card.style.willChange = 'auto';
        }
    });
    
    // Preload de imagens críticas
    const criticalImages = [
        'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

// Service Worker para cache (opcional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
