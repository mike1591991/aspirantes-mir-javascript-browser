const menu = [
  {
    name: 'Home',
    link: '/',
    items: []
  },
  {
    name: 'About',
    link: '/about',
    items: []
  },
  {
    name: 'Products',
    link: '/products',
    items: [
      {
        name: 'Product 1',
        link: '/products/1',
        items: []
      },
      {
        name: 'Product 2',
        link: '/products/2',
        items: [
          {
            name: 'Product 2.1',
            link: '/products/2/1',
            items: []
          },
        ]
      },
    ]
  },
  {
    name: 'Services',
    link: '/services',
    items: [
      {
        name: 'Service 1',
        link: '/services/1',
        items: [
          {
            name: 'Service 1.1',
            link: '/services/1/1',
            items: []
          },
        ]
      },
      {
        name: 'Service 2',
        link: '/services/2',
        items: [
          {
            name: 'Service 2.1',
            link: '/services/2/1',
            items: []
          },
          {
            name: 'Service 2.2',
            link: '/services/2/2',
            items: []
          },
        ]
      },
    ]
  },
];
const container = document.getElementById('container');

const creaLi = (data) => {
  const li = document.createElement('li');
  const link = document.createElement('a');
  link.setAttribute('href', '#');
  link.innerHTML = `${data.name}`;
  li.appendChild(link);
  if(data.items) li.appendChild(creaUl(data.items));
  return li;
};

const creaUl = (data) => {
  const ul = document.createElement('ul');
  data.forEach(d => {
  if(!data.items) ul.appendChild(creaLi(d));
  });
  return ul;
};

document.getElementById('container').appendChild(creaUl(menu));
