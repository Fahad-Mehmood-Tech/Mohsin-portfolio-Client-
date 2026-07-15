
function Home() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center bg-gradient-to-br from-ossph-pale via-white to-blue-50 dark:from-gray-800 dark:to-gray-900 py-20 relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-96 h-96 bg-ossph-blue/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-ossph-light/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                    Muhammad Mohsin Yaqoob
                    <span className="block text-3xl lg:text-5xl mt-2 bg-gradient-to-r from-ossph-blue to-ossph-light bg-clip-text text-transparent">
                        Video Editor & AI Course Production Specialist
                    </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                    I create high-quality educational content by combining professional video editing, AI-powered workflows, motion graphics, and visual storytelling. I specialize in transforming raw recordings into engaging online courses that deliver an exceptional learning experience.
                </p>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    <div className="bg-white dark:bg-gray-800 px-5 py-3 rounded-full shadow-lg flex items-center space-x-2 border border-ossph-blue/20">
                        <span className="font-medium">🎬 Professional Video Editing</span>
                    </div>
                    <div className="bg-white dark:bg-gray-800 px-5 py-3 rounded-full shadow-lg flex items-center space-x-2 border border-ossph-blue/20">
                        <span className="font-medium">🤖 AI Workflow Integration</span>
                    </div>
                    <div className="bg-white dark:bg-gray-800 px-5 py-3 rounded-full shadow-lg flex items-center space-x-2 border border-ossph-blue/20">
                        <span className="font-medium">📚 eLearning Course Production</span>
                    </div>
                    <div className="bg-white dark:bg-gray-800 px-5 py-3 rounded-full shadow-lg flex items-center space-x-2 border border-ossph-blue/20">
                        <span className="font-medium">⚡ Fast & Detail-Oriented Delivery</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-ossph-blue/10 hover:border-ossph-blue/30 transition group">
                        <div className="text-4xl font-bold text-ossph-blue group-hover:scale-110 transition-transform">3+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Years of Editing Experience</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-ossph-blue/10 hover:border-ossph-blue/30 transition group">
                        <div className="text-4xl font-bold text-ossph-blue group-hover:scale-110 transition-transform">50+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Educational Videos Produced</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-ossph-blue/10 hover:border-ossph-blue/30 transition group">
                        <div className="text-4xl font-bold text-ossph-blue group-hover:scale-110 transition-transform">40+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">AI & eLearning Courses</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-ossph-blue/10 hover:border-ossph-blue/30 transition group">
                        <div className="text-4xl font-bold text-ossph-blue group-hover:scale-110 transition-transform">100%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Commitment to Quality</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home