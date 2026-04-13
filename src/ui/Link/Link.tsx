import { Link as RouterLink } from "react-router-dom";

type Props = {
  to: string;
  children: React.ReactNode;
};

export default function Link({ to, children }: Props) {
  return (
    <RouterLink
      to={to}
      className={`text-gray-300 text-lg hover:text-white transition-colors font-medium`}
    >
      {children}
    </RouterLink>
  );
}