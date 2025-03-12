import FormInput from "./FormInput";
import ItemList from "./ItemList";

export default function Form({ form, setForm }) {
  return (
    <>
      <FormInput />
      <ItemList form={form} setForm={setForm} />
    </>
  );
}
