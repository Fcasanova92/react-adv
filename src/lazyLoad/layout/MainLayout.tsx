import { NavBar } from "../components/ui/NavBar";

interface Props {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <div className="main-layout">
      <NavBar />
      <main>{children}</main>
    </div>
  );
};
