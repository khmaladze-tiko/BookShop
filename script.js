var container = document.createElement('div');
container.classList.add('container');
document.getElementsByTagName('body')[0].prepend(container);
fetch('./assets/books.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      const bookBox = document.createElement('div');
      bookBox.classList.add('container');
      container.appendChild(bookBox);

      const img = document.createElement('img');
      img.src = element.imageLink;
      bookBox.appendChild(img);
      img.className = `book-img`;

      const author = document.createElement('p');
      author.innerText = element.author;
      bookBox.appendChild(author);
      author.className = `author-name`;

      const title = document.createElement('h2');
      title.innerText = element.title;
      bookBox.appendChild(title);
      title.className = `book-title`;


      const price = document.createElement('p');
      price.innerText = `${element.price}`;
      bookBox.appendChild(price);
      price.className = `price`;

      const description = document.createElement('p');
      description.innerText = element.description;
      bookBox.appendChild(description);
      description.className = `book-description`;

      const button = document.createElement('button');
      button.innerText = `readmore`;
      bookBox.appendChild(button);
      button.className = `show-more`;

      const addButton = document.createElement('button');
      addButton.innerText = `add card`;
      bookBox.appendChild(addButton);
      addButton.className = `add-card`;






      var modal = document.createElement("div");
      modal.className = "modal";
      modal.id = "myModal";
      container.appendChild(modal)

      var modalContent = document.createElement("div");
      modalContent.className = "modal-content";
      modal.appendChild(modalContent);

      var modalImg =document.createElement("img");
      modalImg.className ="modal-img";
      modalImg.src=`${element.imageLink}`;
      modalContent.appendChild(modalImg);
      
      var modalRightWrap = document.createElement("div")
      modalRightWrap.className = "modal-right-wrap";
      modalContent.appendChild(modalRightWrap);

      var modalAuthor = document.createElement("h2");
      modalAuthor.className = "modal-title";
      modalAuthor.innerHTML = `${element.author}`
      modalRightWrap.appendChild(modalAuthor);

      var modalText = document.createElement("p");
      modalText.className="modal-text";
      modalText.innerHTML = `${element.description}`
      modalRightWrap.appendChild(modalText);

      var close = document.createElement("span");
      close.className = "close";
      close.textContent= "X"
      modalContent.appendChild(close);

      button.onclick = function(){
        modal.style.display = "block";
    }
    close.onclick = function(){
        modal.style.display = "none";
    }





    });
  });






// fetch('./assets/books.json')
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//             const api = data;
//             api.map(function(fakeaApi) {
//                 const main = document.createElement('main');
//         const body = document.body;
//         body.appendChild(main);

//         // in main = h1, div ( div(img), div(h3,h2,h4, div(a, buttom)) )

//         const header = document.createElement('h1');
//         main.appendChild(header);
//         header.textContent = 'Book Catalog';
//         header.classList.add('main-title')

//         const bookBox = document.createElement('div')
//         main.appendChild(bookBox);
//         bookBox.classList.add('book-box');

//         const img = document.createElement('img');
//         bookBox.appendChild(img);
//         img.classList.add(book-img);
//         img.src = `${element.imageLink}`;
//         console.log(img);

//         const infoBook = document.createElement('div');
//         bookBox.appendChild(infoBook);
//         infoBox.classList.add(info-box);

//         const titleBox = document.createElement('h3');
//         infoBook.appendChild(titleBox);
//         titleBox.textContent = 'Hello Book';
//         titleBox.classList.add('book-title');




//             });
//         });





