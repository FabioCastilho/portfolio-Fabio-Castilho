// Filtro de projetos]

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const target = button.dataset.target;
        const sections = document.querySelectorAll('.card');
        sections.forEach(section => {
          target === 'all' || section.id === target ? section.style.display = 'block' : section.style.display = 'none';
        });
      });
    });
  });