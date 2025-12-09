import Calculator from "@/components/calculator/Calculator";
import Container from "@/components/layout/Container";

export const metadata = {
  title: "Impact Calculator - CalcOat",
  description:
    "Calculate how much carbon, water, and land you save by switching to plant-based alternatives.",
};

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-oatly-cream py-16">
      <Container>
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold uppercase">
            Impact Calculator
          </h1>
          <p className="font-mono text-lg">
            See how much you can save by switching to plant-based
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Calculator />
        </div>

        {/* Info Section */}
        <div className="mx-auto mt-16 max-w-3xl border-5 border-black bg-white p-8">
          <h2 className="mb-4 text-2xl font-bold uppercase">About Our Data</h2>
          <p className="mb-4 font-mono">
            Our environmental impact calculations are based on peer-reviewed
            research from Poore & Nemecek (2018), one of the most comprehensive
            studies on the environmental impact of food production.
          </p>
          <p className="font-mono text-sm">
            <strong>Reference:</strong> Poore, J., & Nemecek, T. (2018).
            Reducing food&apos;s environmental impacts through producers and
            consumers. Science, 360(6392), 987-992.
          </p>
        </div>
      </Container>
    </div>
  );
}
