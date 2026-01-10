import Link from "next/dist/client/link";

const FoodCard = ({ food }) => {
    const { id, title, foodImg, category, price } = food;

    return (
        <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={foodImg} alt={title} className="w-full h-44 object-cover rounded-lg" />

            <div className="mt-3">
                <h2 className="text-lg font-semibold">
                    {title}
                </h2>
                <p className="text-sm text-gray-500">
                    {category}
                </p>

                <p className="text-xl font-bold mt-2">
                    BDT {price} taka
                </p>

                <div className="flex gap-3 mt-4">
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                        Add To Cart
                    </button>

                    <Link href={`/foods/${id}`} className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 hover:text-black text-center">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;