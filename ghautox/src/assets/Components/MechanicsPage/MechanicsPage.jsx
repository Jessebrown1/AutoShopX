    import React from "react";
    import { Link } from "react-router-dom";
    import Navbar from "../Navbar/Navbar";
    import mech1 from "../../mech1.jpeg";
    import mech2 from "../../mech2.jpeg";
    import mech3 from "../../mech3.jpeg";
    import mech4 from "../../mech4.jpeg";
    import mech5 from "../../mech5.jpeg";
    import mech6 from "../../mech6.jpeg";
    

    const mechanicsData = [
    {
        slug: "kwame-mensah",
        name: "Kwame Mensah",
        specialty: "Toyota & Honda Engines",
        location: "Accra, Ghana",
        image: mech1,
        verified: true,
    },
    {
        slug: "ama-boateng",
        name: "Ama Boateng",
        specialty: "Body Works & Spraying",
        location: "Kumasi, Ghana",
        image: mech2,
        verified: true,
    },
    {
        slug: "yaw-kyerematen",
        name: "Yaw Kyerematen",
        specialty: "Electrical & Diagnostics",
        location: "Takoradi, Ghana",
        image: mech3,
        verified: false,
    },
    {
        slug: "abena-owusu",
        name: "Abena Owusu",
        specialty: "Brake Systems & Suspension",
        location: "Cape Coast, Ghana",
        image: mech4,
        verified: true,
    },
    {
        slug: "kojo-tetteh",
        name: "Kojo Tetteh",
        specialty: "General Servicing & Oil Change",
        location: "Tema, Ghana",
        image: mech5,
        verified: false,
    },
    {
        slug: "akosua-adomako",
        name: "Akosua Adomako",
        specialty: "Air Conditioning & Cooling Systems",
        location: "Sunyani, Ghana",
        image: mech6,
        verified: true,
    },
    ];

    const Mechanics = () => {
    return (
        <div>
        {/* Header Section */}
        <div
            className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden relative"
            style={{ backgroundImage: "url('/mecha.png')" }}
            id="Header"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            <Navbar />

            <div className="relative text-left py-4 px-0 text-white w-full">
            <h2 className="text-5xl sm:text-6xl md:text-[82px] max-w-3xl font-semibold pt-20">
                Find Mechanics You Can Rely On
            </h2>
            <p className="mb-6 text-lg max-w-xl">
                From quick fixes to major repairs, get expert help whenever you need it.
            </p>
            <div className="space-x-6 mt-8">
                <a href="#mechanics-list">
                <button className="button2">Find a Mechanic</button>
                </a>
                <button className="button1">Become a Mechanic</button>
            </div>
            </div>
        </div>

        {/* Mechanics Section */}
        <div id="mechanics-list" className="max-w-6xl mx-auto px-4 py-10">
            <h3 className="text-2xl font-semibold mb-6">Available Mechanics</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mechanicsData.map((m) => (
                <div
                key={m.slug}
                className="border rounded-xl shadow-sm hover:shadow-lg transition bg-white overflow-hidden"
                >
                <img src={m.image} alt={m.name} className="w-full h-48 object-cover" />

                <div className="p-4">
                    <h4 className="text-lg font-bold">{m.name}</h4>
                    <p className="text-gray-600">{m.specialty}</p>
                    <p className="text-gray-500 text-sm mt-1">{m.location}</p>
                    {m.verified && (
                    <p className="text-xs text-green-600 mt-2 font-medium">✔ Verified & Trusted</p>
                    )}

                    <div className="flex gap-3 mt-3">
                    <a
                        className="flex-1 px-4 py-2 bg-[#009087] text-white text-center rounded-lg hover:bg-[#00756f] transition"
                        href={`tel:+233201234567`} /* replace per mechanic if you have phone */
                    >
                        Contact
                    </a>

                    <Link
                        to={`/mechanic/${m.slug}`}
                        className="flex-1 px-4 py-2 border border-[#009087] text-[#009087] text-center rounded-lg hover:bg-[#f0fafa] transition"
                    >
                        View Profile
                    </Link>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
    };

    export default Mechanics;
