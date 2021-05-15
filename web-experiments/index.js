(function () {
  const listContainer = document.getElementById('project-list');
  const getTemplate = ({ title, annotation, url }) => {
    return `<div class="description">
    <div class="title">
      <a href="${url}">${title}</a>
    </div>
    <div class="annotation">${annotation}</div>
  </div>`;
  };

  const projects = [
    {
      title: 'Google Pixel charging',
      annotation: 'Google Pixel charging animation',
      url: 'experiments/pixel-charging',
    },
    {
      title: 'Watch face',
      annotation: 'Watch face built using HTML5 Canvas',
      url: 'experiments/watch-face',
    },
    {
      title: 'Curve fitting',
      annotation:
        'Using mathematical functions to best fit a series of data points',
      url: 'experiments/curve-fitting',
    },
    {
      title: 'Todo List',
      annotation: 'Todo list built with React',
      url: 'https://shettypuneeth.github.io/todoapp/',
    },
    {
      title: 'Content placeholder',
      annotation: 'Animated placeholder card',
      url: 'https://shettypuneeth.github.io/content-placeholder/',
    },
    {
      title: 'Fancy hover effect',
      annotation: 'Hover effects with just CSS',
      url: 'experiments/grid-hover-effect',
    },
    {
      title: 'Simple slider',
      annotation: 'Flexbox slider',
      url: 'experiments/slider',
    },
  ];

  projects.forEach((p) => {
    const node = document.createElement('li');
    node.setAttribute('class', 'experiment');
    const innerHTML = getTemplate(p);
    node.innerHTML = innerHTML;
    listContainer.appendChild(node);
  });
})();
