import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t-5 border-black bg-black text-white">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-bold uppercase">About</h3>
            <p className="font-mono text-sm">
              CalcOat helps you understand the environmental impact of switching
              from dairy to plant-based alternatives.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold uppercase">Data Source</h3>
            <p className="font-mono text-sm">
              Environmental data based on peer-reviewed research (Poore &
              Nemecek, 2018).
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold uppercase">Connect</h3>
            <p className="font-mono text-sm">
              Built with Next.js, Storyblok, and Tailwind CSS.
            </p>
          </div>
        </div>

        <div className="border-t-3 border-white py-6">
          <p className="text-center font-mono text-sm">
            © {new Date().getFullYear()} CalcOat. It&apos;s like milk but made
            for humans.
          </p>
        </div>
      </Container>
    </footer>
  );
}
