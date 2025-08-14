    import React, { useState } from "react";
    import "./Filterbar.css";
    

    export default function Filterbar() {
    const WHEELS = [
        {
        id: 1,
        brand: "Toyota",
        model: "Corolla",
        year: 2018,
        condition: "Used",
        img: "/images/wheels/toyota_corolla_17x7.jpg",
        title: "17×7 Toyota Corolla Rim 2018 (42611Y540)",
        price: 300,
        chips: ["Wheels"],
        },
        {
        id: 2,
        brand: "Toyota",
        model: "Vitz",
        year: 2014,
        condition: "Used",
        img: "/images/wheels/toyota_vitz_bumper.jpg",
        title: "Front Bumper – Toyota Vitz 2014 (RS)",
        price: 300,
        chips: ["Body"],
        },
        {
        id: 3,
        brand: "Chevrolet",
        model: "Camaro",
        year: 2016,
        condition: "New",
        img: "/images/wheels/camaro_steering_wheel.jpg",
        title: "Camaro Carbon Steering Wheel (C16+)",
        price: 799.99,
        chips: ["Interior"],
        },
    ];

    const BRANDS = ["Toyota", "Honda", "Nissan", "Chevrolet", "BMW", "Mitsubishi", "Mazda", "Subaru", "Suzuki", "Isuzu", "Mercedes-Benz","Ford", "Lexus","Hyundai","Kia","Land Rover","Audi"];
    const MODELS = ["Corolla", "Vitz", "Civic", "Altima", "Camaro", "3 Series"];
    const YEARS = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008,2007,2006,2005,2004,2003,2002,2001,2000];
    const CONDITIONS = ["New", "Used"];

    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [condition, setCondition] = useState("");

    const filtered = WHEELS.filter((w) => {
        if (brand && w.brand !== brand) return false;
        if (model && w.model !== model) return false;
        if (year && String(w.year) !== String(year)) return false;
        if (condition && w.condition !== condition) return false;
        return true;
    });

    return (
        <div className="w-full">
        {/* Full-width filter bar */}
        <div className="sticky top-14 z-20 w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 ring-1 ring-neutral-200 shadow-sm">
            <div className="mx-auto max-w-6xl px-4 py-4 grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* Car Brand */}
            <div className="w-full">
                <label className="block">
                <span className="sr-only">Car Brand</span>
                <div className="relative">
                    <select
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="w-full appearance-none rounded-xl bg-white py-3 pl-4 pr-10 text-sm font-medium border border-neutral-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                    <option value="">Car Brand</option>
                    {BRANDS.map((b) => (
                        <option key={b} value={b}>{b}</option>
                    ))}
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">▾</span>
                </div>
                </label>
            </div>

            {/* Model */}
            <div className="w-full">
                <label className="block">
                <span className="sr-only">Model</span>
                <div className="relative">
                    <select
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="w-full appearance-none rounded-xl bg-white py-3 pl-4 pr-10 text-sm font-medium border border-neutral-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                    <option value="">Model</option>
                    {MODELS.map((m) => (
                        <option key={m} value={m}>{m}</option>
                    ))}
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">▾</span>
                </div>
                </label>
            </div>

            {/* Year */}
            <div className="w-full">
                <label className="block">
                <span className="sr-only">Year</span>
                <div className="relative">
                    <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full appearance-none rounded-xl bg-white py-3 pl-4 pr-10 text-sm font-medium border border-neutral-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                    <option value="">Year</option>
                    {YEARS.map((y) => (
                        <option key={y} value={y}>{y}</option>
                    ))}
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">▾</span>
                </div>
                </label>
            </div>

            {/* Condition */}
            <div className="w-full">
                <label className="block">
                <span className="sr-only">Condition</span>
                <div className="relative">
                    <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="w-full appearance-none rounded-xl bg-white py-3 pl-4 pr-10 text-sm font-medium border border-neutral-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                    <option value="">Condition</option>
                    {CONDITIONS.map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">▾</span>
                </div>
                </label>
            </div>
            </div>
        </div>

        {/* Wheels Grid */}
        <div className="mx-auto max-w-6xl px-4">
            <section className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
                <div
                key={p.id}
                className="group rounded-2xl bg-white ring-1 ring-neutral-200 shadow-sm hover:shadow-md transition-all"
                >
                <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
                    <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-[15px] font-semibold leading-snug">{p.title}</h3>
                    <div className="mt-2 text-xl font-bold">₵{p.price}</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                    {p.chips.map((c) => (
                        <span
                        key={c}
                        className="text-[11px] rounded-full px-3 py-1 border border-neutral-200 bg-neutral-100 text-neutral-800"
                        >
                        {c}
                        </span>
                    ))}
                    </div>
                </div>
                </div>
            ))}
            {filtered.length === 0 && (
                <div className="col-span-full text-center text-neutral-500 py-10">
                No results. Try adjusting filters.
                </div>
            )}
            </section>
        </div>
        </div>
    );
    }
