import FoodCardSkeleton from "@/components/skeletons/FoodCardSkeleton";

const FoodLoading = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 gap-5">
            {
                [...Array(12)].map((_, i) => <FoodCardSkeleton key={i} />)
            }
        </div>
    );
};

export default FoodLoading;