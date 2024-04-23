"use strict";

const urlProducts = "https://fakestoreapi.com/products/";

let products = [];
const productList = document.querySelector("#productList");

const getFakeStoreProducts = async () => {
  try {
    // eslint-disable-next-line no-undef
    const response = await axios.get(urlProducts);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteFakeStoreProduct = async (id) => {
  try {
    // eslint-disable-next-line no-undef
    const response = await axios.delete(urlProducts + id);
    return response.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const createLi = () => {
  const li = document.createElement("li");
  li.classList.add("list-group-item");
  return li;
};

const createDeleteButton = (parent) => {
  const button = document.createElement("button");
  button.classList.add("btn" , "btn-danger", "btn-sm");
  button.classList.add("m-1");
  const text = document.createTextNode("X");
  button.appendChild(text);

  parent.appendChild(button);
  button.addEventListener("click", handleDeleteItemClick);
  return button;
};

const handleDeleteItemClick = async (event) => {
  const li = event.target.parentNode;
  const title = li.firstChild.textContent;
  const product = products.find(item => item.title === title);
  // console.log(product);
  const result = await deleteFakeStoreProduct(product.id);
  if (result){
    console.log(result);
    li.parentNode.removeChild(li);
    products = products.filter(item => item !== product);
    console.log(products);
  } else {
    console.log("Something went wrong when deleting item.");
  }  
};

const createProductList = (list, parent) => {
  const liArray = [];
  // Käytä Mappia
  list.forEach((item) => {
    const li = createLi();
    const titleText = document.createTextNode(item.title);
    const priceText = document.createTextNode("$" + item.price);

    li.appendChild(titleText);
    li.appendChild(priceText);

    createDeleteButton(li);
    liArray.push(li);
  });
  parent.replaceChildren(...liArray);
};

const main = async () => {
  products = await getFakeStoreProducts();
  createProductList(products, productList);
};

window.onload = main;
