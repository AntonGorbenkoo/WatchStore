const addFormOne = document.querySelector('.addFormOne');

addFormOne.addEventListener('submit', async (event) => {
  event.preventDefault();
  // const {
  //   title, img, descr, method,
  // } = event.target;
  // const response = await fetch('/additem', {
  //   method,
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     title: title.value,
  //     img: img.value,
  //     descr: descr.value,
  //   }),
  // });
  const newData = new FormData(event.target);
  const response = await fetch('/lk', {
    method: 'POST',
    body: newData,
  });
  const answer = await response.text();
  console.log(answer);
  document.querySelector('.container_two').insertAdjacentHTML('beforeend', answer);
});