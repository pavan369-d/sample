document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const addImageButton = document.getElementById('addButton');
    const links = document.querySelectorAll('.nav-bar li');
    const text = document.getElementById('main-text');

    const images = [];

    function renderGallery() {
        gallery.innerHTML = '';

        images.forEach((imgSrc, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = imgSrc;
            imgElement.alt = `gallery-item-${index}`;
            gallery.appendChild(imgElement);
        });
    }

    function addImage() {
        const newImageUrl = './images/widget.png';
        if (newImageUrl) {
            alert('new widget added', newImageUrl);
            images.push(newImageUrl);
            renderGallery();
        }
    }

    addImageButton.addEventListener('click', addImage);

    links.forEach((link) => {
        link.addEventListener('click', function() {
       
            links.forEach(item => item.classList.remove('active'));

            
            this.classList.add('active');

      
            if (this.textContent === 'About Me') {
                text.className='active-li';
                text.textContent = `Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
        
                

I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...`;
            } else if (this.textContent === 'Experiences') {
                text.textContent = `
                    Experience 1: Senior Sales Executive at TechWave Solutions (2018-2021)

                    Led a team of 10 sales professionals, focusing on B2B solutions in the tech industry.
                    Increased the company's annual revenue by 25% through strategic partnerships and enhanced client relations.
                    Developed and implemented a new CRM strategy that improved customer retention by 15%.
                    Awarded "Salesperson of the Year" in 2019 for consistently exceeding sales targets.
                `;
            } else if (this.textContent === 'Recommended') {
                text.textContent = `Dave comes highly recommended by his peers for his dedication, expertise, and results-driven approach.`;
            }
        });
    });
});
