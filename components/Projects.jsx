'use client';
import React, { useState } from 'react';
import { collegeProjects, professionalProjects } from '../data/projects';

// Project Card Component
function ProjectCard({ project, type }) {
  return (
    <div
      className="relative group glass rounded-2xl p-6 border border-divider transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon & Title */}
        <div className="flex items-start gap-3 mb-3">
          <div className="text-4xl">{project.icon}</div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-primary mb-1 leading-tight">
              {project.title}
            </h3>
            <p className="text-xs text-secondary opacity-75">{project.period}</p>
          </div>
        </div>

        {/* Category Badge */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
            {project.category}
          </span>
          {type === 'college' && (
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-button-bg text-primary">
              {project.type}
            </span>
          )}
        </div>

        {/* Institution/Company */}
        <p className="text-sm text-secondary font-medium mb-3">
          {project.institution || project.company}
        </p>

        {/* Description */}
        <p className="text-secondary text-sm leading-relaxed mb-4">
          {project.description}
        </p>



        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 rounded-lg bg-button-bg text-xs text-primary border border-divider"
            >
              {tech}
            </span>
          ))}
        </div>


      </div>
    </div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState('professional');

  return (
    <section id="projects" className="section-pad">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Projects & Case Studies
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            A showcase of professional work and academic innovations across AI, web development, and emerging technologies
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex glass rounded-full p-1 border border-divider">
            <button
              onClick={() => setActiveTab('professional')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'professional'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                : 'text-secondary hover:text-primary'
                }`}
            >
              Professional Work
            </button>
            <button
              onClick={() => setActiveTab('college')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'college'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'text-secondary hover:text-primary'
                }`}
            >
              Academic Projects
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activeTab === 'professional'
            ? professionalProjects.map(project => (
              <ProjectCard key={project.id} project={project} type="professional" />
            ))
            : collegeProjects.map(project => (
              <ProjectCard key={project.id} project={project} type="college" />
            ))
          }
        </div>

      </div>
    </section>
  );
}
