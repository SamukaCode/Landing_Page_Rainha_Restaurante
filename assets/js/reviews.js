/**
 * Google Reviews Carousel Logic
 * Rainha Restaurante
 */

const reviews = [
    { name: "Maria de Lourdes Soares", avatar: "M", bg: "#5c6bc0", text: "Sempre estou em Rio claro, amo saborear as delícias da Rainha, tudo feito com carinho, a dona Cida e equipe parabéns. o cupim é divino!" },
    { name: "Patrícia Helena Venâncio", avatar: "P", bg: "#7e57c2", text: "A comida é muito boa, a sobremesa também, é meu restaurante preferido! 5 estrelas!" },
    { name: "Murilo Rodrigues", avatar: "MR", bg: "#4285f4", text: "Comida caseira saborosa com carnes de churrasco muito saborosas. Ambiente muito agradável." },
    { name: "Gabriel Abbade dos Santos", avatar: "GA", bg: "#db4437", text: "A qualidade da comida é impressionante. Tem churrasco mas de vez em quando também tem peixes maravilhosos. Gosto muito do atendimento." },
    { name: "Valéria", avatar: "V", bg: "#546e7a", text: "O melhor restaurante de Rio Claro e região. Variedades de saladas, comidas com qualidade. Espaço agradável com ótimo atendimento. Recomendo que venham saborear desta culinária." },
    { name: "Julio Cesar Reis", avatar: "J", bg: "#ef5350", text: "Ótima comida, lugar agradável e churrasco top ! Muito bom … 🤩" },
    { name: "Maurício Farias de Oliveira", avatar: "M", bg: "#66bb6a", text: "A comida é excelente! As carnes servidas na área de churrasco são muito saborosas, macias e servidas no ponto certo." },
    { name: "Miguel (BlackDebs)", avatar: "M", bg: "#ffa726", text: "Uma variedade enorme de opções. Preço super justo, ótimo atendimento e qualidade da comida. Recomendo!" },
    { name: "Junior Marques", avatar: "J", bg: "#26c6da", text: "Para mim, umas das comidas mais saborosas da Cidade. Amplo buffet de salada e comida, além de contar como muitas opções de carnes (churrasco). Sucos, sobremesas. Vale muito a pena" },
    { name: "Érico Macêdo", avatar: "E", bg: "#ab47bc", text: "Cardápio incrível! Uma variedade gigantesca de pratos e saladas. Agrada desde só carnívoro ao vegano. Vale a pena conhecer quando for a Rio Claro. O ambiente é espaçoso e limpo. Possui estacionamento próximo, caso necessite!" },
    { name: "Ricardo Pesce", avatar: "R", bg: "#f44336", text: "Restaurante com grande diversidade de alimentos. Atende a todos os gostos. Na churrasqueira é possível pegar qualquer opção de carne. Preço é coerente com a qualidade ofertada. Recomendo e sempre volto." },
    { name: "Rogerio Lambert", avatar: "R", bg: "#4caf50", text: "Restaurante por quilo excelente. Muitas opções e churrasco bem feito além do atendimento de qualidade mesmo quando cheio. E o churrasqueiro é uma pessoa fantástico, sempre animado e solícito." },
    { name: "Marcos Freire", avatar: "M", bg: "#2196f3", text: "Excelente para refeição e com uma enorme variedade. Se encontra de tudo, desde de pista frias e quentes, como também churrascos." },
    { name: "Jamil Fernando", avatar: "J", bg: "#ff9800", text: "Depois de 20 anos voltei. Maravilhosa comida e muita variedades" },
    { name: "Francisco Fontes", avatar: "F", bg: "#9c27b0", text: "A comida é bem variada e muito bem preparada. Os proprietários e colaboradores são bastante atenciosos e gentis. Dispõe de estacionamento próprio" },
    { name: "Everson", avatar: "E", bg: "#00bcd4", text: "Lugar agradável com muita variedade comida e um preço honesto. Quem estiver passando pela cidade de Rio Claro-SP, saiba que apreciará um belo almoço. Recomendo!" },
    { name: "Ana Paula Ferrao", avatar: "A", bg: "#e91e63", text: "Lindas e saborosas opções. Buffet self-service. Tudo muito limpo, organizado e ótimo atendimento. No final vc é surpreendido com chá de gengibre ou café com massinha frita com canela. Ótimo atendimento." },
    { name: "Fátima Fernandes", avatar: "F", bg: "#795548", text: "Ambiente muito confortável. Comida da melhor qualidade e variedade... Atendimento especializado! Adoro!" },
    { name: "Silvia Anaruma", avatar: "S", bg: "#607d8b", text: "Bom ambiente, ótimo atendimento, excelente comida e variedade. Eu recomendo." },
    { name: "Raquel Grosso", avatar: "R", bg: "#8bc34a", text: "Sou cliente a bastante tempo deste restaurante e a comida é de excelente qualidade, ambiente agradável, familiar e um atendimento de primeira , super recomendo." },
    { name: "Sergio Mergulhão", avatar: "S", bg: "#fdd835", text: "Comida de ótima qualidade, muito saudável e saborosa. Muitas opções para todos os gostos. Ambiente amplo, agradável e confortável. Atendimento muito cordial." },
    { name: "Raphael Domingues", avatar: "R", bg: "#009688", text: "Recomendo, comida muito boa, um cardápio super variado e ótimo atendimento!" }
];

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    const container = document.getElementById('container');
    const progressBar = document.getElementById('progressBar');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (!slider || !container) return;

    let currentSlide = 0;
    let autoSlideInterval;
    let autoSlidePaused = false;
    const totalReviews = reviews.length;

    // Render Reviews
    reviews.forEach((review, index) => {
        const card = document.createElement('div');
        card.className = 'review-card';
        card.innerHTML = `
            <div class="review-header">
                <div class="review-avatar" style="background: ${review.bg}">${review.avatar}</div>
                <div class="review-info">
                    <div class="review-author">${review.name}</div>
                </div>
            </div>
            <svg class="google-card-icon" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div class="stars">
                <span class="star">★</span><span class="star">★</span><span class="star">★</span><span class="star">★</span><span class="star">★</span>
            </div>
            <div class="review-text">${review.text}</div>
        `;
        slider.appendChild(card);

        // Add dots (limit to 10 for cleaner UI)
        if (index < 10) {
            const dot = document.createElement('div');
            dot.className = 'progress-dot' + (index === 0 ? ' active' : '');
            dot.addEventListener('click', () => { 
                currentSlide = index; 
                updateSlider(); 
                pauseAutoSlide(); 
            });
            progressBar.appendChild(dot);
        }
    });

    const dots = document.querySelectorAll('.progress-dot');

    // Drag & Swipe Logic
    let isDragging = false;
    let startX = 0;
    let currentX = 0;
    let dragOffset = 0;

    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX;
        slider.style.transition = 'none';
        pauseAutoSlide();
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        currentX = e.pageX;
        dragOffset = currentX - startX;
        
        const card = slider.children[0];
        if (!card) return;
        const cardWidth = card.offsetWidth;
        const gap = 20;
        
        const currentOffset = -currentSlide * (cardWidth + gap);
        slider.style.transform = `translateX(${currentOffset + dragOffset}px)`;
    });

    window.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        slider.style.transition = 'transform 0.4s ease';
        
        if (Math.abs(dragOffset) > 100) {
            if (dragOffset > 0) slide(-1);
            else slide(1);
        } else {
            updateSlider();
        }
        dragOffset = 0;
    });

    // Touch Swipe
    let touchStartX = 0;
    container.addEventListener('touchstart', (e) => { 
        touchStartX = e.changedTouches[0].screenX; 
        pauseAutoSlide(); 
    }, {passive: true});

    container.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) slide(1);
            else slide(-1);
        }
    }, {passive: true});

    function updateSlider() {
        const isMobile = window.innerWidth <= 768;
        const card = slider.children[0];
        if (!card) return;

        const cardWidth = card.offsetWidth;
        const gap = 20; 
        
        const visibleCards = isMobile ? 1 : (window.innerWidth <= 1024 ? 2 : 3);
        const maxSlide = reviews.length - visibleCards;
        
        if (currentSlide < 0) currentSlide = maxSlide;
        if (currentSlide > maxSlide) currentSlide = 0;

        slider.style.transform = `translateX(-${currentSlide * (cardWidth + gap)}px)`;
        
        // Update dots
        if (dots.length > 0) {
            const activeDotIndex = Math.min(Math.floor(currentSlide / (totalReviews / dots.length)), dots.length - 1);
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === activeDotIndex);
            });
        }
    }

    function slide(direction) {
        currentSlide += direction;
        updateSlider();
    }

    if (prevBtn) prevBtn.addEventListener('click', () => { slide(-1); pauseAutoSlide(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { slide(1); pauseAutoSlide(); });

    function pauseAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlidePaused = true;
        setTimeout(() => { 
            autoSlidePaused = false; 
            startAutoSlide(); 
        }, 10000);
    }

    function startAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            if (!autoSlidePaused) slide(1);
        }, 5000);
    }

    startAutoSlide();
    window.addEventListener('resize', updateSlider);
    updateSlider();
});
