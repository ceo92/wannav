document.addEventListener('DOMContentLoaded', function () {
  async function productList() {

    const response = await fetch('/api/product/list');
    if (!response.ok) {
      throw new Error(`네트워크 오류: ${response.status} ${response.statusText}`);
    }

    const jsonData = await response.json();
    const dataList = jsonData.data || [];

    if (dataList.length > 0) {

      const formattedProducts = dataList.map((product) => ({
            ...product,
            formattedSellingPrice: new Intl.NumberFormat("ko-KR").format(
                product.sellingPrice) + "원",
            formattedFinalPrice: new Intl.NumberFormat("ko-KR").format(
                product.finalPrice) + "원",
          })
      );

      // renderProducts(formattedProducts);
    }
  }

  productList();

  /**
   * 가격을 한국 원화(KRW) 형식으로 포맷팅
   * @param price - 포맷팅할 가격
   *  @returns string - 원화 형식으로 포맷팅된 가격 (예: "1,000원")
   */
  function formatPrice(price) {
    return new Intl.NumberFormat("ko-KR").format(price) + "원";
  }

  const priceElements = document.querySelectorAll(".price");
  priceElements.forEach(function (priceElement) {
    const price = parseInt(priceElement.getAttribute("data-price"));
    priceElement.textContent = formatPrice(price);
  })


  /**
   * 상품명 말줄임표 형식으로 포맷팅
   * @type {number}
   */
  const maxLength = 21;
  function truncateText(text) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + " ...";
    }
    return text;
  }

  const nameElements = document.querySelectorAll(".name");
  nameElements.forEach(function (nameElement) {
    const name = nameElement.getAttribute("data-name");
    nameElement.textContent = truncateText(name);
  })

  function renderProducts(products) {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = '';

    products.forEach(product => {
      const productItem = document.createElement('div');
      productItem.classList.add('product-item');

      const productLink = document.createElement('a');
      productLink.href = `/products?id=${product.id}`;

      const productImage = document.createElement('img');
      productImage.src = product.image[0];
      productImage.alt = 'Product image';

      const productPriceContainer = document.createElement('div');
      productPriceContainer.classList.add('product-price-container');

      const discountRate = document.createElement('span');
      discountRate.classList.add('product-discount-rate');
      discountRate.textContent = `${product.discountRate}%`;

      const priceContainer = document.createElement('div');
      priceContainer.classList.add('price-container');

      const sellingPrice = document.createElement('span');
      sellingPrice.classList.add('selling-price');
      sellingPrice.textContent = product.formattedSellingPrice;

      const finalPrice = document.createElement('span');
      finalPrice.classList.add('final-price');
      finalPrice.textContent = product.formattedFinalPrice;

      const productName = document.createElement('p');
      productName.classList.add('product-name');
      productName.textContent = truncateText(product.name);

      priceContainer.append(sellingPrice, finalPrice);
      productPriceContainer.append(discountRate, priceContainer);
      productLink.append(productImage, productPriceContainer, productName);
      productItem.append(productLink);

      productGrid.append(productItem);
    });
  }

});
