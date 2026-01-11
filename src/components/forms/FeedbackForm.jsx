"use client";

import { useRouter } from "next/dist/client/components/navigation";

const FeedbackForm = () => {
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = e.target.message.value;
        const res = await fetch("http://localhost:3000/api/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message })
        });

        const data = await res.json();

        if (data.insertedId) {
            alert("Feedback Created Successfully");
            router.push("/feedbacks");
        } else {
            alert("Failed to create feedback");
        }
    }

    return (
        <div className="mt-5">
            <form onSubmit={handleSubmit} className="space-y-5 text-center">
                <fieldset className="fieldset">
                    <textarea className="w-xl border border-dashed p-3" name="message" id="message" cols="30" rows="10" required></textarea>
                    <br/> <br/>
                    <button type="submit" className="btn">Add Feedback</button>
                </fieldset>
            </form>
        </div>
    );
};

export default FeedbackForm;