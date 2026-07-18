import metabrains from '../assets/Meta Brains Image.png'
import genaiskool from '../assets/gen Ai Skool.png'
import narrativeorbit from '../assets/Narrative Orbit.png'
// import genaiskool from '../assets/gen Ai Skool.png'
const projects = [
    {
        id: 'metabrains',
        name: 'MetaBrains',
        role: 'Lead Video Editor',
        description:
            'Lead Video Editor at MetaBrains, responsible for editing professional educational courses for global learners. I manage the complete post-production workflow, including video editing, AI voice integration, screen recording synchronization, and final content optimization.',
        tools: ['CapCut', 'Adobe Premiere Pro', 'DaVinci Resolve', 'ElevenLabs'],
        image: metabrains,
        site: 'https://www.metabrains.org/',
    },
    {
        id: 'narrative-orbit',
        name: 'Narrative Orbit',
        role: 'Co-Founder & Head of Post-Production',
        description:
            'Co-Founder and Head of Post-Production at Narrative Orbit, leading video editing, post-production workflows, and creative execution. I ensure high-quality visual content while maintaining consistent branding across digital media projects.',
        tools: ['Adobe Premiere Pro', 'CapCut', 'DaVinci Resolve', 'Photoshop', 'Canva'],
        image: narrativeorbit,
        site: 'https://narrativeorbit.dpdns.org/#',
    },
    {
        id: 'gen-ai-skool',
        name: 'Gen AI Skool',
        role: 'Content Creator & Video Editor',
        description:
            'Create educational content focused on Artificial Intelligence and emerging technologies. Responsible for video editing, thumbnail design, branding, and producing engaging content for the YouTube channel.',
        tools: ['CapCut', 'Adobe Premiere Pro', 'Adobe Photoshop', 'Canva'],
        image: genaiskool,
        site: 'https://youtube.com/@genaiskool?si=dCmFU0-l-j49M846',
    },
    {
        id: 'graphic-design',
        name: 'Graphic Design',
        role: 'Graphic Designer',
        description:
            'Design creative visual content for businesses and digital platforms, including social media posts, branding materials, advertisements, YouTube thumbnails, posters, logos, and other marketing assets.',
        tools: ['Adobe Photoshop', 'Canva'],
    },
]

function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center bg-white dark:bg-gray-800 py-20"
        >
            <div className="container mx-auto px-6 w-full">
                <div className="text-center mb-10" data-aos="fade-up">
                    <span className="text-ossph-blue dark:text-ossph-light font-semibold text-sm uppercase tracking-widest">
                        Portfolio
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-2">
                        Featured Projects
                    </h2>
                </div>

                <div
                    className="max-w-6.5xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-14 items-center"
                >
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-ossph-blue/10 overflow-hidden"
                        >

                            <div className="w-1x1 aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                {project.image ? (
                                    <img src={project.image} alt={project.name} className="w-1x1 h-1x1 object-cover" />
                                ) : (
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        Image coming soon — {project.name}
                                    </span>
                                )}
                            </div>

                            <div className="p-6">
                                <div className="flex items-center flex-wrap gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.name}</h3>
                                    <span className="text-xs font-semibold px-3 py-1 bg-ossph-blue/10 dark:bg-ossph-light/20 text-ossph-blue dark:text-ossph-light rounded-full">
                                        {project.role}
                                    </span>
                                    <div className="ml-auto">
                                        {project.site && (
                                            <a
                                                href={project.site}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs px-6 py-2 bg-ossph-blue/10 border-ossph-blue text-ossph-blue dark:border-ossph-light dark:text-ossph-light rounded-full hover:bg-ossph-blue/20 dark:hover:bg-ossph-light/20 transition flex items-center gap-1"
                                            >
                                                <i className="fas fa-external-link-alt mr-2"></i>
                                                Visit Site
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tools.map((tool) => (
                                        <span
                                            key={tool}
                                            className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-gray-700 dark:text-gray-300"
                                        >
                                            {tool}
                                        </span>
                                    ))}

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects