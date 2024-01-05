"use client";
import { cn } from "@/lib/utils";
import { ICategory } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface MainNavProps {
  data: ICategory[];
}
export const MainNav = ({ data }: MainNavProps) => {
  const pathname = usePathname();

  const memorizedData = useMemo(() => {
    // fixes bug for navigation of categories disappering
    return data;
  }, [data]);

  const routes = memorizedData.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-black",
            route.active ? "text-black font-bold" : "text-neutral-500"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};
