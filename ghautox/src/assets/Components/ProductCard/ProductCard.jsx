    // src/components/ProductCard.jsx
    import React from "react";

    export default function ProductCard({ item }) {
    return (
        <div className="group rounded-2xl bg-white ring-1 ring-neutral-200 shadow-sm hover:shadow-md transition-all">
        <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
            <img
            src={item.img}
            alt={item.title}
            className="h-full w-full object-cover group-hover:scale-105 transition"
            />
        </div>
        <div className="p-4">
            <h3 className="text-[15px] font-semibold leading-snug">{item.title}</h3>
            <div className="mt-2 text-xl font-bold">₵{item.price}</div>
            <div className="mt-3 flex flex-wrap gap-2">
            {item.chips.map((c) => (
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
    );
    }
