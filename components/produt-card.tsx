"use client";
import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";

import { IProduct } from "@/types";
import { IconButton } from "./ui/icon-button";
import { Currency } from "./ui/currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import { useCart, usePreviewModal } from "@/store";

interface ProductCardProps {
  data: IProduct;
}
export const ProductCard = ({ data }: ProductCardProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const cart = useCart();
  const previewModal = usePreviewModal();

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    // overvwrites handleClick on main div
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    // overvwrites handleClick on main div
    event.stopPropagation();

    cart.addItem(data);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* images and actions */}

      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          alt="Image"
          src={data?.images?.[0]?.url}
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* description */}

      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-gray-500 text-sm">{data.category?.name}</p>
      </div>
      {/* price */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};
