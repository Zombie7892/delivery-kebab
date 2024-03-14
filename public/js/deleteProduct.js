console.log('delete prod');

const container = document.querySelector('.catalogCards');
const div = document.querySelector('.Order');

container.addEventListener('click', async (event) => {
  if (event.target.classList.contains('delete')) {
    event.preventDefault();
    try {
      const { id } = event.target;
      const response = await fetch(`/product/delete/${id}`, {
        method: 'DELETE',
      });

      const result = await response.json();
      if (result.success) {
        const deleteProduct = event.target.closest('.card');
        deleteProduct.remove();
      } else {
        console.error('Failed to delete the product');
      }
    } catch (error) {
      console.log(error);
    }
  }
});

div.addEventListener('click', async (event) => {
  if (event.target.classList.contains('delivered')) {
    event.preventDefault();
    try {
      const { id } = event.target;
      const response = await fetch(`/product/order/delivered/${id}`, {
        method: 'DELETE',
      });

      console.log(id);
      const result = await response.json();
      if (result.success) {
        const deleteOrder = event.target.closest('.card');
        deleteOrder.remove();
        const deleteProduct = document.querySelector(`#p${result.productId}`);
        deleteProduct.parentNode.remove()
      } else {
        console.error('Failed to delete the product');
      }
    } catch (error) {
      console.log(error);
    }
  }
});
