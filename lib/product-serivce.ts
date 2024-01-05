import { IProduct } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface QueryProps {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}
export const getProducts = async (query: QueryProps): Promise<IProduct[]> => {
  const { categoryId, sizeId, colorId, isFeatured } = query;
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId,
      sizeId,
      colorId,
      isFeatured,
    },
  });
  const res = await fetch(url);

  return res.json();
};
export const getProduct = async (id: string): Promise<IProduct> => {
  const url = `${URL}/${id}`;
  const res = await fetch(url);

  return res.json();
};
