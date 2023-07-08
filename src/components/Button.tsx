function Button({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  const variants: {
    [color: string]: string;
  } = {
    brightOrange: " hover:text-brightOrange hover:border-brightOrange",
    darkCyan: " hover:text-darkCyan hover:border-darkCyan",
    veryDarkCyan: " hover:text-veryDarkCyan hover:border-veryDarkCyan",
  };
  return (
    <button
      className={
        "border-2 border-white/75 py-3 px-5 rounded-full hover:bg-white transition-colors" +
        variants[color]
      }
    >
      {children}
    </button>
  );
}
export default Button;
