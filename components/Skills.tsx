// components/Skills.tsx
import { Code2, Database, Layout, Smartphone } from 'lucide-react';

export default function Skills() {
  const skills = [
    { title: "Frontend", icon: <Layout className="w-5 h-5" />, items: ["React Native", "JavaScript", "HTML", "CSS"] },
    { title: "Backend", icon: <Database className="w-5 h-5" />, items: ["Supabase", "SQL"] },
  ];

  return (
    <section className="max-w-4xl mx-auto mb-20">
      <h2 className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-2">
        <Code2 className="text-pink-600" /> Mi Stack Tecnológico
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((group) => (
          <div key={group.title} className="group p-8 bg-white/40 backdrop-blur-md border border-white/50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6 text-pink-600">
              {group.icon}
              <h3 className="font-bold text-lg">{group.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {group.items.map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white border border-gray-100 text-gray-600 text-sm rounded-full shadow-sm hover:border-pink-200 hover:text-pink-600 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}