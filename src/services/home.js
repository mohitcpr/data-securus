import method from "../Common/method";
import { fetchRequest } from "./common";

export const fetchProduct = () => {
  return fetchRequest(`/products/get-all.php`, method.GET);
};
