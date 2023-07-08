import { Content } from "../App";
import ColumnSection from "./ColumnSection";

function ThreeColumnCard({ sections }: { sections: Content[] }) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 xl:max-w-5xl items-center">
      {sections.map((section) => (
        <ColumnSection
          key={section.title}
          icon={section.icon}
          color={section.color}
          title={section.title}
          description={section.description}
        />
      ))}
    </div>
  );
}
export default ThreeColumnCard;
