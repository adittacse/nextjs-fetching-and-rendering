import ReviewCardSkeleton from "@/components/skeletons/ReviewCardSkeleton";

const ReviewLoading = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 gap-5">
            {
                [...Array(12)].map((_, i) => <ReviewCardSkeleton key={i} />)
            }
        </div>
    );
};

export default ReviewLoading;