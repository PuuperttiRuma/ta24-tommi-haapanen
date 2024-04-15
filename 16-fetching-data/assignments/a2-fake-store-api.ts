import axios from "axios";

interface Product {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image?: string
    rating?: { rate: number, count: number }
}

const urlProducts = "https://fakestoreapi.com/products/";

const getFakeStoreProducts = async () => {
  try {
    const response = await axios.get(urlProducts);
    return response.data;
  } catch (error) {
    console.log(error);    
  }
};

const addFakeStoreProduct = async (title: string, price: number, description: string, category: string) => {
  const productToPost = {title, price, description, category};
  try {
    const response = await axios.post(urlProducts, productToPost);
    return response.data;
  } catch (error) {
    console.log(error);    
  }
};

const deleteFakeStoreProduct = async (id: number) => {  
  try {
    const response = await axios.delete(urlProducts + id);
    return response.data;
  } catch (error) {
    console.log(error);    
  }
};

( async () => {
  const products: Product[] = await getFakeStoreProducts();
  const productNames: string[] = products.map((product: Product) => product.title);
  console.log(productNames);

  console.log(await addFakeStoreProduct("Merinowool T-shirt", 32.99, "Awesome shirt!", "men's clothing"));
  console.log(await deleteFakeStoreProduct(4));
  

  
})();