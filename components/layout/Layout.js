import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>555 CRM</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
    </>
  );
}
