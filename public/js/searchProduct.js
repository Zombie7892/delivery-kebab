const searchProduct = document.querySelector('#searchProduct');
const searchProductForm = document.querySelector('#searchProductForm');

searchProductForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
    const queryParams = new URLSearchParams({
      searchProduct: event.target.searchProduct.value,
    });
    window.location.href = `/product/search?${queryParams}`;
  } catch (error) {
    console.log(error);
  }
});
