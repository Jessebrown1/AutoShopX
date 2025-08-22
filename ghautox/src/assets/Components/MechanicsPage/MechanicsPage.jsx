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
                name: "Kwame Autos",
                slug: "kwame-autos",
                specialty: "Engine & Transmission Specialist",
                location: "Accra, Ghana",
                phone: "+233501234567",
                image: mech1,
                experience: 12,
                certifications: ["ASE Certified", "Toyota Service Training"],
                languages: ["English", "Twi"],
                workingHours: "Mon - Sat, 8 AM - 6 PM",
                paymentMethods: ["Cash", "Mobile Money", "Card"],
                association: "Ghana Auto Mechanics Association",
                emergencySupport: true,
                verified: true,
                services: ["Engine Overhaul", "Transmission Repair", "Diagnostics"],
                reviews: [
                { name: "John Doe", comment: "Very professional, fixed my car quickly." }
                ]
            },
            {
                name: "Mensah Garage",
                slug: "mensah-garage",
                specialty: "Brake & Suspension Expert",
                location: "Kumasi, Ghana",
                phone: "+233509876543",
                image: mech2,
                experience: 8,
                certifications: ["Bosch Service Training"],
                languages: ["English", "Akan"],
                workingHours: "Mon - Fri, 9 AM - 5 PM",
                paymentMethods: ["Cash", "Mobile Money"],
                association: "Kumasi Auto Association",
                emergencySupport: false,
                verified: true,
                services: ["Brake Repair", "Shock Absorber Replacement", "Wheel Alignment"],
                reviews: [
                { name: "Ama Boateng", comment: "Great service, my brakes feel brand new." }
                ]
            },
            {
                name: "Adjei Motors",
                slug: "adjei-motors",
                specialty: "Electrical & Diagnostics",
                location: "Tema, Ghana",
                phone: "+233503214589",
                image: mech3,
                experience: 15,
                certifications: ["Nissan Service Training", "Hybrid Systems Certificate"],
                languages: ["English", "Ga"],
                workingHours: "Mon - Sat, 7 AM - 6 PM",
                paymentMethods: ["Cash", "Mobile Money", "Bank Transfer"],
                association: "Tema Auto Electricians Union",
                emergencySupport: true,
                verified: true,
                services: ["Car Wiring", "ECU Diagnostics", "Battery Replacement"],
                reviews: [
                { name: "Kwesi Antwi", comment: "My car's electrical faults were solved perfectly." }
                ]
            },
            {
                name: "Owusu Auto Clinic",
                slug: "owusu-auto-clinic",
                specialty: "Air Conditioning & Cooling Systems",
                location: "Takoradi, Ghana",
                phone: "+233545678123",
                image: mech4,
                experience: 10,
                certifications: ["Certified Cooling Systems Specialist"],
                languages: ["English", "Fante"],
                workingHours: "Mon - Sat, 8 AM - 5 PM",
                paymentMethods: ["Cash", "Mobile Money"],
                association: "Takoradi Mechanics Association",
                emergencySupport: false,
                verified: true,
                services: ["AC Gas Refill", "Radiator Repairs", "Cooling System Checks"],
                reviews: [
                { name: "Esi Koomson", comment: "Cool and refreshing air again, thanks Owusu Auto!" }
                ]
            },
            {
                name: "Kwaku's AutoWorks",
                slug: "kwakus-autoworks",
                specialty: "Bodywork & Spray Painting",
                location: "Accra, Ghana",
                phone: "+233501112233",
                image: mech5,
                experience: 20,
                certifications: ["Certified Auto Body Technician"],
                languages: ["English", "Twi"],
                workingHours: "Mon - Sat, 8 AM - 6 PM",
                paymentMethods: ["Cash", "Mobile Money", "Card"],
                association: "Ghana Auto Body Association",
                emergencySupport: false,
                verified: true,
                services: ["Panel Beating", "Spray Painting", "Rust Removal"],
                reviews: [
                { name: "Michael Owusu", comment: "My car looks brand new after the paint job." }
                ]
            },
            {
                name: "Nana Aba Auto Repairs",
                slug: "nana-yaw-auto-repairs",
                specialty: "General Auto Repairs",
                location: "Cape Coast, Ghana",
                phone: "+233502223344",
                image: mech6,
                experience: 7,
                certifications: ["ASE Certified"],
                languages: ["English", "Fante"],
                workingHours: "Mon - Sun, 8 AM - 7 PM",
                paymentMethods: ["Cash", "Mobile Money"],
                association: "Cape Coast Mechanics Union",
                emergencySupport: true,
                verified: true,
                services: ["Engine Repairs", "Suspension Work", "Oil Change"],
                reviews: [
                { name: "Akua Mensima", comment: "Reliable and affordable, highly recommend." }
                ]
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
