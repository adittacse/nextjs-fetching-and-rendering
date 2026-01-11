import { connect } from "@/app/lib/dbConnect";
import { revalidatePath } from "next/dist/server/web/spec-extension/revalidate";
const feedbackCollection = connect("feedbacks");

export async function GET(request) {
    const result = await feedbackCollection.find().sort({ date: -1 }).toArray();
    return Response.json(result);
}

export async function POST(request) {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
        return Response.json({
            status: 400,
            message: "please send a message!",
        });
    }

    const newFeedback = { message, date: new Date().toISOString() };
    const result = await feedbackCollection.insertOne(newFeedback);
    revalidatePath("/feedbacks");
    return Response.json(result);
}