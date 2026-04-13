import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded-lg font-medium transition",
        {
          "bg-black text-white hover:bg-white hover:text-black border border-black transition-all duration-300":
            variant === "primary",
          "bg-transparent text-black border border-gray-500 hover:bg-gray-100":
            variant === "outline",
        },
        className
      )}
    >
      {children}
    </button>
  );
}