interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export default function ProjectCard({ title, description, tags, link }: ProjectProps) {
  return (
    <div className="group p-6 bg-white/50 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-pink-500/10 text-pink-700 text-xs font-semibold rounded-full border border-pink-500/20">
            {tag}
          </span>
        ))}
      </div>
      <a href={link} className="inline-flex items-center text-pink-600 font-semibold hover:gap-2 transition-all">
        Ver código <span>→</span>
      </a>
    </div>
  );
}