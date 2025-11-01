
import React from 'react';
import { Creator, Project } from '../types';
import { MapPin } from 'lucide-react';
import ProjectGrid from './ProjectGrid';

interface CreatorProfileProps {
    creator: Creator;
    onClose: () => void;
    onProjectSelect: (project: Project) => void;
}

const CreatorProfile: React.FC<CreatorProfileProps> = ({ creator, onClose, onProjectSelect }) => (
  <div className="fixed inset-0 bg-black z-40 overflow-y-auto text-white">
    <div className="sticky top-0 bg-black/80 backdrop-blur-sm border-b border-gray-800 p-4 flex items-center gap-4 z-10">
      <button onClick={onClose} className="text-yellow-400 hover:text-yellow-300 font-bold text-lg">← Back</button>
      <h2 className="text-xl font-bold text-white truncate">{creator.name}</h2>
    </div>

    <div className="p-4 md:p-6 border-b border-gray-800">
      <div className="flex items-start gap-4 mb-4">
        <img src={creator.avatar} alt={creator.name} className="w-20 h-20 rounded-full border-2 border-yellow-500" />
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white">{creator.name}</h2>
          <p className="text-yellow-400 font-semibold">{creator.title}</p>
          <p className="text-gray-400 flex items-center gap-1 mt-1"><MapPin className="w-4 h-4" /> {creator.location}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-bold mb-2">Score: {creator.successScore}</div>
          <div className="text-gray-400 text-xs">{creator.rate}</div>
        </div>
      </div>

      <p className="text-gray-300 mb-4">{creator.bio}</p>

      <div className="grid grid-cols-3 gap-2 mb-4 text-center">
        <div className="bg-gray-900 rounded-lg p-3">
            <div className="text-yellow-400 font-bold">{creator.responseTime}</div>
            <div className="text-gray-400 text-xs">Response</div>
        </div>
        <div className="bg-gray-900 rounded-lg p-3">
            <div className="text-yellow-400 font-bold">{creator.completionRate}</div>
            <div className="text-gray-400 text-xs">Complete</div>
        </div>
        <div className="bg-gray-900 rounded-lg p-3">
            <div className="text-yellow-400 font-bold">{creator.repeatClients}</div>
            <div className="text-gray-400 text-xs">Repeat</div>
        </div>
      </div>

      <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg transition-colors">
        Request Collaboration
      </button>
    </div>

    <div className="p-4 md:p-6">
      <h3 className="text-white font-bold text-xl mb-4">Portfolio</h3>
      <ProjectGrid projects={creator.projects} onSelect={onProjectSelect} />
    </div>
  </div>
);

export default CreatorProfile;
