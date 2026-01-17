import { IRoute } from "../../../interfaces/Route.interface";
import ShopPages from "../pages/ShopPages";

export const routes: IRoute[] = [
  {
    to: "/ShopPages",
    path: "shoppages",
    Component: ShopPages,
    nombre: "Shop Pages",
  },
];
