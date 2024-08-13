import Image from "next/image";
import { MdOutlineAddShoppingCart } from "react-icons/md";

export default function Page() {
  return (
    <>
      <section className="space-y-2 flex flex-col py-4 mb-4">
        <div className="flex gap-2 overflow-x-auto w-full">
          <div className="w-full flex-shrink-0">
            <Image
              src="/demo.webp"
              width={100}
              height={100}
              layout="responsive"
              alt="demo"
              className="rounded-md"
            />
          </div>
          <div className="bg-black w-full h-80 rounded-md flex-shrink-0"></div>
          <div className="bg-black w-full h-80 rounded-md flex-shrink-0"></div>
          <div className="bg-black w-full h-80 rounded-md flex-shrink-0"></div>
        </div>
        <div className="space-y-2">
          <p className="font-black text-lg text-blue-500">Peanut Butter</p>
          <h1 className="font-semibold text-xl">
            Pintola organic peanut butter | Unsweetned | 100% Peanuts
          </h1>
          <div className="flex  gap-2">
            <p className="text-lg font-medium">
              <del className="text-red-600">$49</del>
            </p>
            <p className="text-lg font-medium">$29</p>
            <p className="text-lg font-semibold text-green-500">15% OFF</p>
          </div>

          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            repellendus, repudiandae tenetur libero quibusdam, doloribus totam
            jfar.
          </p>
          <div className="flex gap-2">
            <h2 className="text-lg font-semibold">Net Quantity:</h2>
            <p className="text-lg">340G</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Nutrional Information</h2>
            <div className="space-y-2">
              <table className="border border-gray-200">
                <thead>
                  <tr className="border border-gray-200">
                    <th className="border border-gray-200 p-2">Name</th>
                    <th className="border border-gray-200 p-2">Per 100g</th>
                    <th className="border border-gray-200 p-2">Per Serve</th>
                    <th className="border border-gray-200 p-2">
                      %RDA Per Serve
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-gray-200">
                    <td className="border border-gray-200 p-2">Energy</td>
                    <td className="border border-gray-200 p-2">657</td>
                    <td className="border border-gray-200 p-2">194</td>
                    <td className="border border-gray-200 p-2">9.7</td>
                  </tr>
                  <tr className="border border-gray-200">
                    <td className="border border-gray-200 p-2">Protein</td>
                    <td className="border border-gray-200 p-2">657</td>
                    <td className="border border-gray-200 p-2">194</td>
                    <td className="border border-gray-200 p-2">9.7</td>
                  </tr>
                  <tr className="border border-gray-200">
                    <td className="border border-gray-200 p-2">Energy</td>
                    <td className="border border-gray-200 p-2">657</td>
                    <td className="border border-gray-200 p-2">194</td>
                    <td className="border border-gray-200 p-2">9.7</td>
                  </tr>
                  <tr className="border border-gray-200">
                    <td className="border border-gray-200 p-2">Energy</td>
                    <td className="border border-gray-200 p-2">657</td>
                    <td className="border border-gray-200 p-2">194</td>
                    <td className="border border-gray-200 p-2">9.7</td>
                  </tr>
                  <tr className="border border-gray-200">
                    <td className="border border-gray-200 p-2">Vitamin</td>
                    <td className="border border-gray-200 p-2">657</td>
                    <td className="border border-gray-200 p-2">194</td>
                    <td className="border border-gray-200 p-2">9.7</td>
                  </tr>
                  <tr className="border border-gray-200">
                    <td className="border border-gray-200 p-2">Energy</td>
                    <td className="border border-gray-200 p-2">657</td>
                    <td className="border border-gray-200 p-2">194</td>
                    <td className="border border-gray-200 p-2">9.7</td>
                  </tr>
                  <tr className="border border-gray-200">
                    <td className="border border-gray-200 p-2">Energy</td>
                    <td className="border border-gray-200 p-2">657</td>
                    <td className="border border-gray-200 p-2">194</td>
                    <td className="border border-gray-200 p-2">9.7</td>
                  </tr>
                  <tr className="border border-gray-200">
                    <td className="border border-gray-200 p-2">Energy</td>
                    <td className="border border-gray-200 p-2">657</td>
                    <td className="border border-gray-200 p-2">194</td>
                    <td className="border border-gray-200 p-2">9.7</td>
                  </tr>
                  <tr className="border border-gray-200">
                    <td className="border border-gray-200 p-2">Energy</td>
                    <td className="border border-gray-200 p-2">657</td>
                    <td className="border border-gray-200 p-2">194</td>
                    <td className="border border-gray-200 p-2">9.7</td>
                  </tr>
                </tbody>
              </table>
              <p>Serveing size 30g (2 tablespoons) About 30 serving per pack</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Ingredients</h2>
              <p>100% Roasted Peanuts</p>
            </div>
          </div>
          <div className="flex justify-between gap-2 w-full bg-white p-4 border-t fixed left-0 bottom-1">
            <button className="grow bg-blue-500 text-white rounded-md p-4 font-bold">
              Buy Now
            </button>
            <button className="border border-gray-300 rounded-md p-4 font-bold">
              <MdOutlineAddShoppingCart size={22} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
