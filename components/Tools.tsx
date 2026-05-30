// components/Tools.tsx
import { Terminal, Database, Laptop, Wrench } from 'lucide-react';

export default function Tools() {
  const tools = [
    { title: "Desarrollo", icon: <Terminal className="w-5 h-5" />, items: ["VS Code", "Visual Studio", "NetBeans", "Eclipse", "Android Studio"] },
    { title: "Bases de Datos", icon: <Database className="w-5 h-5" />, items: ["Supabase", "SQL", "MongoDB"] },
    { title: "Lenguajes / Otros", icon: <Wrench className="w-5 h-5" />, items: ["TypeScript", "C#", "Python (Odoo)", "Kotlin"] },
  ];

  return (
    <section className="max-w-4xl mx-auto mb-20">
      <h2 className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-2">
        <Wrench className="text-pink-600" /> Herramientas y Entornos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tools.map((group) => (
          <div key={group.title} className="p-5 bg-white/50 border border-white/50 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-2 text-pink-600 mb-3">
              {group.icon}
              <h3 className="font-bold text-sm">{group.title}</h3>
            </div>
            <ul className="space-y-1">
              {group.items.map((item) => (
                <li key={item} className="text-xs text-gray-600 font-medium">• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}