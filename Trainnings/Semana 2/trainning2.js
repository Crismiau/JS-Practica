// paso 1: definimos un objeto con 3 productos, cada uno tiene id, nombre y precio
const products = {
  1: { id: 1, name: "robot", price: 150 },
  2: { id: 2, name: "drone", price: 300 },
  3: { id: 3, name: "puzzle", price: 50 }
};

// paso 2: mostramos informacion con object.keys, object.values y object.entries
console.log("🔑 Product keys:", Object.keys(products));
console.log("📦 Product values:", Object.values(products));
console.log("📋 Product entries:", Object.entries(products));

// usamos for...in para recorrer las propiedades del objeto
console.log("🔁 Looping with for...in:");
for (let key in products) {
  console.log("Product ID:", key, products[key]);
}

// convertimos los valores del objeto en un array
const productArray = Object.values(products);

// creamos un set con los productos para evitar duplicados
const productSet = new Set(productArray);

// recorremos el set con for...of
console.log("🔁 Looping through Set with for...of:");
for (let item of productSet) {
  console.log("Unique product:", item.name);
}

// creamos un map para asociar categorias con productos
const categoryMap = new Map();
categoryMap.set("technology", "robot");
categoryMap.set("aerial", "drone");
categoryMap.set("educational", "puzzle");

// recorremos el map con forEach
console.log("🗂 Categories and products:");
categoryMap.forEach((productName, category) => {
  console.log(`Category: ${category}, Product: ${productName}`);
});

// funcion para validar si un producto tiene id, name y price
function validateProduct(product) {
  if (!product.id || !product.name || !product.price) {
    return false;
  }
  return true;
}

// validamos los productos con forEach
console.log("✅ Product validation:");
productArray.forEach(product => {
  if (validateProduct(product)) {
    console.log("Valid product:", product.name);
  } else {
    console.log("❌ Invalid product:", product);
  }
});

// mostramos todos los productos (desde el objeto)
console.log("🧾 Full product list:");
productArray.forEach(product => {
  console.log(`${product.name}, Price: $${product.price}`);
});

// mostramos productos únicos (desde el set)
console.log("📦 Unique products (from Set):");
productSet.forEach(product => {
  console.log(`${product.name}`);
});

// mostramos categorias y productos (desde el map)
console.log("📂 Categories and their products:");
categoryMap.forEach((name, category) => {
  console.log(`Category: ${category}, Product: ${name}`);
});

// Todo el texto de consola está en ingles, ya que anteriormente se me solicito crear todo el codigo en ingles 
// (No sé si tambien los comentarios) espero que no.