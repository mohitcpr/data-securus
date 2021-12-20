import method from "../Common/method";
import { fetchRequest } from "./common";

export const fetchProduct = () => {
  return fetchRequest(`/products/get-all.php`, method.GET);
};

export const fetchProductById = (product_id) => {
  return fetchRequest(
    `/products/get_product_by_id.php?product_id=${product_id}`,
    method.GET
  );
};
