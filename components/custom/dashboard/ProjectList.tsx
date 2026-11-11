"use client";
import { Button } from '@/components/ui/button';
import { Folder } from 'lucide-react';
import React, { useState } from 'react'

function ProjectList() {
    const [projectList, setProjectList] = useState<any[]>([]);
  return (
    <div>
      {projectList.length === 0 ? (
        // Empty State
        <div className="flex flex-col items-center p-10 border rounded-xl mt-10">
          <Folder hanging={42} width={42} />
          <h2 className='text-lg font-semibold'>No Projects Found</h2>
          <Button className='mt-5'>+ Create New Project</Button>
        </div>
        
      ) : (
        // Project List
        <div className="p-10">
          
        </div>
      )}
    </div>
  )
}

export default ProjectList
