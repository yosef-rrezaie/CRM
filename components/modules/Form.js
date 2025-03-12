import FormInput from "./FormInput";
import ItemList from "./ItemList";

export default function Form({ form, setForm }) {
  function changeHandler(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  console.log(form);
  return (
    <>
      <FormInput
        name="name"
        label="Name"
        type="text"
        value={form.name}
        onChange={changeHandler}
      />
      <FormInput
        name="lastName"
        label="Last Name"
        type="text"
        value={form.lastName}
        onChange={changeHandler}
      />
      <FormInput
        name="email"
        label="Email"
        type="text"
        value={form.email}
        onChange={changeHandler}
      />
      <FormInput
        name="phone"
        label="Phone"
        type="text"
        value={form.phone}
        onChange={changeHandler}
      />
      <FormInput
        name="address"
        label="Address"
        type="text"
        value={form.address}
        onChange={changeHandler}
      />

      <FormInput
        name="postalCode"
        label="Postal Code"
        type="number"
        value={form.postalCode}
        onChange={changeHandler}
      />
      <FormInput
        name="date"
        label="Date"
        type="date"
        value={form.date}
        onChange={changeHandler}
      />

      <ItemList form={form} setForm={setForm} />
    </>
  );
}
