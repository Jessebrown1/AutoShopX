    // src/pages/MechanicProfile.jsx
    import React, { useState } from "react";
    import { useParams } from "react-router-dom";
    import Navbar from "../Navbar/Navbar";
    import mechanicsData from "../mechanicsData/mechanicsData";

    const THEME = "#009087";

    const MechanicProfile = () => {
    const { slug } = useParams();
    const mechanic = mechanicsData.find((m) => m.slug === slug);

    const [showServices, setShowServices] = useState(true);
    const [showReviews, setShowReviews] = useState(true);

    if (!mechanic) {
        return <h2 className="text-center text-xl py-10">Mechanic not found</h2>;
    }

    return (
        <div className="w-full">
        <Navbar />

        {/* Breadcrumbs */}
        <nav className="container mx-auto px-6 md:px-20 lg:px-32 py-4 text-sm">
            <ol className="flex items-center gap-2 text-gray-500">
            <li><a href="/" className="hover:text-gray-700">Home</a></li>
            <li>›</li>
            <li><a href="/mechanics" className="hover:text-gray-700">Mechanics</a></li>
            <li>›</li>
            <li className="text-gray-700">{mechanic.name}</li>
            </ol>
        </nav>

        {/* Main Content */}
        <section className="container mx-auto px-6 md:px-20 lg:px-32 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* LEFT: Profile Details */}
            <div className="lg:col-span-2 space-y-6">
                {/* Profile Header */}
                <div className="rounded-2xl border bg-white p-6 shadow-sm flex flex-col md:flex-row gap-6">
                <img
                    src={mechanic.image}
                    alt={mechanic.name}
                    className="w-full md:w-48 h-48 rounded-xl object-cover"
                />
                <div className="flex-1">
                    <h1 className="text-2xl font-bold text-gray-900">{mechanic.name}</h1>
                    <p className="text-gray-600">{mechanic.specialty}</p>
                    <p className="text-gray-500">{mechanic.location}</p>
                    {mechanic.verified && (
                    <p className="mt-2 text-green-600">✔ Verified & Trusted</p>
                    )}
                    <div className="mt-4 flex gap-3">
                    <a
                        href={`tel:${mechanic.phone}`}
                        className="px-4 py-2 rounded-xl text-white text-center"
                        style={{ backgroundColor: THEME }}
                    >
                        Call
                    </a>
                    <a
                        href={`https://wa.me/${mechanic.phone.replace("+", "")}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-xl border text-center hover:bg-gray-50"
                        style={{ borderColor: THEME, color: "#111827" }}
                    >
                        WhatsApp
                    </a>
                    </div>
                </div>
                </div>

                {/* Services Accordion */}
                <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <button
                    onClick={() => setShowServices((s) => !s)}
                    className="w-full flex items-center justify-between"
                >
                    <h3 className="font-semibold text-gray-900">Services Offered</h3>
                    <span className="text-gray-500">{showServices ? "Hide" : "Show"}</span>
                </button>
                {showServices && (
                    <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    {mechanic.services?.map((s, i) => (
                        <li key={i}>• {s}</li>
                    )) || <li>No services listed</li>}
                    </ul>
                )}
                </div>

                {/* Reviews Accordion */}
                <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <button
                    onClick={() => setShowReviews((s) => !s)}
                    className="w-full flex items-center justify-between"
                >
                    <h3 className="font-semibold text-gray-900">Customer Reviews</h3>
                    <span className="text-gray-500">{showReviews ? "Hide" : "Show"}</span>
                </button>
                {showReviews && (
                    <div className="mt-3 space-y-4">
                    {mechanic.reviews?.length ? (
                        mechanic.reviews.map((r, i) => (
                        <div key={i} className="rounded-xl border p-3 text-sm">
                            <div className="font-medium text-gray-900">{r.name}</div>
                            <div className="text-gray-700 mt-1">{r.comment}</div>
                        </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No reviews yet.</p>
                    )}
                    </div>
                )}
                </div>
            </div>

            {/* RIGHT: Quick Info */}
            <aside className="lg:col-span-1 space-y-6">
                <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900">Mechanic Info</h3>
                <div className="mt-3 text-sm text-gray-700 space-y-2">
                    <p><strong>Location:</strong> {mechanic.location}</p>
                    <p><strong>Phone:</strong> {mechanic.phone}</p>
                    {mechanic.experience && (
                    <p><strong>Experience:</strong> {mechanic.experience} years</p>
                    )}
                </div>
                </div>
            </aside>
            </div>
        </section>
        </div>
    );
    };

    export default MechanicProfile;