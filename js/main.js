/*
  main.js
  Script para carregar os projetos dinamicamente a partir do arquivo JSON.
  Para adicionar/editar projetos, modifique o arquivo projects/projects.json
*/

document.addEventListener('DOMContentLoaded', () => {
  const projectsContainer = document.getElementById('projects-container');

  // Função para criar um card de projeto
  function createProjectCard(project) {
    const card = document.createElement('article');
    card.className = 'project-card';

    // Imagem do projeto
    const img = document.createElement('img');
    img.className = 'project-thumb';
    img.src = project.image;
    img.alt = project.title;

    // Conteúdo do card
    const content = document.createElement('div');
    content.className = 'project-content';

    const title = document.createElement('h3');
    title.className = 'project-title';
    title.textContent = project.title;

    const desc = document.createElement('p');
    desc.className = 'project-description';
    desc.textContent = project.description;

    const link = document.createElement('a');
    link.className = 'project-link';
    link.href = project.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Ver projeto';

    content.appendChild(title);
    content.appendChild(desc);
    content.appendChild(link);

    card.appendChild(img);
    card.appendChild(content);

    return card;
  }

  // Carregar projetos do JSON
  fetch('projects/projects.json')
    .then(response => response.json())
    .then(projects => {
      projects.forEach(project => {
        const card = createProjectCard(project);
        projectsContainer.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Erro ao carregar projetos:', error);
      projectsContainer.textContent = 'Não foi possível carregar os projetos no momento.';
    });
});