    import React from "react";

    const THEME = "#009087";

    export default function Footer() {
    return (
        <footer className="mt-16 bg-[#0f172a] text-gray-300">
        {/* TRUST STRIP */}
        <div className="w-full bg-[#0b1328] border-b border-white/10">
            <div className="container mx-auto px-6 md:px-20 lg:px-32 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <TrustItem
                title="Verified Sellers"
                desc="Vendor screening & flags"
                icon={<ShieldCheckIcon />}
                />
                <TrustItem
                title="Buyer Protection"
                desc="Dispute support on issues"
                icon={<BadgeCheckIcon />}
                />
                <TrustItem
                title="Trusted Marketplace"
                desc="Active moderation"
                icon={<SparklesIcon />}
                />
                <TrustItem
                title="Secure Payments"
                desc="Safer transaction options"
                icon={<LockIcon />}
                />
            </div>
            </div>
        </div>

        {/* MAIN */}
        <div className="container mx-auto px-6 md:px-20 lg:px-32 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
                <div className="flex items-center gap-2">
                <div
                    className="h-9 w-9 rounded-lg grid place-items-center font-extrabold text-white"
                    style={{ backgroundColor: THEME }}
                    aria-label="Ghautox logo"
                >
                    G
                </div>
                <span className="text-xl font-semibold text-white">Ghautox</span>
                </div>
                <p className="mt-3 text-sm text-gray-400 leading-6">
                Ghana’s trusted marketplace for car parts. Buy & sell wheels, body parts,
                interiors, and more — safely and fast.
                </p>

                {/* Socials */}
                <div className="mt-4 flex items-center gap-3">
                <Social icon="facebook" href="#" />
                <Social icon="instagram" href="#" />
                <Social icon="x" href="#" />
                <Social icon="whatsapp" href="#" />
                </div>

                {/* Coming Soon Apps */}
                <div className="mt-6">
                <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">
                    Mobile apps — coming soon
                </p>
                <div className="flex items-center gap-2">
                    <StoreSoon platform="Android" />
                    <StoreSoon platform="iOS" />
                </div>
                </div>
            </div>

            {/* Explore */}
            <div>
                <h4 className="text-white font-semibold">Explore</h4>
                <ul className="mt-4 space-y-3 text-sm">
                <li><a className="hover:text-white" href="/#">Browse Parts</a></li>
                <li><a className="hover:text-white" href="/#">Sell Parts</a></li>
                <li><a className="hover:text-white" href="/#">Mechanics</a></li>
                <li><a className="hover:text-white" href="/#">How it works</a></li>
                </ul>
            </div>

            {/* Help */}
            <div>
                <h4 className="text-white font-semibold">Help</h4>
                <ul className="mt-4 space-y-3 text-sm">
                <li><a className="hover:text-white" href="/#">Buyer safety tips</a></li>
                <li><a className="hover:text-white" href="/#">Seller guide</a></li>
                <li><a className="hover:text-white" href="/#">FAQs</a></li>
                <li><a className="hover:text-white" href="/#">Report listing</a></li>
                <li><a className="hover:text-white" href="/#">Contact support</a></li>
                </ul>
            </div>

            {/* Contact + Newsletter */}
            <div>
                <h4 className="text-white font-semibold">Contact</h4>
                <ul className="mt-4 space-y-2 text-sm">
                <li>📍 Accra, Ghana</li>
                <li>📞 +233 20 123 4567</li>
                <li>✉️ support@ghautox.com</li>
                <li className="text-gray-400">Mon–Sat: 9:00–18:00 GMT</li>
                </ul>

                <form
                className="mt-5 flex items-center gap-2"
                onSubmit={(e) => {
                    e.preventDefault();
                    alert("Subscribed!");
                }}
                >
                <input
                    type="email"
                    required
                    placeholder="Your email"
                    className="w-full rounded-lg bg-white/10 placeholder-gray-400 text-gray-100 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgba(0,144,135,.6)]"
                />
                <button
                    type="submit"
                    className="shrink-0 rounded-lg px-4 py-2 text-sm font-medium text-white"
                    style={{ backgroundColor: THEME }}
                >
                    Subscribe
                </button>
                </form>
                <p className="mt-2 text-xs text-gray-500">
                Get updates on new parts & deals.
                </p>
            </div>
            </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
            <div className="container mx-auto px-6 md:px-20 lg:px-32 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-400">
                © {new Date().getFullYear()} Ghautox. All rights reserved.
            </p>
            <ul className="flex items-center gap-4 text-xs text-gray-400">
                <li><a className="hover:text-white" href="/#">Terms</a></li>
                <li><a className="hover:text-white" href="/#">Privacy</a></li>
                <li><a className="hover:text-white" href="/#">Cookies</a></li>
            </ul>
            </div>
        </div>
        </footer>
    );
    }

    /* ---------- trust item ---------- */
    function TrustItem({ icon, title, desc }) {
    return (
        <div className="flex items-start gap-3">
        <div
            className="h-10 w-10 rounded-xl grid place-items-center text-white shrink-0"
            style={{ backgroundColor: THEME }}
            aria-hidden="true"
        >
            {icon}
        </div>
        <div>
            <div className="text-sm font-semibold text-white">{title}</div>
            <div className="text-xs text-gray-400">{desc}</div>
        </div>
        </div>
    );
    }

    /* ---------- simple icons (inline SVG) ---------- */
    function ShieldCheckIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
    }
    function BadgeCheckIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8.5 3.5l7 0 4 4 0 7-4 4-7 0-4-4 0-7 4-4z" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
    }
    function SparklesIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z" />
        <path d="M18 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
        </svg>
    );
    }
    function LockIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="10" width="16" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 018 0v3" />
        </svg>
    );
    }

    /* --- social pill --- */
    function Social({ icon, href = "#" }) {
    const base =
        "inline-grid place-items-center h-9 w-9 rounded-lg border border-white/10 hover:bg-white/10 transition";
    return (
        <a href={href} aria-label={icon} className={base}>
        {icon === "facebook" && <span>f</span>}
        {icon === "instagram" && <span>⌾</span>}
        {icon === "x" && <span>𝕏</span>}
        {icon === "whatsapp" && <span>🟢</span>}
        </a>
    );
    }

    /* --- app store (coming soon) --- */
    function StoreSoon({ platform = "Android" }) {
    return (
        <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
        {/* icons */}
        {platform === "Android" ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-white/90" fill="currentColor">
            <path d="M7 7h10v10H7z" opacity=".15" />
            <path d="M9 3l1.5 2M15 3L13.5 5M6 8h12v9a2 2 0 01-2 2H8a2 2 0 01-2-2V8z" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
        ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-white/90" fill="currentColor">
            <path d="M16.5 2.5c-1 .6-1.7 1.6-2 2.7-.3 1.2 0 2.5.8 3.5.9 1.1 2.2 1.8 3.6 1.8.2 0 .4 0 .6-.1-.1.3-.2.6-.4.9-.7 1.3-1.8 2.2-3.2 2.6-1.2.4-2.6.3-3.8-.3l-.3-.2c-1.3-.6-2.8-.6-4.1 0-1.6.7-3.5.5-5-.4 0 0 1.4 3.1 5.1 3.1 1 0 2-.2 2.9-.6.9-.4 1.8-.4 2.7 0 3.2 1.4 6.1.1 7.8-2.5 1.2-1.9 1.7-4.2 1.3-6.4-1.5.8-3.4.6-4.8-.7A4.8 4.8 0 0016.5 2.5z" />
            </svg>
        )}

        <div className="leading-tight">
            <div className="text-[10px] uppercase tracking-wider text-gray-400">
            {platform === "Android" ? "Google Play" : "App Store"}
            </div>
            <div className="text-sm text-white/90 font-semibold">Coming soon</div>
        </div>
        </div>
    );
    }
