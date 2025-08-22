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
        <div className="w-full bg-gray-50 min-h-screen">
        <Navbar />

        {/* Breadcrumbs */}
        <nav className="container mx-auto px-6 md:px-20 lg:px-32 py-4 text-sm">
            <ol className="flex items-center gap-2 text-gray-500">
            <li><a href="/" className="hover:text-gray-700">Home</a></li>
            <li>›</li>
            <li><a href="/mechanics" className="hover:text-gray-700">Mechanics</a></li>
            <li>›</li>
            <li className="text-gray-700 font-semibold">{mechanic.name}</li>
            </ol>
        </nav>

        {/* Main Content */}
        <section className="container mx-auto px-6 md:px-20 lg:px-32 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* LEFT: Profile Details */}
            <div className="lg:col-span-2 space-y-6">
                {/* Profile Header */}
                <div className="rounded-2xl border bg-white p-6 shadow-md hover:shadow-lg transition flex flex-col md:flex-row gap-6">
                <img
                    src={mechanic.image}
                    alt={mechanic.name}
                    className="w-full md:w-48 h-48 rounded-2xl object-cover border"
                />
                <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-900">{mechanic.name}</h1>
                    <p className="text-lg text-gray-700">{mechanic.specialty}</p>
                    <p className="text-gray-500">{mechanic.location}</p>
                    {mechanic.verified && (
                    <p className="mt-2 text-green-600 font-medium">✔ Verified & Trusted</p>
                    )}
                    {/* Rating */}
                    <div className="mt-3 flex items-center gap-1">
                    <span className="text-yellow-500 text-lg">★</span>
                    <span className="text-yellow-500 text-lg">★</span>
                    <span className="text-yellow-500 text-lg">★</span>
                    <span className="text-yellow-500 text-lg">★</span>
                    <span className="text-gray-300 text-lg">★</span>
                    <span className="ml-2 text-sm text-gray-600">(4.0 / 5)</span>
                    </div>
                    <div className="mt-5 flex gap-3">
                    <a
                        href={`tel:${mechanic.phone}`}
                        className="px-6 py-2 rounded-xl text-white font-semibold shadow-md hover:opacity-90 transition"
                        style={{ backgroundColor: THEME }}
                    >
                        Call
                    </a>
                    <a
                        href={`https://wa.me/${mechanic.phone.replace("+", "")}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-2 rounded-xl border font-medium hover:bg-gray-100 transition"
                        style={{ borderColor: THEME, color: "#111827" }}
                    >
                        WhatsApp
                    </a>
                    </div>
                </div>
                </div>

                {/* Services Accordion */}
                <div className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
                <button
                    onClick={() => setShowServices((s) => !s)}
                    className="w-full flex items-center justify-between text-left"
                >
                    <h3 className="font-semibold text-lg text-gray-900">Services Offered</h3>
                    <span className="text-gray-500 text-sm">{showServices ? "Hide" : "Show"}</span>
                </button>
                {showServices && (
                    <ul className="mt-4 space-y-2 text-gray-700 text-sm list-disc list-inside">
                    {mechanic.services?.map((s, i) => (
                        <li key={i}>{s}</li>
                    )) || <li>No services listed</li>}
                    </ul>
                )}
                </div>

                {/* Reviews Accordion */}
                <div className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
                <button
                    onClick={() => setShowReviews((s) => !s)}
                    className="w-full flex items-center justify-between text-left"
                >
                    <h3 className="font-semibold text-lg text-gray-900">Customer Reviews</h3>
                    <span className="text-gray-500 text-sm">{showReviews ? "Hide" : "Show"}</span>
                </button>
                {showReviews && (
                    <div className="mt-4 space-y-4">
                    {mechanic.reviews?.length ? (
                        mechanic.reviews.map((r, i) => (
                        <div key={i} className="rounded-xl border p-4 text-sm bg-gray-50">
                            <div className="font-semibold text-gray-900">{r.name}</div>
                            <div className="text-gray-700 mt-1">{r.comment}</div>
                        </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No reviews yet.</p>
                    )}
                    </div>
                )}
                </div>

                {/* Fraud Awareness Tips */}
                <div className="rounded-2xl border bg-yellow-50 p-6 shadow-sm">
                <h3 className="font-semibold text-lg text-yellow-800">⚠ Safety Tips</h3>
                <ul className="mt-3 text-sm text-yellow-700 list-disc list-inside space-y-1">
                    <li>Always meet mechanics in safe, public places.</li>
                    <li>Verify credentials before paying for services.</li>
                    <li>Beware of unrealistic prices or urgent payment requests.</li>
                    <li>Prefer verified & reviewed mechanics for safety.</li>
                </ul>
                </div>
            </div>

            {/* RIGHT: Detailed Quick Info */}
            <aside className="lg:col-span-1 space-y-6">
                <div className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-lg text-gray-900">Mechanic Info</h3>
                <div className="mt-4 text-sm text-gray-700 space-y-2">
                    <p><strong>Location:</strong> {mechanic.location}</p>
                    <p><strong>Phone:</strong> {mechanic.phone}</p>
                    {mechanic.experience && (
                    <p><strong>Experience:</strong> {mechanic.experience} years</p>
                    )}
                    {mechanic.certifications && (
                    <p><strong>Certifications:</strong> {mechanic.certifications.join(", ")}</p>
                    )}
                    {mechanic.languages && (
                    <p><strong>Languages:</strong> {mechanic.languages.join(", ")}</p>
                    )}
                    {mechanic.workingHours && (
                    <p><strong>Working Hours:</strong> {mechanic.workingHours}</p>
                    )}
                    {mechanic.paymentMethods && (
                    <p><strong>Payment Methods:</strong> {mechanic.paymentMethods.join(", ")}</p>
                    )}
                    {mechanic.association && (
                    <p><strong>Association:</strong> {mechanic.association}</p>
                    )}
                    {mechanic.emergencySupport && (
                    <p><strong>Emergency Support:</strong> ✅ Available</p>
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
