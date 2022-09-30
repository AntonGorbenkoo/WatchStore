const cont = document.querySelector('.container_one');
const contTwo = document.querySelector('.container_two');
// const countDiv = document.querySelector('.like_count');
console.log(cont);
cont.addEventListener('click', async (event) => {
  if (event.target.className === 'btn btn-danger') {
    console.log(event.target.id);
    const responce = await fetch(`/admin/${event.target.id}`, {
      method: 'DELETE',
    });
    const answer = await responce.json();
    event.target.parentNode.parentNode.remove();
  }

  if (event.target.className === 'btn btn-success') {
    // console.log(event.target.parentNode.parentNode);
    // const parent = event.target.closest('div');
    const parent = event.target.parentNode.parentNode;
    const title = parent.querySelector('h5');
    const p = parent.querySelector('p');
    title.contentEditable = true;
    p.contentEditable = true;
    const itemId = parent.dataset.id;
    console.log(itemId);
    title.focus();
  }
  if (event.target.className === 'btn btn-warning') {
    // const parent = event.target.closest('div');
    const parent = event.target.parentNode.parentNode;
    const itemId = parent.dataset.id;
    const title = parent.querySelector('h5').textContent;
    const p = parent.querySelector('p').textContent;
    const response = await fetch('/admin/edit', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: itemId, title, p }),
    });
  }

  // if (event.target.className === 'likeBtn') {
  //   console.log(typeof (event.target.id));
  //   if (lastLike === event.target.id) {
  //     const parent = event.target.parentNode.parentNode;
  //     const itemId = parent.dataset.id;
  //     const p = parent.querySelector('h4');
  //     counter += 1;
  //     p.innerHTML = counter;
  //     console.log(counter, '+++++++++');
  //   } else {
  //     lastLike = event.target.id;
  //     counter = 0;
  //     const parent = event.target.parentNode.parentNode;
  //     const itemId = parent.dataset.id;
  //     const p = parent.querySelector('h4');
  //     counter += 1;
  //     p.innerHTML = counter;
  //   }
  // }
  // if (event.target.className === 'likeBtn') {
  //   // console.log(event.target.id);
  //   const { id } = event.target.closest('.card').dataset;
  //   console.log(id);
  //   const response = await fetch(`/like/${id}`, {
  //     method: 'POST',
  //   });
  //   const answer = await response.json();
  //   console.log(answer);
  //   const likeDiv = event.target.parentElement.lastElementChild;
  //   console.log(likeDiv);
  //   const likeIn = likeDiv.firstChild;
  //   likeIn.innerHTML = `${answer.likes}`;
  // }
});
contTwo.addEventListener('click', async (event) => {
  if (event.target.className === 'btn btn-danger') {
    console.log(event.target.id);
    const response = await fetch(`/admin/${event.target.id}`, {
      method: 'DELETE',
    });
    const answer = await response.json();
    event.target.parentNode.parentNode.remove();
  }
});
