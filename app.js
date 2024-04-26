document.addEventListener("DOMContentLoaded", function() {
    const servicesGrid = document.getElementById('servicesGrid');
    const gridImagesContainer = document.querySelector('.gridImages');

    const projects = [
        {
            id: 1,
            title: "Pharmeasy E-Commerce",
            description: "Pharmaeasy is an online medical shop for Mamburao, Occidental Mindoro resident.",
            code_use: ["HTML", "CSS", "Bootstrap", "Php", "Laravel", "MySql"],
            img_project: "./assets/pharmaeasy.png",
            colors: ["#015958", "#FF5733", "#3498db", "#9b59b6", "#2ecc71", "#e74c3c"]
        },
        {
            id: 2,
            title: "LifeSaber Website",
            description: "It's a guide for survival during disaster.",
            code_use: ["HTML", "CSS", "Bootstrap", "Node.js", "React.js", "MySql"],
            img_project: "./assets/lifesaber.png",
            colors: ["#015958", "#FF5733", "#3498db", "#9b59b6", "#2ecc71", "#e74c3c"]
        },
        {
            id: 3,
            title: "Survey App",
            description: "This is the description of the web app project.",
            code_use: ["HTML", "CSS", "Bootstrap", "Php", "Laravel", "MySql"],
            img_project: "./assets/apps.jpg",
            colors: ["#015958", "#FF5733", "#3498db", "#9b59b6", "#2ecc71", "#e74c3c"]
        },
        {
            id: 4,
            title: "Oplant App",
            description: "This is an offline app using custom API to know more about Plants",
            code_use: ["Flutter", "Photoshop", "Custom API"],
            img_project: "./assets/apps.jpg",
            colors: ["#015958", "#FF5733", "#3498db", "#9b59b6", "#2ecc71", "#e74c3c"]
        },
        {
            id: 5,
            title: "Kids Learning App",
            description: "This is an offline app using custom API for educational purposes",
            code_use: ["Flutter", "Photoshop", "Custom API"],
            img_project: "./assets/apps.jpg",
            colors: ["#015958", "#FF5733", "#3498db", "#9b59b6", "#2ecc71", "#e74c3c"]
        },
        {
            id: 6,
            title: "Evaluer Restaurant/Hotel Review App",
            description: "This is an online App dedicated to check if the restaurant/hotel is following covid protocals and good customer services for the customer",
            code_use: ["Flutter", "Photoshop", "Firebase"],
            img_project: "./assets/evaluer.png",
            colors: ["#015958", "#FF5733", "#3498db", "#9b59b6", "#2ecc71", "#e74c3c"]
        }

    ];


    function updateServicesGrid(projectId) {
 
        const project = projects.find(project => project.id === projectId);
        if (project) {

            servicesGrid.innerHTML = '';

  
            const serviceGridElement = document.createElement('div');
            serviceGridElement.classList.add('servicesGrid');


            const mainImageElement = document.createElement('img');
            mainImageElement.setAttribute('src', project.img_project);
            mainImageElement.setAttribute('alt', project.title);

  
            const descriptionServicesElement = document.createElement('div');
            descriptionServicesElement.classList.add('descriptServices');

            descriptionServicesElement.innerHTML = `
                <div class="containerServices">
                <h1 class="descriptServices">${project.title}</h1>
                <p class="serviceDescript">${project.description}</p>
                <div class="toolsUse">
                    ${project.code_use.map((code, index) => `<span style="background-color: ${project.colors[index]}">${code}</span>`).join('')}
                </div>
                </div>
            `;

            // Append main image and description services to service grid
            serviceGridElement.appendChild(mainImageElement);
            serviceGridElement.appendChild(descriptionServicesElement);

            servicesGrid.appendChild(serviceGridElement);
        }
    }

    // Populate gridImages section with images for all projects
    projects.forEach(project => {
        // Create image element
        const imageElement = document.createElement('img');
        imageElement.setAttribute('src', project.img_project);
        imageElement.setAttribute('alt', project.title);

        imageElement.addEventListener('click', function() {
            updateServicesGrid(project.id);
        });

        gridImagesContainer.appendChild(imageElement);
    });


    updateServicesGrid(1);
});
