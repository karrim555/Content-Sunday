import React from 'react';
import { Project, Creator } from '../types';
import { getMediaIcon } from './IconMapping';

interface ProjectPopupProps {
  project: Project;
  creator: Creator;
  onClose: () => void;
}

const ProjectPopup: React.FC<ProjectPopupProps> = ({ project, creator, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-yellow-500/10" onClick={e => e.stopPropagation()}>
        <div 
            className="relative h-64 md:h-80 flex items-center justify-center bg-cover bg-center" 
            style={{ backgroundImage: `url(${project.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">My Role: {project.role}</h3>
            <p className="text-gray-300 text-lg">{project.goal}</p>
          </div>

          <div className="border-t border-gray-700 pt-4">
            <h4 className="text-sm font-semibold text-yellow-400 mb-2 tracking-wider">PROJECT IMPACT</h4>
            <p className="text-white text-lg">{project.metrics}</p>
          </div>

          <div className="border-t border-gray-700 pt-4">
            <h4 className="text-sm font-semibold text-yellow-400 mb-2 tracking-wider">NICHE & TAGS</h4>
            <div className="flex flex-wrap gap-2">
              {creator.tags.map(tag => (
                <span key={tag} className="bg-gray-800 text-yellow-300 px-3 py-1 rounded-full text-sm">#{tag}</span>
              ))}
            </div>
          </div>

          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg transition-colors mt-6">
            Request Collaboration
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;
