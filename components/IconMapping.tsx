// FIX: Add missing React import to resolve "Cannot find namespace 'React'" error.
import React from 'react';
import { Camera, Video, Mic, FileText, LucideProps } from 'lucide-react';
import { ProjectType } from '../types';

export const getMediaIcon = (type: ProjectType): React.FC<LucideProps> => {
  switch(type) {
    case 'image': return Camera;
    case 'video': return Video;
    case 'audio': return Mic;
    case 'text': return FileText;
    default: return Camera;
  }
};
