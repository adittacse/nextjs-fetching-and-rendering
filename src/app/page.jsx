export default function Home() {
    return (
        <div className="flex flex-col min-h-screen items-stretch justify-center text-center gap-5">
            <div className="relative">
                <h2 className="text-4xl font-bold">Next JS Fetching & Rendering</h2>
                <h2 className="text-8xl absolute inset-0 -top-20 opacity-10 font-medium">
                    Fetching Rendering & Styling
                </h2>
            </div>
            <div>
                <button className="btn">Let&#39;s Explore</button>
            </div>
        </div>
    );
}
