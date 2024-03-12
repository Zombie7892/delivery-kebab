console.log('reeecord');

const catalogCards = document.querySelector('.catalogCards');

catalogCards.addEventListener('click', async (event) => {
  if (event.target.classList.contains('cardBtn')) {
    event.preventDefault();
    try {
      const response = await fetch(`/product/order/${event.target.id}`, {
        method: 'POST',
      });
      const result = await response.json();
      console.log(result);

      if (result.msg) {
        const resMsg = document.querySelector(`#resMsg_${event.target.id}`);
        resMsg.innerText = result.msg;
        resMsg.style.color = 'green';
        setTimeout(() => {
          resMsg.innerText = '';
        }, 800);
      } else {
        const errMsg = document.querySelector(`#errMsg_${event.target.id}`);
        errMsg.innerText = result.err;
        errMsg.style.color = 'red';
        setTimeout(() => {
          errMsg.innerText = '';
        }, 800);
      }
    } catch (error) {
      console.log(error);
    }
  }
});
