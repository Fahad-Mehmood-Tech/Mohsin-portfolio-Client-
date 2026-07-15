// About Section - client ka bio, Narrative Orbit aur Gen AI Skool ka context
function About() {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-900 py-20"
        >
            <div className="container mx-auto px-6">
                <div className="text-center mb-12" data-aos="fade-up">
                    <span className="text-ossph-blue dark:text-ossph-light font-semibold text-sm uppercase tracking-widest">
                        About Me
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-2">
                        Who I Am
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-ossph-blue/10 p-8 lg:p-12" data-aos="fade-up">
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        I'm <span className="font-semibold text-ossph-blue dark:text-ossph-light">Muhammad Mohsin Yaqoob</span>, a Lead Video Editor, Graphic Designer, and AI Content Creator with over 3 years of experience crafting engaging digital content. I specialize in AI-powered video production, motion graphics, and eLearning course development, helping transform complex ideas into visually compelling learning experiences.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        Alongside my professional work, I'm the <span className="font-semibold text-ossph-blue dark:text-ossph-light">Co-Founder & Head of Post-Production at Narrative Orbit</span>, where I oversee video production, creative direction, and multimedia content. I'm also the creator of <span className="font-semibold text-ossph-blue dark:text-ossph-light">Gen AI Skool</span>, a platform dedicated to sharing practical knowledge about artificial intelligence, productivity, and emerging technologies.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        My passion is combining creativity with technology to build content that educates, inspires, and creates real impact.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About