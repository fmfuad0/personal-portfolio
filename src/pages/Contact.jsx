// src/pages/Contact.jsx
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section className=" flex items-center justify-center text-white px-6">
            <div className="max-w-2xl w-full backdrop-blur-xs p-8 rounded-3xl">
                <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[var(--color-accent)] mb-6">
                    Contact Me
                </h1>
                <p className="text-center text-gray-300 mb-10">
                    Have a project in mind or just want to say hi? Let’s connect!
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-lg bg-gray-800/60 text-white border border-gray-700 focus:ring-2 focus:ring-[var(--color-accent)] outline-none transition-all duration-300"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                            value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-lg bg-gray-800/60 text-white border border-gray-700 focus:ring-2 focus:ring-[var(--color-accent)] outline-none transition-all duration-300"
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-lg bg-gray-800/60 text-white border border-gray-700 focus:ring-2 focus:ring-[var(--color-accent)] outline-none transition-all duration-300 resize-none"
                    />

                    <button
                        type="submit"
                        className="w-full py-3 bg-[var(--color-accent)] text-black font-semibold rounded-lg hover:text-[var(--color-accent)] hover:bg-transparent transition-all duration-300 shadow-[0_0_15px_var(--color-accent)]] hover:shadow-[0_0_10px_var(--color-accent)] flex items-center justify-center gap-2 cursor-pointer"
                    >
                        <SendIcon fontSize="small" />
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
