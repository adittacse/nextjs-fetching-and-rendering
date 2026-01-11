import ReviewsPage from "@/app/reviews/ReviewsPage";

export const metadata = {
    // title: "Reviews - NextJS Fetching & Rendering",
    title: {
        absolute: "Satisfied Users",
    },
    description: "Best fast food in your town",
};

const AllReviews = () => {
    return (
        <div>
            <ReviewsPage />
        </div>
    );
};

export default AllReviews;