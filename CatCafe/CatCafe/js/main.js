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
 
 // Gestionarea filtrelor pentru cataloage (produse, pisici, blog)
 const filterButtons = document.querySelectorAll('.filter-btn');
 
 filterButtons.forEach(button => {
     button.addEventListener('click', function() {
         // Elimină clasa active de la toate butoanele
         filterButtons.forEach(btn => btn.classList.remove('active'));
         
         // Adaugă clasa active butonului curent
         this.classList.add('active');
         
         // Logica de filtrare ar putea fi adăugată aici
         const filter = this.getAttribute('data-filter');
         console.log('Filtru selectat:', filter);
         
         // Implementare filtrare produse/pisici/articole în funcție de pagină
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
 setupSearch(searchArticles, '.article-card', 'h3');
});