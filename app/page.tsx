"use client";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 p-6 md:p-20">
      {/* Fondo */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-pink-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-pulse"></div>
      </div>

      {/* Header */}
      <header className="max-w-4xl mx-auto mb-20 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-6xl font-black text-gray-900 mb-6 tracking-tight">
          Hola, soy <span className="text-pink-600">Yaiza</span>
        </motion.h1>
        <p className="text-2xl text-gray-600 max-w-2xl mx-auto mb-10">Técnico Superior en Desarrollo de Aplicaciones Multiplataforma</p>
        <div className="flex gap-4 justify-center">
          <a href="mailto:yluisgandara@gmail.com" className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-gray-800 transition">Contacto</a>
          <a href="/cv.pdf" className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">Descargar CV</a>
        </div>
      </header>

      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* SOBRE MÍ */}
        <SectionWrapper>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Sobre mí</h2>
          <p className="text-gray-700 leading-relaxed bg-white/50 p-8 rounded-2xl">
            Desarrolladora Fullstack apasionada por el desarrollo integral. Mi enfoque combina una base técnica versátil con una visión de producto orientada a resolver problemas reales, transformando ineficiencias operativas en soluciones tecnológicas funcionales.
          </p>
        </SectionWrapper>

        {/* TECNOLOGÍAS */}
        <SectionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Stack Tecnológico</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/50 p-6 rounded-2xl border border-white/50">
              <h3 className="font-bold text-pink-600 mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">{["React Native", "TypeScript", "JavaScript", "HTML", "CSS",].map(t => <span key={t} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{t}</span>)}</div>
            </div>
            <div className="bg-white/50 p-6 rounded-2xl border border-white/50">
              <h3 className="font-bold text-pink-600 mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">{["ASP.NET (C#)", "Python", "SQL", "Supabase", "Odoo","MongoDB"].map(t => <span key={t} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{t}</span>)}</div>
            </div>
            <div className="bg-white/50 p-6 rounded-2xl border border-white/50">
              <h3 className="font-bold text-pink-600 mb-4">Entornos</h3>
              <div className="flex flex-wrap gap-2">{["VS Code", "Visual Studio", "Android Studio", "GCP", "Git","Spring Boot","Docker"].map(t => <span key={t} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">{t}</span>)}</div>
            </div>
          </div>
        </SectionWrapper>

        {/* PROYECTOS GRID */}
        <SectionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard title="App React Native" description="Cuaderno de Campo adaptada a necesidades específicas." tags={["React Native", "Supabase","TypeSctipt","VS Code"]} link="https://github.com/YaizaLuisGandara/CuadernoDeCampo" />
            <ProjectCard title="Módulos ERP - Odoo" description="Desarrollo de módulos en Python para Odoo, desplegado en Google Cloud Platform." tags={["Python", "Odoo", "GCP","VS Code"]} link="https://github.com/YaizaLuisGandara/ModulosPersonalizadosOdoo" />
          </div>
        </SectionWrapper>

        {/* EXPERIENCIA */}
        <SectionWrapper>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Experiencia Profesional</h2>
          <div className="space-y-6">
            <div className="bg-white/50 p-6 rounded-xl border-l-4 border-pink-600">
              <h3 className="font-bold">Desarrollo de Aplicación de Gestión Agrícola (Proyecto Propio)</h3>
              <p className="text-sm text-pink-600 mb-2">Solución integral para explotación familiar</p>
              <p className="text-sm text-gray-600">Diseño y desarrollo de una app a medida para digitalizar el cuaderno de campo tradicional. Identificación de necesidades, modelado de datos y optimización de procesos de decisión basados en datos.</p>
            </div>
            <div className="bg-white/50 p-6 rounded-xl">
              <h3 className="font-bold">Desarrolladora Web en Prácticas | Konexus ERP (México)</h3>
              <p className="text-sm text-gray-600">Colaboración en ASP.NET (C#) y desarrollo de ERP propio de la empresa.</p>
            </div>
          </div>
        </SectionWrapper>

        {/* EDUCACIÓN */}
        <SectionWrapper>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Educación</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/50 p-4 rounded-xl text-sm font-bold">DAM - Desarrollo de Aplicaciones Multiplataforma</div>
            <div className="bg-white/50 p-4 rounded-xl text-sm font-bold">Bachillerato de Ciencias</div>
          </div>
        </SectionWrapper>

      </div>
    </main>
  );
}