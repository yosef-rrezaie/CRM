import Card from "./Card";

export default function HomePage({ customers }) {
  return (
    <div>
      {customers.map((customer) => (
        <Card key={customer._id} customer={customer} />
      ))}
    </div>
  );
}
