
import { productList } from "@/app/_data/productData"
import ProductCard from "@/app/_components/common/ProductCard"

export default function Home() {
  return (
    <main className="px-5 py-2">

      <h2 className="section-heading pb-5 px-10">All Items</h2>
      <section className="py-5 px-10 rounded-xl bg-green-400/30 glass grid gap-5 md:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5">
        {
          productList.map((product, i) => {
            return (
              <ProductCard key={i} item={product} />
            )
          })
        }

      </section>
    </main>
  )
}
