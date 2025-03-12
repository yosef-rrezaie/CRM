import FormInput from "./FormInput";

export default function ItemList({ form, setForm }) {
  const { products } = form;

  function addHandler() {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });
    console.log(products);
  }

  function changeHnadler(e, index) {
    const { name, value } = e.target;
    const newProducts = [...products];
    newProducts[index][name] = value;
    setForm({ ...form, products: newProducts });
  }

  function deleteHandler(index) {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setForm({ ...form, products: newProducts });
  }
  return (
    <div className="item-list">
      <p>Purchased products</p>
      {products.map((product, index) => (
        <div className="form-input__list" key={index}>
          <FormInput
            name="name"
            label="Produnct Name"
            type="text"
            value={product.name}
            onChange={(e) => changeHnadler(e, index)}
          />
          <div>
            <FormInput
              name="price"
              label="Price"
              type="text"
              value={product.price}
              onChange={(e) => changeHnadler(e, index)}
            />
            <FormInput
              name="qty"
              label="Qty"
              type="number"
              value={product.qty}
              onChange={(e) => changeHnadler(e, index)}
            />
          </div>
          <button onClick={() => deleteHandler(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addHandler}>Add Item</button>
    </div>
  );
}
