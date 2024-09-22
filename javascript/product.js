let products = [
  {
    id: 1,
    name: "watch",
    price: 100,
    name: "dfsfd",
  },
  {
    id: 2,
    name: "shoes",
    price: 100,
  },
  {
    id: 3,
    name: "tshirt",
    price: 200,
  },
];

// products.push({})
// fields = { name, price}
const addProduct = ({ name, price }) => {
  // id: +1
  //   const { name, price } = fields;
  console.log("AT -1", products.at(-1));

  products.push({
    id: products.at(-1).id + 1,
    name,
    price,
  });
};

// addProduct({name, price})

const getProducts = () => {
  console.log("Print Products.");
  for (let product of products) {
    console.log(product);
  }

  return products;
};

// filter
const deleteProduct = (id) => {
  // findIndex, splice
  products = products.filter((product) => product.id !== id);
};

// deleteProduct(2)

// fields = { name: "test", price: "200"}
const updateProduct = (id, field) => {

  // findIndex 
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      //   if (field.name) products[i].name = field.name;
      //   if (field.price) products[i].price = field.price;
      products[i] = {
        ...products[i],
        ...fields,
      };
      return;
    }
  }
};

getProducts();
addProduct({
  name: "iphone",
  price: 270000,
  test: "testst",
});
getProducts();
deleteProduct(3);
getProducts();
updateProduct(1, { name: "new name" });
getProducts();
