import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="">
        <div className="bg-black h-96 rounded-xl"></div>
      </section>
      <section className="space-y-5 py-6">
        <div className="frbc">
          <h2 className="text-[clamp(1.3rem,5vw,1.5rem)] font-extrabold">
            Categories
          </h2>
          <Link href="/categories">View All</Link>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="border p-3 rounded-md">Category</div>
          <div className="border p-3 rounded-md">Category</div>
          <div className="border p-3 rounded-md">Category</div>
          <div className="border p-3 rounded-md">Category</div>
          <div className="border p-3 rounded-md">Category</div>
          <div className="border p-3 rounded-md">Category</div>
          <div className="border p-3 rounded-md">Category</div>
          <div className="border p-3 rounded-md">Category</div>
          <div className="border p-3 rounded-md">Category</div>
          <div className="border p-3 rounded-md">Category</div>
          <div className="border p-3 rounded-md">Category</div>
          <div className="border p-3 rounded-md">Category</div>
          <div className="border p-3 rounded-md">Category</div>
          <div className="border p-3 rounded-md">Category</div>
          <div className="border p-3 rounded-md">Category</div>
          <div className="border p-3 rounded-md">Category</div>
          <div className="border p-3 rounded-md">Category</div>
          <div className="border p-3 rounded-md">Category</div>
          <div className="border p-3 rounded-md">Category</div>
          <div className="border p-3 rounded-md">Category</div>
          <div className="border p-3 rounded-md">Category</div>
          <div className="border p-3 rounded-md">Category</div>
          <div className="border p-3 rounded-md">Category</div>
          <div className="border p-3 rounded-md">Category</div>
          <div className="border p-3 rounded-md">Category</div>
        </div>
      </section>
    </>
  );
}
