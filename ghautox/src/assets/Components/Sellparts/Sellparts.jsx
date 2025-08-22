    // SellCarPart.jsx
    import React from "react";

    const Sellparts = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-md p-4 flex items-center">
            <h1 className="text-2xl font-bold" style={{ color: "#009087" }}>
            AutoShopX
            </h1>
        </header>

        {/* Main Section */}
        <main className="flex flex-col lg:flex-row flex-1">
            {/* Form Section */}
            <section className="w-full lg:w-1/2 p-8 bg-white shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Sell Your Car Part
            </h2>
            <form className="space-y-6">
                {/* Car Brand */}
                <div>
                <label className="block text-sm font-medium text-gray-700">
                    Car Brand
                </label>
                <input
                    type="text"
                    placeholder="e.g. Toyota"
                    className="mt-1 block w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:ring-2"
                    style={{ focusRingColor: "#009087" }}
                />
                </div>

                {/* Model */}
                <div>
                <label className="block text-sm font-medium text-gray-700">
                    Car Model
                </label>
                <input
                    type="text"
                    placeholder="e.g. Corolla"
                    className="mt-1 block w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:ring-2"
                    style={{ focusRingColor: "#009087" }}
                />
                </div>

                {/* Year */}
                <div>
                <label className="block text-sm font-medium text-gray-700">
                    Year
                </label>
                <input
                    type="number"
                    placeholder="e.g. 2018"
                    className="mt-1 block w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:ring-2"
                    style={{ focusRingColor: "#009087" }}
                />
                </div>

                {/* Condition */}
                <div>
                <label className="block text-sm font-medium text-gray-700">
                    Condition
                </label>
                <select
                    className="mt-1 block w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:ring-2"
                    style={{ focusRingColor: "#009087" }}
                >
                    <option>New</option>
                    <option>Used</option>
                    <option>Refurbished</option>
                </select>
                </div>

                {/* Upload Image */}
                <div>
                <label className="block text-sm font-medium text-gray-700">
                    Upload Image
                </label>
                <input
                    type="file"
                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
                    file:rounded-lg file:border-0 file:text-sm file:font-semibold 
                    file:bg-[#0090871a] file:text-[#009087] hover:file:bg-[#00908733]"
                />
                </div>

                {/* Price */}
                <div>
                <label className="block text-sm font-medium text-gray-700">
                    Price (GHS)
                </label>
                <input
                    type="number"
                    placeholder="e.g. 1200"
                    className="mt-1 block w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:ring-2"
                    style={{ focusRingColor: "#009087" }}
                />
                </div>

                {/* Description */}
                <div>
                <label className="block text-sm font-medium text-gray-700">
                    Description
                </label>
                <textarea
                    rows="4"
                    placeholder="Brief details about the part..."
                    className="mt-1 block w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:ring-2"
                    style={{ focusRingColor: "#009087" }}
                ></textarea>
                </div>

                {/* Submit Button */}
                <button   className="
    px-12 py-5 text-[12px] uppercase tracking-[2.5px] font-medium 
    text-black bg-white rounded-[45px] shadow-[0px_8px_15px_rgba(0,0,0,0.1)] 
    transition-all duration-300 ease-in-out cursor-pointer outline-none
    hover:bg-[#009087] hover:text-white 
    hover:shadow-[0px_15px_20px_rgba(46,229,157,0.4)] hover:-translate-y-[7px] 
    active:-translate-y-[1px]
  "> List Part for Sale
</button>
            </form>
            </section>

            {/* Preview / Marketing Section */}
            <section
            className="w-full lg:w-1/2 p-8 flex flex-col justify-center text-white"
            style={{
                background: "linear-gradient(to right, #009087, #00766d)",
            }}
            >
            <h2 className="text-3xl font-bold mb-4">Reach Thousands of Buyers</h2>
            <p className="text-lg mb-6">
                Upload your car part and connect with mechanics, car enthusiasts, and buyers across Ghana.
                Our marketplace makes it easy to sell faster.
            </p>
            <img
                src="/car-parts.png"
                alt="Car parts marketplace"
                className="rounded-xl shadow-lg"
            />
            </section>
        </main>
        </div>
    );
    };

    export default Sellparts;
