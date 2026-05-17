import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="w-full">
        <Image
          src="/ads.png"
          alt="banner"
          width={1920}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 p-4">

        {/* Left */}
        <div className="flex-1 bg-white rounded-xl shadow-md p-6">

          <h1 className="text-3xl font-bold text-center mb-4">
            ງວດປະຈຳວັນທີ 17 ມິຖຸນາ 2026
          </h1>

          <div className="text-center text-7xl font-bold tracking-[20px] mb-4">
            02166
          </div>

          <p className="text-center text-xl mb-8">
            ອອກລາງວັນເວລາ 15:45
          </p>

          {/* Result Table */}
          <table className="w-full border border-gray-300 text-xl">
            <tbody>

              <tr>
                <td className="border p-4">ເລກ 5 ຕົວ</td>
                <td className="border p-4 text-center">02166</td>
              </tr>

              <tr>
                <td className="border p-4">ເລກ 4 ຕົວ</td>
                <td className="border p-4 text-center">2166</td>
              </tr>

              <tr>
                <td className="border p-4">ເລກ 3 ຕົວ</td>
                <td className="border p-4 text-center">166</td>
              </tr>

              <tr>
                <td className="border p-4">ເລກ 2 ຕົວເທິງ</td>
                <td className="border p-4 text-center">66</td>
              </tr>

              <tr>
                <td className="border p-4">ເລກ 2 ຕົວລຸ່ມ</td>
                <td className="border p-4 text-center">02</td>
              </tr>

            </tbody>
          </table>

          {/* History */}
          <h2 className="text-3xl font-bold text-center mt-10 mb-6">
            ຜົນຫວຍຍ້ອນຫຼັງ
          </h2>

          <table className="w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-3">ວັນທີ</th>
                <th className="border p-3">5 ຕົວ</th>
                <th className="border p-3">3 ຕົວ</th>
                <th className="border p-3">2 ຕົວ</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border p-3">16/06/2026</td>
                <td className="border p-3 text-center">23495</td>
                <td className="border p-3 text-center">495</td>
                <td className="border p-3 text-center">95</td>
              </tr>

              <tr>
                <td className="border p-3">15/06/2026</td>
                <td className="border p-3 text-center">80118</td>
                <td className="border p-3 text-center">118</td>
                <td className="border p-3 text-center">18</td>
              </tr>

            </tbody>
          </table>

        </div>

        {/* Right Ads */}
        <div className="w-full lg:w-[300px] space-y-4">

          <Image
            src="/ads01.png"
            alt="ads"
            width={300}
            height={250}
            className="w-full rounded-lg"
          />

          <Image
            src="/ads02.png"
            alt="ads"
            width={300}
            height={250}
            className="w-full rounded-lg"
          />

          <Image
            src="/ads03.png"
            alt="ads"
            width={300}
            height={250}
            className="w-full rounded-lg"
          />

          <Image
            src="/ads04.png"
            alt="ads"
            width={300}
            height={250}
            className="w-full rounded-lg"
          />

        </div>
      </div>

      {/* Footer */}
      <div className="bg-red-700 text-white text-center py-4 mt-10">
        Copyright 2026 © ຫວຍລາວ VIP
      </div>

    </main>
  );
}