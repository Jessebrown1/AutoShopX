import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./Filterbar.css";
import wheel from "../../wheel.jpeg"
import vitz from "../../vitz.png"
import vitznew from "../../vitznew.jpg"
import mustan from "../../mustan.jpg"
import camaro from "../../camaro.jpg"
import honda from "../../honda.jpg"
import juke from "../../juke.jpg"
import kia from "../../kia.jpg"
import benz from "../../benz.jpg"
import dai from "../../dai.jpg";
import bmw from "../../bmw.jpg";
import lexus from "../../lexus.jpg";

export default function Filterbar() {
// --- Your items (replace/fetch later)
const [items] = useState([ 
    {
    id: 1,
    brand: "Toyota",
    model: "Corolla",
    year: 2018,
    condition: "New",
    img: wheel,
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
    img: vitz,
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
    img: camaro ,
    title: "2016+ Camaro carbon fiber steering wheel",
    price: 799.99,
    chips: ["Interior"],
    },
    {
        id: 4,
        brand: "Chevrolet",
        model: "Camaro",
        year: 2014,
        condition: "New",
        img: mustan,
        title: "Chevrolet Camaro lether seat",
        price: 300,
        chips: ["Interior"],
        },
        {
            id: 5,
            brand: "Toyota",
            model: "Vitz",
            year: 2018,
            condition: "Used",
            img: vitznew,
            title: "Front Bumper – Toyota Vitz 2014 (RS)",
            price: 300,
            chips: ["Body"],
            },
            {
            id: 6,
            brand: "Honda",
            model: "Vitz",
            year: 2015,
            condition: "New",
            img: honda,
            title: "2015-2021 Honda Fit Retrofit Headlights",
            price: 300,
            chips: ["Body"],
            },
            {
            id: 7,
            brand: "Nissan",
            model: "Juke",
            year: 2018,
            condition: "Used",
            img: juke,
            title: "Front Passenger Side And Rear Doors Nissan Juke 2018",
            price: 300,
            chips: ["Body"],
            },
            {
            id: 8,
            brand: "Kia",
            model: "Kona ",
            year: 2014,
            condition: "New",
            img: kia,
            title: "Red Car Aluminum Air Conditioner Switch Knob Cover For Hyundai Kona 2024 2025",
            price: 300,
            chips: ["Interior"],
            },
            {
            id: 9,
            brand: "Mercedes-Benz",
            model: " SL600",
            year: 2018,
            condition: "Used",
            img: benz,
            title: "Front Grille For Mercedes Benz SL R230 SL600 S-Style 03-06 Chrome & Silver",
            price: 300,
            chips: ["Body"],
            },
            {
            id: 10,
            brand: "Hyundai",
            model: "I30",
            year: 2014,
            condition: "Used",
            img: dai,
            title: "Rear bumper Hyundai I30)",
            price: 300,
            chips: ["Body"],
            },
            {
            id: 11,
            brand: "BMW",
            model: " 5 SERIES",
            year: 2014,
            condition: "Used",
            img: bmw,
            title: "BMW 5 SERIES G30/31 18 ALLOY WHEEL RIM 662M M SPORT FRONT 8J OEM 8093405",
            price: 300,
            chips: ["Wheels"],
            },
            {
            id: 12,
            brand: "Lexus",
            model: "Vitz",
            year: 2006,
            condition: "Used",
            img: lexus,
            title: "Car Bonnet Hood Bra in Diamond Fits Lexus is ISF IS250 IS350 2006",
            price: 300,
            chips: ["Body"],
            }
            
]);

// --- Keep Brand list short & familiar
const POPULAR_BRANDS = [
    "Toyota", "Honda", "Nissan", "Hyundai", "Kia",
    "Mercedes-Benz", "BMW", "Lexus", "Volkswagen",
    "Mazda", "Subaru", "Ford", "Chevrolet", "Audi",
    "Land Rover", "Mitsubishi",
];

// --- Selections
const [brand, setBrand] = useState("");
const [model, setModel] = useState("");
const [year, setYear] = useState("");
const [condition, setCondition] = useState("");

// --- Dropdown data / loading
const [brands] = useState(POPULAR_BRANDS); // using curated list directly
const [models, setModels] = useState([]);
const [loadingBrands] = useState(false);   // set to true if you later fetch brands
const [loadingModels, setLoadingModels] = useState(false);
const [err, setErr] = useState("");

const norm = (s) => (s || "").toLowerCase().trim();
const isLoading = loadingBrands || loadingModels;

// Fetch models for selected brand (vPIC)
useEffect(() => {
    const run = async () => {
    if (!brand) {
        setModels([]);
        return;
    }
    try {
        setLoadingModels(true);
        setErr("");
        const res = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${encodeURIComponent(
            brand
        )}?format=json`
        );
        const data = await res.json();
        const list = (data?.Results || [])
        .map((r) => (r.Model_Name || "").trim())
        .filter(Boolean);
        const unique = Array.from(new Set(list)).sort((a, b) =>
        a.localeCompare(b)
        );
        setModels(unique);
    } catch (e) {
        console.error("Error loading models:", e);
        setErr("Failed to load models.");
        setModels([]);
    } finally {
        setLoadingModels(false);
    }
    };
    run();
}, [brand]);

// Dynamic Years from your items (based on selected brand + model)
const availableYears =
    brand && model
    ? [
        ...new Set(
            items
            .filter(
                (w) => norm(w.brand) === norm(brand) && norm(w.model) === norm(model)
            )
            .map((w) => w.year)
        ),
        ]
    : [];

// Dynamic Conditions (based on brand + model + year)
const availableConditions =
    brand && model && year
    ? [
        ...new Set(
            items
            .filter(
                (w) =>
                norm(w.brand) === norm(brand) &&
                norm(w.model) === norm(model) &&
                String(w.year) === String(year)
            )
            .map((w) => w.condition)
        ),
        ]
    : [];

// Filtered results
const filtered = items.filter((w) => {
    if (brand && norm(w.brand) !== norm(brand)) return false;
    if (model && norm(w.model) !== norm(model)) return false;
    if (year && String(w.year) !== String(year)) return false;
    if (condition && w.condition !== condition) return false;
    return true;
});

// Reset filters
const resetFilters = () => {
    setBrand("");
    setModel("");
    setYear("");
    setCondition("");
};

return (
    <div className="w-full">
    {/* Header above filter bar */}
    <div className="mx-auto max-w-6xl px-4 mt-4 flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold text-neutral-800">Search by</h2>
        <button
        onClick={resetFilters}
        className="text-sm text-blue-600 hover:text-blue-700 underline underline-offset-2"
        >
        Reset filters
        </button>
    </div>

    {/* Filter bar */}
    <div className="sticky top-14 z-20 w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 ring-1 ring-neutral-200 shadow-sm">
        <div className="mx-auto max-w-6xl px-4 py-4 grid grid-cols-2 md:grid-cols-4 gap-3">
        {/* Brand */}
        <div className="relative">
            <select
            value={brand}
            onChange={(e) => {
                setBrand(e.target.value);
                setModel("");
                setYear("");
                setCondition("");
            }}
            className="w-full appearance-none rounded-xl bg-white py-3 pl-4 pr-10 text-sm font-medium border border-neutral-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
            <option value="">Car Brand</option>
            {brands.map((b) => (
                <option key={b} value={b}>
                {b}
                </option>
            ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
            ▾
            </span>
        </div>

        {/* Model */}
        <div className="relative">
            <select
            value={model}
            onChange={(e) => {
                setModel(e.target.value);
                setYear("");
                setCondition("");
            }}
            disabled={!brand || loadingModels}
            className="w-full appearance-none rounded-xl bg-white py-3 pl-4 pr-10 text-sm font-medium border border-neutral-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-neutral-100"
            >
            <option value="">
                {!brand
                ? "Select brand first"
                : loadingModels
                ? "Loading models..."
                : "Model"}
            </option>
            {models.map((m) => (
                <option key={m} value={m}>
                {m}
                </option>
            ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
            ▾
            </span>
        </div>

        {/* Year */}
        <div className="relative">
            <select
            value={year}
            onChange={(e) => {
                setYear(e.target.value);
                setCondition("");
            }}
            disabled={!brand || !model}
            className="w-full appearance-none rounded-xl bg-white py-3 pl-4 pr-10 text-sm font-medium border border-neutral-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-neutral-100"
            >
            <option value="">
                {brand && model ? "Year" : "Select model first"}
            </option>
            {availableYears.map((y) => (
                <option key={y} value={y}>
                {y}
                </option>
            ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
            ▾
            </span>
        </div>

        {/* Condition */}
        <div className="relative">
            <select
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            disabled={!brand || !model || !year}
            className="w-full appearance-none rounded-xl bg-white py-3 pl-4 pr-10 text-sm font-medium border border-neutral-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-neutral-100"
            >
            <option value="">
                {brand && model && year ? "Condition" : "Select year first"}
            </option>
            {availableConditions.map((c) => (
                <option key={c} value={c}>
                {c}
                </option>
            ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
            ▾
            </span>
        </div>
        </div>
    </div>

    {/* Spinner under the bar (shows while brands or models are loading) */}
    {(loadingBrands || loadingModels) && (
        <div className="flex justify-center mt-4">
        <DotLottieReact
            src="https://lottie.host/7fe56288-e517-4b29-b628-b8502d1043d6/kX7JI3bkzs.lottie"
            loop
            autoplay
            style={{ width: "120px", height: "120px" }}
        />
        </div>
    )}

    {/* Error (optional) */}
    {err && (
        <div className="mx-auto max-w-6xl px-4 mt-3 text-sm text-red-600">
        {err}
        </div>
    )}

    {/* Results count */}
    <div className="mx-auto max-w-6xl px-4 mt-6">
        <p className="text-sm text-neutral-600">
        Showing {filtered.length} result{filtered.length !== 1 && "s"}
        </p>
    </div>

    {/* Grid (fades while loading) */}
    <div className={`mx-auto max-w-6xl px-4 transition-opacity duration-200 ${isLoading ? "opacity-50 pointer-events-none" : "opacity-100"}`}>
        <section
        className="mt-2 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        aria-busy={isLoading}
        aria-live="polite"
        >
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
                <h3 className="text-[15px] font-semibold leading-snug">
                {p.title}
                </h3>
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
        {filtered.length === 0 && !isLoading && (
            <div className="col-span-full text-center text-neutral-500 py-10">
            No results. Try adjusting filters.
            </div>
        )}
        </section>
    </div>
    </div>
);
}
