document.addEventListener("DOMContentLoaded", function() {
    fetch('./assets/json/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        const cardsContainer = document.getElementById('cards-container');
        
        data.forEach(card => {
          const cardDiv = document.createElement('div');
          cardDiv.classList.add('w-full', 'max-w-full', 'px-3', 'mb-6', 'sm:w-1/2', 'sm:flex-none', 'xl:mb-0', 'xl:w-1/4');
          
          const innerCardDiv = document.createElement('div');
          innerCardDiv.classList.add('relative', 'flex', 'flex-col', 'min-w-0', 'break-words', 'bg-white', 'shadow-xl', 'dark:bg-slate-850', 'dark:shadow-dark-xl', 'rounded-2xl', 'bg-clip-border');
          
          const flexAutoDiv = document.createElement('div');
          flexAutoDiv.classList.add('flex-auto', 'p-4');
          
          const flexNoneDiv = document.createElement('div');
          flexNoneDiv.classList.add('flex-none', 'justify-center', 'items-center', 'max-w-full', 'px-3');
          
          const innerDiv = document.createElement('div');
          
          const anchor = document.createElement('a');
          anchor.href = card.link;
          anchor.target = "_blank";
          anchor.rel = "noopener noreferrer";
          
          const img = document.createElement('img');
          img.id = `card-${card.id}`;
          img.classList.add('w-full');
          img.src = card.imgSrc;
          img.alt = card.imgAlt;
          
          anchor.appendChild(img);
          innerDiv.appendChild(anchor);
          flexNoneDiv.appendChild(innerDiv);
          flexAutoDiv.appendChild(flexNoneDiv);
          innerCardDiv.appendChild(flexAutoDiv);
          cardDiv.appendChild(innerCardDiv);
          cardsContainer.appendChild(cardDiv);
        });
      })
      .catch(error => {
        console.error('Erro ao carregar o JSON:', error);
      });
  });