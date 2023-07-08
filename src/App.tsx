import ThreeColumnCard from "./components/ThreeColumnCard";

const sections = [
  {
    icon: "/icon-sedans.svg",
    color: "brightOrange",
    title: "Sedans",
    description:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
  },
  {
    icon: "/icon-suvs.svg",
    color: "darkCyan",
    title: "SUVs",
    description:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
  },
  {
    icon: "/icon-luxury.svg",
    color: "veryDarkCyan",
    title: "Luxury",
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
  },
];

export interface Content {
  icon: string;
  color: string;
  title: string;
  description: string;
}

function App() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center p-10 bg-gray-100">
      <ThreeColumnCard sections={sections} />
    </div>
  );
}
export default App;
