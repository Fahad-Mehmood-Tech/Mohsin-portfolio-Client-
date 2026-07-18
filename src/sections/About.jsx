import mohsinPhoto from '../assets/DP 1.png'

function About() {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-900 py-20 overflow-hidden"
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

                <div className="max-w-7x1 mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left: Photo */}
                    <div className="flex justify-center lg:justify-end" data-aos="fade-right">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-ossph-blue to-ossph-light rounded-2xl rotate-3 opacity-20"></div>
                            <img
                                src={mohsinPhoto}
                                alt="Muhammad Mohsin Yaqoob"
                                className="relative w-72 h-75 sm:w-80 sm:h-90 lg:w-96 lg:h-100 object-cover rounded-2xl shadow-xl border-4 border-white dark:border-gray-800"
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-ossph-blue/10 p-8 lg:p-10"
                        data-aos="fade-left"
                    >
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            I'm <span className="font-semibold text-ossph-blue dark:text-ossph-light">Muhammad Mohsin Yaqoob</span>, a Video Editor, Graphic Designer, and AI Content Creator with over 3 years of experience crafting engaging digital content. I specialize in AI-powered video production, motion graphics, and eLearning course development, helping transform complex ideas into visually compelling learning experiences.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            Alongside my professional work, I'm the <span className="font-semibold text-ossph-blue dark:text-ossph-light">Co-Founder & Head of Post-Production at Narrative Orbit</span>, where I oversee video production, creative direction, and multimedia content. I'm also the creator of <span className="font-semibold text-ossph-blue dark:text-ossph-light">Gen AI Skool</span>, a platform dedicated to sharing practical knowledge about artificial intelligence, productivity, and emerging technologies.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            My passion is combining creativity with technology to build content that educates, inspires, and creates real impact.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About