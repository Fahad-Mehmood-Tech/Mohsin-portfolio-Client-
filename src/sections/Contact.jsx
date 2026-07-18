import { useState, useEffect } from 'react'
const contactMethods = [
    {
        id: 'whatsapp',
        label: 'WhatsApp',
        value: '+92 309 6157211',
        href: 'https://wa.me/923096157211',
        Icon: "fab fa-whatsapp text-xl",
    },
    {
        id: 'email',
        label: 'Email',
        value: 'immohsiny@gmail.com',
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=immohsiny@gmail.com",
        Icon: "fas fa-envelope text-xl",
    },
    {
        id: 'linkedin',
        label: 'LinkedIn',
        value: 'in/im-mohsin-y11',
        href: 'https://www.linkedin.com/in/im-mohsin-y11',
        Icon: "fab fa-linkedin text-xl object-contain",
    },
]

function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen flex items-center gradient-bg relative overflow-hidden py-20"
        >
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-40 h-40 border-8 border-white rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-60 h-60 border-8 border-white rounded-full"></div>
            </div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Let's Work Together</h2>
                <p className="text-white/90 mb-12 max-w-2xl mx-auto text-lg">
                    Have a project in mind or need help with video editing and AI-powered content? Reach out through any of the channels below.
                </p>

                <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    {contactMethods.map(({ id, label, value, href, Icon }) => (
                        <a
                            key={id}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 rounded-2xl p-8 transition transform hover:scale-105 shadow-xl"
                        >
                            <i className={Icon}> </i>
                            <p className="text-white font-semibold mb-1">{label}</p>
                            <p className="text-white/80 text-sm break-words">{value}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Contact