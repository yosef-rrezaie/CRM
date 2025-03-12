import Link from "next/link";
import { useRouter } from "next/router";

export default function Card({ customer }) {
  const router = useRouter();
  async function deleteHandler(id) {
    const res = await fetch("/api/customer", {
      method: "DELETE",
      body: JSON.stringify({
        data: id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await res.data;
    router.reload();
  }

  return (
    <div className="card">
      <div className="card__details">
        <p>
          {customer.name} {customer.lastName}
        </p>
        <p>{customer.email}</p>
      </div>
      <div className="card__buttons">
        <button onClick={() => deleteHandler(customer._id)}>Delete</button>
        <Link href={`/edit/${customer._id}`}>Edit</Link>
        <Link href={`/customer/${customer._id}`}>Details</Link>
      </div>
    </div>
  );
}
