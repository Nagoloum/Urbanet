import { Link as RouterLink } from "react-router-dom";

type Props = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

export default function Link({ to, children, className }: Props) {
  return (
    <RouterLink
      to={to}
      className={`text-gray-300 text-lg hover:text-white transition-colors font-medium` + (className ? ` ${className}` : "")}
    >
      {children}
    </RouterLink>
  );
}