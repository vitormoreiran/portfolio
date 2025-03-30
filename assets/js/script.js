document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const projectsContainer = document.querySelector('.projects-container');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalDetails = document.getElementById('modal-details');
    const modalLink = document.getElementById('modal-link');
    const closeModalBtn = document.querySelector('.modal-close');
    const languageSelector = document.getElementById('language-selector');
    
    let currentLanguage = languageSelector.value || 'en';

    // Function to check visible sections
    function checkSections() {
        let scrollPos = window.scrollY;
        sections.forEach(section => {
            if (scrollPos >= section.offsetTop - 150 && scrollPos < section.offsetTop + section.offsetHeight - 150) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    // Function to open modal
    function openModal(projectId) {
        fetch('assets/data/data.json')
            .then(response => response.json())
            .then(data => {
                const project = data.projects.find(p => p.id === projectId);
                const translation = project.translations[currentLanguage] || project.translations['en'];
                
                modalImage.src = project.modalImage;
                modalImage.alt = translation.title;
                modalLink.href = project.link;
                
                modalDetails.innerHTML = `
                    <h3>${translation.title}</h3>
                    <h4>${translation.subtitle}</h4>
                    <p class="modal-category">${translation.category}</p>
                    <p class="modal-description">${translation.description}</p>
                    <p class="modal-details">${translation.details}</p>
                `;
                
                modal.style.display = 'flex';
            })
            .catch(error => console.error('Error loading project details:', error));
    }

    // Function to close modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Function to render projects
    function renderProjects(language) {
        fetch('assets/data/data.json')
            .then(response => response.json())
            .then(data => {
                projectsContainer.innerHTML = '';
                
                data.projects.forEach(project => {
                    const translation = project.translations[language] || project.translations['en'];
                    
                    const card = document.createElement('div');
                    card.classList.add('project-card');
                    card.dataset.id = project.id;

                    const cardImageDiv = document.createElement('div');
                    cardImageDiv.classList.add('card-image');
                    const img = document.createElement('img');
                    img.src = project.image;
                    img.alt = translation.title;
                    cardImageDiv.appendChild(img);

                    const cardTextDiv = document.createElement('div');
                    cardTextDiv.classList.add('card-text');

                    const textContentDiv = document.createElement('div');
                    textContentDiv.classList.add('text-content');

                    const title = document.createElement('h2');
                    title.classList.add('project-title');
                    title.textContent = translation.title;

                    const subtitle = document.createElement('h3');
                    subtitle.classList.add('project-subtitle');
                    subtitle.textContent = translation.subtitle;

                    const description = document.createElement('p');
                    description.classList.add('project-description');
                    description.textContent = translation.description;

                    textContentDiv.appendChild(title);
                    textContentDiv.appendChild(subtitle);
                    textContentDiv.appendChild(description);

                    const category = document.createElement('p');
                    category.classList.add('project-category');
                    category.textContent = translation.category;

                    const button = document.createElement('button');
                    button.classList.add('cta-button-fixed');
                    button.textContent = language === 'en' ? 'DETAILS' : 
                                      language === 'pt' ? 'DETALHES' : 'DETALLES';
                    button.addEventListener('click', () => openModal(project.id));

                    cardTextDiv.appendChild(textContentDiv);
                    cardTextDiv.appendChild(category);
                    cardTextDiv.appendChild(button);

                    card.appendChild(cardImageDiv);
                    card.appendChild(cardTextDiv);

                    projectsContainer.appendChild(card);
                });
            })
            .catch(error => console.error('Error loading projects:', error));
    }

    // Event listeners
    window.addEventListener('scroll', checkSections);
    closeModalBtn.addEventListener('click', closeModal);
    
    languageSelector.addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        renderProjects(currentLanguage);
    });

    // Initialize
    checkSections();
    renderProjects(currentLanguage);
});