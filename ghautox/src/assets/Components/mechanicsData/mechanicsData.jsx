        // src/data/mechanicsData.js
        import Navbar from "../Navbar/Navbar";
        import mech1 from "../../mech1.jpeg";
        import mech2 from "../../mech2.jpeg";
        import mech3 from "../../mech3.jpeg";
        import mech4 from "../../mech4.jpeg";
        import mech5 from "../../mech5.jpeg";
        const mechanicsData = [
            {
                    name: "Kwame Autos",
                    slug: "kwame-autos",
                    specialty: "Engine & Transmission Specialist",
                    location: "Accra, Ghana",
                    phone: "+233501234567",
                    image:mech1,
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
                    image: mech6,
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
                    image: mech5,
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
,
        ];
        
        export default mechanicsData;
        