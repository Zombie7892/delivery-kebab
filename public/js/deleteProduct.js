console.log('delete prod');

const container = document.querySelector('.catalogCards');

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
