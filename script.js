fetch('./assets/books.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        });

        const main = document.createElement('main');
        const body = document.body;
        body.appendChild(main);

        // in main = h1, div ( div(img), div(h3,h2,h4, div(a, buttom)) )

        const header = document.createElement('h1');
        main.appendChild(header);
        header.textContent = 'Book Catalog';
        header.classList.add('main-title')

