import { IRoute } from "../interfaces/route.interface";
import { NavBar } from "../ui/NavBar";

interface MainLayoutProps {
  children: React.ReactNode;
  routes: IRoute[];
}

export const MainLayout = ({ children, routes }: MainLayoutProps) => {
  return (
    <div className="main-layout">
      <NavBar routes={routes} />
      <main>{children}</main>
    </div>
  );
};
