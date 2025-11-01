import React, { useState } from 'react';
import { Camera, Briefcase, MessageCircle, BarChart3, Bell, Settings, Users } from 'lucide-react';
import { CREATORS, OPPORTUNITIES } from '../constants';
import { Creator, Project, Opportunity } from '../types';
import AppLogo from './AppLogo';
import CreatorProfile from './CreatorProfile';
import ProjectPopup from './ProjectPopup';
import ProjectGrid from './ProjectGrid';
import OpportunityCard from './OpportunityCard';

const ContentSundayApp: React.FC = () => {
    const [userType, setUserType] = useState< 'creator' | 'business' | null >(() => (localStorage.getItem('userType') as 'creator' | 'business' | null));
    const [activeTab, setActiveTab] = useState('discover');
    const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleUserType = (type: 'creator' | 'business') => {
        setUserType(type);
        localStorage.setItem('userType', type);
    };

    if (!userType) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center p-4">
                <div className="max-w-md w-full text-center space-y-8">
                    <div className="flex justify-center">
                        <AppLogo size={80} />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Welcome! Let's get started</h2>
                    <p className="text-gray-400">Choose how you'd like to use Content Sunday</p>

                    <div className="space-y-4">
                        <button
                            onClick={() => handleUserType('creator')}
                            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-6 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-between"
                        >
                            <div className="text-left">
                                <div className="text-xl font-bold mb-1">I'm a Creator</div>
                                <div className="text-sm opacity-90">Find opportunities & grow your business</div>
                            </div>
                            <Camera className="w-8 h-8" />
                        </button>

                        <button
                            onClick={() => handleUserType('business')}
                            className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-6 px-6 rounded-xl transition-all transform hover:scale-105 border-2 border-yellow-500 flex items-center justify-between"
                        >
                            <div className="text-left">
                                <div className="text-xl font-bold mb-1">I'm a Business</div>
                                <div className="text-sm text-gray-400">Discover talent & build your brand</div>
                            </div>
                            <Briefcase className="w-8 h-8 text-yellow-500" />
                        </button>
                    </div>

                    <p className="text-gray-500 text-sm">You can switch between modes anytime</p>
                </div>
            </div>
        );
    }

    const handleCreatorSelect = (creator: Creator) => {
        setSelectedCreator(creator);
        setSelectedProject(null); // Clear project selection when opening a new profile
    };

    return (
        <div className="min-h-screen bg-black">
            <header className="sticky top-0 bg-black/80 backdrop-blur-lg border-b border-gray-800 z-30">
                <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <AppLogo size={30} />
                        <div>
                            <div className="text-yellow-400 font-bold text-sm">{userType === 'creator' ? 'Creator Mode' : 'Business Mode'}</div>
                            <button onClick={() => {
                                localStorage.removeItem('userType');
                                setUserType(null);
                            }} className="text-gray-500 text-xs hover:text-gray-400">Switch Mode</button>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Bell className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                        <Settings className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                    </div>
                </div>
            </header>

            <main className="pb-20 p-4">
                {activeTab === 'discover' && (
                    <>
                        {userType === 'business' && (
                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {CREATORS.map(creator => (
                                    <div key={creator.id} onClick={() => handleCreatorSelect(creator)} className="bg-gray-900 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-yellow-500 transition-all">
                                        <div className="p-4 border-b border-gray-800">
                                            <div className="flex items-center gap-3 mb-3">
                                                <img src={creator.avatar} alt={creator.name} className="w-12 h-12 rounded-full border-2 border-yellow-500" />
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-white font-bold truncate">{creator.name}</h3>
                                                    <p className="text-yellow-400 text-sm truncate">{creator.title}</p>
                                                </div>
                                                <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-bold">{creator.successScore}</div>
                                            </div>
                                            <div className="flex gap-2 text-xs text-gray-400">⚡ {creator.responseTime} ✓ {creator.completionRate} ♻️ {creator.repeatClients}</div>
                                        </div>
                                        
                                        <ProjectGrid projects={creator.projects.slice(0, 6)} onSelect={(project) => {
                                            setSelectedCreator(creator);
                                            setSelectedProject(project);
                                        }} />
                                        
                                        <div className="p-4 flex items-center justify-between bg-gray-900/50">
                                            <span className="text-gray-400 text-sm">{creator.rate}</span>
                                            <button className="text-yellow-400 hover:text-yellow-300 font-semibold text-sm">View Profile →</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {userType === 'creator' && (
                            <div className="max-w-3xl mx-auto space-y-4">
                                <h2 className="text-2xl font-bold text-white">New Opportunities For You</h2>
                                {OPPORTUNITIES.map(opportunity => (
                                    <OpportunityCard key={opportunity.id} opportunity={opportunity} />
                                ))}
                            </div>
                        )}
                    </>
                )}
                 {activeTab !== 'discover' && (
                    <div className="flex items-center justify-center h-[50vh] text-gray-500">
                        <p>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} page coming soon.</p>
                    </div>
                )}
            </main>

            {selectedCreator && !selectedProject && (
                <CreatorProfile 
                    creator={selectedCreator} 
                    onClose={() => setSelectedCreator(null)}
                    onProjectSelect={(project) => setSelectedProject(project)}
                />
            )}

            {selectedProject && selectedCreator && (
                <ProjectPopup 
                    project={selectedProject} 
                    creator={selectedCreator} 
                    onClose={() => setSelectedProject(null)}
                />
            )}

            <nav className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-gray-800 z-30">
                <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
                    {(['discover', 'projects', 'messages', 'analytics'] as const).map(tab => {
                        const icons = { discover: Users, projects: Briefcase, messages: MessageCircle, analytics: BarChart3 };
                        const label = { discover: 'Discover', projects: 'Projects', messages: 'Messages', analytics: 'Analytics' };
                        const Icon = icons[tab];
                        return (
                            <button key={tab} onClick={() => setActiveTab(tab)} className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${activeTab === tab ? 'text-yellow-400' : 'text-gray-400 hover:text-yellow-300'}`}>
                                <Icon className="w-6 h-6" />
                                <span className="text-xs font-semibold">{label[tab]}</span>
                            </button>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
};

export default ContentSundayApp;
