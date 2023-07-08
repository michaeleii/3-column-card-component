import Button from "./Button";

function ColumnSection({
  icon,
  color,
  title,
  description,
}: {
  icon: string;
  color: string;
  title: string;
  description: string;
}) {
  const base = "p-10 h-full text-white/75 grid grid-cols-1 gap-10 xl:gap-20 ";
  const variants: {
    [color: string]: string;
  } = {
    brightOrange: base + "bg-brightOrange",
    darkCyan: base + "bg-darkCyan",
    veryDarkCyan: base + "bg-veryDarkCyan",
  };
  return (
    <div className={variants[color]}>
      <img src={icon} alt={`Icon for ${title}`} />
      <div>
        <h1 className="font-heading tracking-wide uppercase text-5xl text-gray-100 mb-5">
          {title}
        </h1>
        <p className="tracking-wide">{description}</p>
      </div>
      <div className="mt-auto">
        <Button color={color}>Learn More</Button>
      </div>
    </div>
  );
}
export default ColumnSection;
