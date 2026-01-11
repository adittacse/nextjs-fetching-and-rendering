import FeedbackCard from "@/components/cards/FeedbackCard";
import Link from "next/dist/client/link";

export const metadata = {
    title: "Feedbacks - NextJS Fetching & Rendering",
    description: "Best fast food in your town",
};

const getFeedbacks = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/feedback`, {
        cache: "force-cache",
        next: {
            revalidate: 60,
        }
    });
    return res.json();
}

const FeedbacksPage = async () => {
    const feedbacks = await getFeedbacks();

    return (
        <div>
            <h1 className="text-2xl font-bold">
                {feedbacks?.length} Feedbacks Found!
            </h1>

            <div className="my-10">
                <Link href="/feedbacks/add-feedback" className="btn">
                    Add Feedback
                </Link>
            </div>

            <div className="my-3 space-y-5 ">
                {
                    feedbacks.map((feedback) => <FeedbackCard key={feedback._id} feedback={feedback} />)
                }
            </div>
        </div>
    );
};

export default FeedbacksPage;