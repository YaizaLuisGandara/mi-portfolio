"use client";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import Skills from "../components/Skills";
import Tools from "../components/Tools";
import SectionWrapper from "../components/SectionWrapper";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 p-6 md:p-20">
      {/* Fondo decorativo */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-pink-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-pulse"></div>
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-rose-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-30"></div>
      </div>

      <header className="max-w-4xl mx-auto mb-20 text-center">
        {/* Aquí aplicamos la animación */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl font-black text-gray-900 mb-6 tracking-tight"
        >
          Hola, soy <span className="text-pink-600">Yaiza</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-2xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Técnico Supeior en Desarrollo de Aplicaciones Multiplataforma
        </motion.p>

        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="..."
        >
          <div className="flex gap-4 justify-center md:justify-start">
          <a href="mailto:yluisgandara@gmail.com" className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-gray-800 transition">
            Contacto
          </a>
          <a href="/cv.pdf" className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
            Descargar CV
          </a>
        </div>
        </motion.a>
      </header>
      {/* Sección Skills */}
      <SectionWrapper>
        <motion.div 
          whileHover={{ scale: 1.03 }} // ¡Se agrandará ligeramente al pasar el ratón!
        >
          <Skills />
        </motion.div>
      </SectionWrapper>
      {/* Sección Herramientas */}
      <SectionWrapper>
        <motion.div 
          whileHover={{ scale: 1.03 }} // ¡Se agrandará ligeramente al pasar el ratón!
        >
          <Tools />
        </motion.div>
      </SectionWrapper>

      {/* Sección Proyectos en formato Grid */}
      <SectionWrapper>
        <section className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">
            Mis Proyectos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="App React Native con backend en Supabase"
              description="Aplicación movil de un Cuaderno de Campo adaptada a necesidades especificas familiares"
              tags={["React Native", "Supabase","TypeScript","VSCode"]}
              link="https://github.com/YaizaLuisGandara/CuadernoDeCampo"
            />
            <ProjectCard
              title="Módulos ERP - Odoo"
              description="Desarrollo de módulos en Python para Odoo, desplegado en Google Cloud."
              tags={["Python", "Odoo", "GCP","VSCode"]}
              link="https://github.com/YaizaLuisGandara/ModulosPersonalizadosOdoo"
            />
          </div>
        </section>
      </SectionWrapper>
    </main>
  );
}
