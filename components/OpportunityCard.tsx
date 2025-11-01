import React from 'react';
import { Opportunity } from '../types';
import { getMediaIcon } from './IconMapping';
import { DollarSign } from 'lucide-react';

interface OpportunityCardProps {
    opportunity: Opportunity;
}

const OpportunityCard: React.FC<OpportunityCardProps> = ({ opportunity }) => {
    const ProjectIcon = getMediaIcon(opportunity.projectType);

    return (
        <div className="bg-gray-900 rounded-xl p-4 flex flex-col gap-4 hover:ring-2 hover:ring-yellow-500 transition-all cursor-pointer">
            <div className="flex items-start gap-4">
                <img src={opportunity.companyLogo} alt={opportunity.companyName} className="w-14 h-14 rounded-lg object-cover" />
                <div className="flex-1">
                    <p className="text-gray-400 text-sm">{opportunity.companyName}</p>
                    <h3 className="text-white font-bold text-lg">{opportunity.jobTitle}</h3>
                </div>
                <div className="bg-yellow-500/10 text-yellow-400 p-2 rounded-lg">
                    <ProjectIcon className="w-6 h-6" />
                </div>
            </div>

            <p className="text-gray-300 text-sm">{opportunity.description}</p>
            
            <div>
                <h4 className="text-xs font-semibold text-gray-500 mb-2 tracking-wider">REQUIRED SKILLS</h4>
                <div className="flex flex-wrap gap-2">
                    {opportunity.requiredSkills.map(skill => (
                        <span key={skill} className="bg-gray-800 text-yellow-300 px-3 py-1 rounded-full text-xs">#{skill}</span>
                    ))}
                </div>
            </div>

            <div className="border-t border-gray-800 pt-3 flex justify-between items-center">
                <div className="flex items-center gap-2 text-green-400">
                    <DollarSign className="w-5 h-5" />
                    <span className="font-bold text-md">{opportunity.budget}</span>
                </div>
                <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors text-sm">
                    View & Apply
                </button>
            </div>
        </div>
    );
};

export default OpportunityCard;
