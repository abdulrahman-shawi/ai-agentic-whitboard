import { db, projects } from "@/db";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const {projectId , projectName} =await request.json();
    if(!projectId || !projectName){
        return NextResponse.json({message:'Project Id and Name are required'}, {status:400})
    }
    const user = await currentUser();
    const resault = await db.insert(projects).values({
        projectId: projectId,
        projectName: projectName??'',
        userEmail:user?.primaryEmailAddress?.emailAddress??''
    }).returning()

    return NextResponse.json({message:'Project created successfully',data:resault[0]})
}