// src/pages/Contact.jsx
import React from "react";
import SendIcon from "@mui/icons-material/Send";

const Contact =()=> {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [visible, setVisible] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set("name", name);
        formData.set("email", email);
        formData.set("message", message);

        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            alert("Please enter a valid email address.");
            return;
        }
        console.log({ name, email, message });
        const response = await fetch("https://formspree.io/f/xldarylo", {
            method: "POST",
            body: formData,
            headers: { Accept: "application/json" },
        });

        if (response.ok) {
            setVisible(true);
            setName("");
            setEmail("");
            setMessage("");
        } else {
            const data = await response.json();
            console.error(data);
            alert("Failed to send message. Please try again.");
        }
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

                <form onSubmit={(e)=>handleSubmit(e)} className="space-y-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        required
                        className="w-full p-3 rounded-lg bg-gray-800/60 text-white border border-gray-700 focus:ring-2 focus:ring-[var(--color-accent)] outline-none transition-all duration-300"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                        className="w-full p-3 rounded-lg bg-gray-800/60 text-white border border-gray-700 focus:ring-2 focus:ring-[var(--color-accent)] outline-none transition-all duration-300"
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
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
                <div className={`${visible? 'absolute' : "hidden"} flex items-center justify-center top-[5%] left-[5%] bg-[var(--color-bg)]/99 h-[90%] w-[90%] backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20 transform scale-105 transition-all duration-300`}>
                    <div className="text-center space-y-6">
                        <h2 className="text-4xl font-bold mb-2 text-[var(--color-accent)] uppercase tracking-widest">Success</h2>
                        <p className="text-[var(--color-accent)]">Your message has been sent !</p>
                        <button
                            className="w-full bg-[var(--color-accent)]/90 backdrop-blur text-black cursor-pointer py-4 px-6 rounded-xl transition-colors duration-300 font-semibold shadow-lg"
                            onClick={() => setVisible(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
