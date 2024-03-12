console.log('delete ORDER');

const container = document.querySelector('.catalogCards');

container.addEventListener('click', async (event) => {
  if (event.target.classList.contains('deleteOrder')) {
    event.preventDefault();
    try {
      const { id } = event.target;
      const response = await fetch(`product/order/delete/${id}`, {
        method: 'DELETE',
      });

      const result = await response.json();
      if (result.success) {
        const deleteOrder = event.target.closest('.card');
        deleteOrder.remove();
      } else {
        console.error('ошибка при удалении из заказов');
      }
    } catch (error) {
      console.log(error);
    }
  }
});
