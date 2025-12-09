import Link from "next/link";
import Container from "./Container";

export default function Header() {
  return (
    <header className="border-b-5 border-black bg-white">
      <Container>
        <nav className="flex items-center justify-between py-6">
          <Link
            href="/"
            className="text-2xl font-bold uppercase tracking-tight hover:underline"
          >
            CalcOat
          </Link>

          <div className="flex gap-6">
            <Link
              href="/"
              className="font-mono uppercase tracking-wide hover:underline"
            >
              Products
            </Link>
            <Link
              href="/calculator"
              className="font-mono uppercase tracking-wide hover:underline"
            >
              Calculator
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}
