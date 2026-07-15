// Skills & Education Section
const skills = [
    'AI Voice Synchronization',
    'Educational Video Editing',
    'YouTube Editing',
    'Udemy Course Production',
    'Screen Recording Editing',
    'Audio Cleanup',
    'AI-Assisted Workflows',
]

const software = [
    'Adobe Premiere Pro',
    'DaVinci Resolve',
    'CapCut',
    'Adobe Photoshop',
    'ChatGPT',
    'Gemini',
    'Google AI Studio',
]

function SkillsEducation() {
    return (
        <section
            id="skills-education"
            className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-900 py-20"
        >
            <div className="container mx-auto px-6">
                <div className="text-center mb-12" data-aos="fade-up">
                    <span className="text-ossph-blue dark:text-ossph-light font-semibold text-sm uppercase tracking-widest">
                        Expertise
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-2">
                        Skills & Education
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Skills */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-ossph-blue/10 p-8" data-aos="fade-up">
                        <h3 className="text-xl font-bold text-ossph-blue dark:text-ossph-light mb-5">Skills</h3>
                        <ul className="space-y-3">
                            {skills.map((skill) => (
                                <li key={skill} className="flex items-center text-gray-700 dark:text-gray-300">
                                    <i className="fas fa-check-circle text-ossph-blue dark:text-ossph-light mr-3"></i>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Software + Education stacked */}
                    <div className="space-y-8">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-ossph-blue/10 p-8" data-aos="fade-up">
                            <h3 className="text-xl font-bold text-ossph-blue dark:text-ossph-light mb-5">Software</h3>
                            <div className="flex flex-wrap gap-2">
                                {software.map((tool) => (
                                    <span
                                        key={tool}
                                        className="text-sm px-3 py-2 bg-ossph-pale dark:bg-gray-700 text-ossph-blue dark:text-ossph-light rounded-lg font-medium"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-ossph-blue/10 p-8" data-aos="fade-up">
                            <h3 className="text-xl font-bold text-ossph-blue dark:text-ossph-light mb-5">Education</h3>
                            <div>
                                <p className="font-semibold text-gray-900 dark:text-white">
                                    BS (Hons) Agriculture, Plant Pathology
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                                    University of Agriculture Faisalabad
                                </p>
                                <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">2021 – 2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillsEducation