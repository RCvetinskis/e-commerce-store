import { Container } from "@/components/ui/container";
import { Billboard } from "@/components/billboard";
import { getBillboard } from "@/lib/billboard-service";
import { getProducts } from "@/lib/product-serivce";
import { ProductList } from "@/components/product-list";
export const revalidate = 0;
const HomePage = async () => {
  const billboard = await getBillboard("2e126ed4-37b8-4b5a-9471-b655ff980346");

  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
