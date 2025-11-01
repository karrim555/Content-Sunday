import React from 'react';
import { Project } from '../types';
import { getMediaIcon } from './IconMapping';

interface ProjectGridProps {
  projects: Project[];
  onSelect: (project: Project) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onSelect }) => (
  <div className="grid grid-cols-3 gap-2">
    {projects.map(p => {
      const MediaIcon = getMediaIcon(p.type);
      return (
        <div
          key={p.id}
          className="aspect-square rounded relative cursor-pointer group overflow-hidden"
          onClick={() => onSelect(p)}
        >
          <img src={p.imageUrl} alt={p.goal} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <MediaIcon className="w-8 h-8 md:w-12 md:h-12 text-white opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      );
    })}
  </div>
);

export default ProjectGrid;
