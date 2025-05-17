document.addEventListener('DOMContentLoaded', function() {
    // Toggle pentru meniul mobil
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            // Schimbă iconița între bare și X
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Detectare pagină curentă pentru navigare
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === '/' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Gestionarea filtrelor pentru cataloage (produse)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productSections = document.querySelectorAll('.product-section');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Elimină clasa active de la toate butoanele
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adaugă clasa active butonului curent
            this.classList.add('active');
            
            // Obține filtrul selectat
            const filter = this.getAttribute('data-filter');
            console.log('Filtru selectat:', filter);
            
            // Implementare filtrare produse
            if (filter === 'all') {
                // Afișează toate secțiunile de produse
                productSections.forEach(section => {
                    section.style.display = 'block';
                });
            } else {
                // Afișează doar secțiunea care corespunde filtrului selectat
                productSections.forEach(section => {
                    if (section.id === filter) {
                        section.style.display = 'block';
                    } else {
                        section.style.display = 'none';
                    }
                });
            }
        });
    });
    
    // Gestionarea categoriilor pentru blog
    const categoryButtons = document.querySelectorAll('.category-btn');
    const articleCards = document.querySelectorAll('.article-card, .featured-article');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Previne comportamentul implicit al link-ului
            e.preventDefault();
            
            // Elimină clasa active de la toate butoanele
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adaugă clasa active butonului curent
            this.classList.add('active');
            
            // Obține categoria selectată din textul butonului
            const category = this.textContent.trim();
            console.log('Categorie selectată:', category);
            
            // Implementare filtrare articole
            if (category === 'Toate') {
                // Afișează toate articolele
                articleCards.forEach(card => {
                    card.style.display = 'block';
                });
            } else {
                // Afișează doar articolele din categoria selectată
                articleCards.forEach(card => {
                    const articleCategory = card.querySelector('.article-category').textContent.trim();
                    if (articleCategory === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }
        });
    });
    
    // Gestionarea filtrelor pentru pisici
    const catFilterButtons = document.querySelectorAll('.cats-filters .filter-btn');
    const catCards = document.querySelectorAll('.cat-card');
    
    catFilterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Elimină clasa active de la toate butoanele
            catFilterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adaugă clasa active butonului curent
            this.classList.add('active');
            
            // Obține filtrul selectat
            const filter = this.getAttribute('data-filter');
            console.log('Filtru pisici selectat:', filter);
            
            // Implementare filtrare pisici
            if (filter === 'all') {
                // Afișează toate pisicile
                catCards.forEach(card => {
                    card.style.display = 'block';
                });
            } else if (filter === 'kittens') {
                // Afișează doar puii
                catCards.forEach(card => {
                    if (card.classList.contains('kitten')) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            } else if (filter === 'adults') {
                // Afișează doar pisicile adulte
                catCards.forEach(card => {
                    if (card.classList.contains('adult')) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            } else if (filter === 'recently-adopted') {
                // Afișează doar pisicile adoptate recent
                catCards.forEach(card => {
                    if (card.classList.contains('recently-adopted')) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }
        });
    });
    
    // Funcționalitate pentru FAQ (Întrebări frecvente)
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Toggle pentru item-ul curent
            item.classList.toggle('active');
            
            // Închide celelalte item-uri (opțional)
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
    
    // Funcționalitate pentru butoanele de adopție
    const adoptButtons = document.querySelectorAll('.cat-adopt-btn');
    const adoptionModal = document.getElementById('adoptionModal');
    const catNameInput = document.getElementById('cat-name');
    
    if (adoptButtons.length > 0 && adoptionModal) {
        adoptButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Obține numele pisicii din cardul părinte
                const catCard = this.closest('.cat-card');
                const catName = catCard.querySelector('h3').textContent;
                
                // Completează numele pisicii în formular
                catNameInput.value = catName;
                
                // Afișează modalul
                adoptionModal.style.display = 'block';
            });
        });
        
        // Închide modalul când se face clic pe X
        const closeModal = document.querySelector('.close-modal');
        if (closeModal) {
            closeModal.addEventListener('click', function() {
                adoptionModal.style.display = 'none';
            });
        }
        
        // Închide modalul când se face clic în afara lui
        window.addEventListener('click', function(e) {
            if (e.target === adoptionModal) {
                adoptionModal.style.display = 'none';
            }
        });
    }
    
    // Funcționalitate pentru formularele de contact și newsletter
    const contactForm = document.querySelector('.contact-form');
    const newsletterForm = document.querySelector('.newsletter-form');
    const adoptionForm = document.querySelector('.adoption-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aici ar veni logica de trimitere a formularului de contact
            alert('Mulțumim pentru mesaj! Te vom contacta cât mai curând.');
            this.reset();
        });
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aici ar veni logica de înscriere la newsletter
            alert('Te-ai abonat cu succes la newsletter!');
            this.reset();
        });
    }
    
    if (adoptionForm) {
        adoptionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aici ar veni logica de trimitere a formularului de adopție
            alert('Cererea ta de adopție a fost trimisă! Te vom contacta în curând pentru detalii.');
            this.reset();
            adoptionModal.style.display = 'none';
        });
    }
    
    // Funcționalitate de căutare pentru produse/pisici/articole
    const searchProducts = document.getElementById('search-products');
    const searchCats = document.getElementById('search-cats');
    const searchArticles = document.getElementById('search-articles');
    
    // Funcția generică de căutare
    function setupSearch(searchInput, itemsSelector, titleSelector) {
        if (!searchInput) return;
        
        searchInput.addEventListener('keyup', function() {
            const searchTerm = this.value.toLowerCase();
            const items = document.querySelectorAll(itemsSelector);
            
            items.forEach(item => {
                const title = item.querySelector(titleSelector).textContent.toLowerCase();
                
                if (title.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
    
    // Setează căutarea pentru fiecare pagină
    setupSearch(searchProducts, '.product-card', 'h3');
    setupSearch(searchCats, '.cat-card', 'h3');
    setupSearch(searchArticles, '.article-card, .featured-article', 'h3, h2');
   });