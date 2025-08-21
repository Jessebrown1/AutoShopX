import React, { useState } from "react";

const THEME = "#009087";

export default function MarketplaceProductPage({ product, seller, similar = [], onBack }) {
  const [active, setActive] = useState(0);
  const [showSafety, setShowSafety] = useState(true);
  const [showQA, setShowQA] = useState(true);

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-10 text-center text-gray-500">
        Product not found
      </div>
    );
  }

  const mergedSeller = seller || {
    name: "AutoHub Accra",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&auto=format&fit=crop",
    rating: 4.8,
    responseRate: "95%",
    responseTime: "within 1h",
    memberSince: "2021",
    location: product.location || "Accra, Ghana",
    phone: "+233 20 123 4567",
    whatsapp: "+233 55 987 6543",
  };

  const images = product.images?.length ? product.images : [product.img];

  return (
    <div className="w-full">
      {/* Top bar / breadcrumbs */}
      <nav className="container mx-auto px-6 md:px-20 lg:px-32 py-4 text-sm">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                onBack
                  ? onBack()
                  : window.history.length > 1
                  ? window.history.back()
                  : (window.location.href = "/")
              }
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-gray-700 hover:bg-gray-50"
              style={{ borderColor: THEME }}
            >
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                <path d="M12 4l-6 6 6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back
            </button>
            <ol className="flex items-center gap-2 text-gray-500">
              <li><a href="/" className="hover:text-gray-700">Home</a></li>
              <li>›</li>
              <li><a href="/browse" className="hover:text-gray-700">Browse Parts</a></li>
              <li>›</li>
              <li className="text-gray-700">{product.category || product.chips?.[0]}</li>
            </ol>
          </div>

          <button
            className="text-sm underline underline-offset-4 hover:opacity-90"
            style={{ color: THEME }}
            onClick={() => alert("Open Report modal")}
          >
            Report listing
          </button>
        </div>
      </nav>

      {/* Main content */}
      <section className="container mx-auto px-6 md:px-20 lg:px-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT: Gallery + Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Gallery */}
            <div className="rounded-2xl border bg-white p-4 shadow-sm">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-9">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                    <img
                      src={images[Math.min(active, images.length - 1)]}
                      alt={product.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-3 grid grid-cols-6 md:grid-cols-1 gap-3">
                  {images.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`relative rounded-lg overflow-hidden border ${
                        i === active ? "border-[3px]" : "border"
                      }`}
                      style={{ borderColor: i === active ? THEME : "rgba(0,0,0,0.1)" }}
                    >
                      <img src={src} alt={`thumb-${i}`} className="h-20 w-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Title + Price + Badges + Stats */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">{product.title}</h1>

              <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
                {product.condition && (
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    {product.condition}
                  </span>
                )}
                {(product.category || product.chips?.[0]) && (
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    {product.category || product.chips?.[0]}
                  </span>
                )}
                {product.location && (
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    {product.location}
                  </span>
                )}
              </div>

              <div className="mt-3 flex items-center justify-between">
                <p className="text-3xl font-semibold" style={{ color: THEME }}>
                  {(product.currency || "₵")}{Intl.NumberFormat().format(product.price)}
                </p>
                <div className="text-xs text-gray-500">
                  {product.stats?.views != null && <div>👀 {product.stats.views} views</div>}
                  {product.stats?.posted && <div>📅 Posted {product.stats.posted}</div>}
                </div>
              </div>

              <ul className="mt-4 flex flex-wrap gap-3 text-sm text-gray-700">
                <li className="inline-flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">
                  ✔ Verified seller
                </li>
                <li className="inline-flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">
                  🛡 Buyer protection
                </li>
                <li className="inline-flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">
                  ↩ Returns (where applicable)
                </li>
              </ul>
            </div>

            {/* Specs */}
            {(product.specs && Object.keys(product.specs).length > 0) && (
              <div className="rounded-2xl border bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900">Specifications</h3>
                <div className="mt-3 rounded-xl border bg-white">
                  <dl className="divide-y">
                    {Object.entries(product.specs).map(([k, v]) => (
                      <div key={k} className="grid grid-cols-3 gap-4 p-3 text-sm">
                        <dt className="col-span-1 text-gray-500">{k}</dt>
                        <dd className="col-span-2 text-gray-800">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            )}

            {/* Description */}
            {product.description && (
              <div className="rounded-2xl border bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900">Description</h3>
                <p className="mt-2 text-gray-700 leading-relaxed">{product.description}</p>
              </div>
            )}

            {/* Safety tips (accordion) */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <button
                onClick={() => setShowSafety((s) => !s)}
                className="w-full flex items-center justify-between"
              >
                <h3 className="font-semibold text-gray-900">Safety tips</h3>
                <span className="text-gray-500">{showSafety ? "Hide" : "Show"}</span>
              </button>
              {showSafety && (
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li>• Meet in a public, well-lit place (or trusted workshop).</li>
                  <li>• Verify part number & compatibility before paying.</li>
                  <li>• Test electronics/mechanics when possible.</li>
                  <li>• Use secure payment; avoid prepayment to strangers.</li>
                  <li>• Request a receipt with seller contact.</li>
                </ul>
              )}
            </div>

            {/* Q&A */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <button
                onClick={() => setShowQA((s) => !s)}
                className="w-full flex items-center justify-between"
              >
                <h3 className="font-semibold text-gray-900">Questions & Answers</h3>
                <span className="text-gray-500">{showQA ? "Hide" : "Show"}</span>
              </button>
              {showQA && (
                <div className="mt-3 space-y-4">
                  <QA q="Does it fit Corolla 2017?" a="Yes, fits 2016–2019. Confirm bolt pattern." />
                  <QA q="Any cracks?" a="No cracks or welds. Only light scuffs." />
                  <button
                    className="px-4 py-2 rounded-lg border text-gray-800 hover:bg-gray-50"
                    style={{ borderColor: THEME }}
                    onClick={() => alert("Open Ask a question form")}
                  >
                    Ask a question
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: Seller / Actions */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <img
                  src={mergedSeller.avatar}
                  alt={mergedSeller.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{mergedSeller.name}</div>
                  <div className="text-sm text-gray-500">{mergedSeller.location}</div>
                </div>
                <div className="text-right text-xs text-gray-500">
                  ⭐ {mergedSeller.rating} <br /> {mergedSeller.responseRate} response
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2">
                <a
                  href={`tel:${(mergedSeller.phone || "").replace(/\s/g, "")}`}
                  className="w-full px-4 py-2 rounded-xl text-white text-center"
                  style={{ backgroundColor: THEME }}
                >
                  Call seller
                </a>
                <a
                  href={`https://wa.me/${(mergedSeller.whatsapp || "").replace(/[^\d]/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full px-4 py-2 rounded-xl border text-center hover:bg-gray-50"
                  style={{ borderColor: THEME, color: "#111827" }}
                >
                  Chat on WhatsApp
                </a>
                <button
                  onClick={() => alert("Open Make Offer modal")}
                  className="w-full px-4 py-2 rounded-xl border hover:bg-gray-50"
                  style={{ borderColor: THEME, color: "#111827" }}
                >
                  Make an offer
                </button>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-gray-500">
                <div>Member since: {mergedSeller.memberSince}</div>
                <div>Responds: {mergedSeller.responseTime}</div>
              </div>
            </div>

            {/* Similar listings */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-gray-900">Similar listings</h3>
              <div className="mt-3 grid gap-3">
                {(similar.length ? similar : demoSimilar(product)).slice(0, 3).map((s) => (
                  <a
                    key={s.id}
                    href="#"
                    className="flex gap-3 rounded-xl border p-2 hover:shadow-sm transition"
                    style={{ borderColor: "rgba(0,0,0,0.08)" }}
                  >
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-16 w-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900 line-clamp-2">{s.title}</div>
                      <div className="text-sm font-semibold" style={{ color: THEME }}>
                        {(product.currency || "₵")}
                        {Intl.NumberFormat().format(s.price)}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Sticky mobile action bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-t p-3 md:hidden">
        <div className="container mx-auto px-4 flex items-center gap-3">
          <div className="flex-1">
            <div className="text-xs text-gray-500">Price</div>
            <div className="text-lg font-semibold" style={{ color: THEME }}>
              {(product.currency || "₵")}
              {Intl.NumberFormat().format(product.price)}
            </div>
          </div>
          <a
            href={`tel:${(mergedSeller.phone || "").replace(/\s/g, "")}`}
            className="px-4 py-2 rounded-xl text-white"
            style={{ backgroundColor: THEME }}
          >
            Call
          </a>
          <a
            href={`https://wa.me/${(mergedSeller.whatsapp || "").replace(/[^\d]/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl border"
            style={{ borderColor: THEME, color: "#111827" }}
          >
            Chat
          </a>
        </div>
      </div>
    </div>
  );
}

function QA({ q, a }) {
  return (
    <div className="rounded-xl border p-3 text-sm">
      <div className="font-medium text-gray-900">Q: {q}</div>
      <div className="text-gray-700 mt-1">A: {a}</div>
    </div>
  );
}

function demoSimilar(product) {
  return [
    {
      id: "sim1",
      title: `${product.brand || "Toyota"} ${product.model || "Corolla"} OEM Rim 17”`,
      price: Number(product.price || 300) + 20,
      image:
        "https://images.unsplash.com/photo-1622643257931-ee02f77454d2?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "sim2",
      title: "Alloy Wheel 17x7.5 – 5x114.3",
      price: Number(product.price || 300) - 10,
      image:
        "https://images.unsplash.com/photo-1517153295259-74eb0b416cee?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "sim3",
      title: "Hubcaps Set (4) – Corolla 2016–2018",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1605649487217-5f3d1d5e89c1?q=80&w=1200&auto=format&fit=crop",
    },
  ];
}
