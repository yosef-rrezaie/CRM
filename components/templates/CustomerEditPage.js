import { useState } from "react";
import Form from "../modules/Form";
import { useRouter } from "next/router";

export default function CustomerEditPage({ data, id }) {
  const changedData = data.data[0];
  const [form, setForm] = useState({
    name: changedData.name,
    lastName: changedData.lastName,
    email: changedData.email,
    phone: changedData.phone || "",
    address: changedData.address || "",
    postalCode: changedData.postalCode || "",
    products: changedData.products || "",
    date: changedData.date || "",
  });
  const router = useRouter();
  async function editHandler() {
    const res = await fetch(`/api/edit/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ data: form }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    router.push("/");
  }
  function cancelHandler() {
    router.push("/");
  }
  return (
    <div className="customer-page">
      <h4>Edit Customer</h4>
      <Form form={form} setForm={setForm} />
      <div className="customer-page__buttons">
        <button className="first" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="second" onClick={editHandler}>
          Edit
        </button>
      </div>
    </div>
  );
}
