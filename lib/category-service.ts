import { ICategory } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategories = async (): Promise<ICategory[]> => {
  const res = await fetch(URL);

  return res.json();
};

export const getCategory = async (id: string): Promise<ICategory> => {
  const url = `${URL}/${id}`;
  const res = await fetch(url);

  return res.json();
};
