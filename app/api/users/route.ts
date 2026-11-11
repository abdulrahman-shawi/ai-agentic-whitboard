import { db, users } from "@/db";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";   

export async function POST(req:NextRequest){
    const user = await currentUser();

    if(user){
       const userdata = await db.select().from(users)
    //@ts-ignore
       .where(eq(user.primaryEmailAddress?.emailAddress , users.email )).execute();
    
        if(userdata.length > 0){
            return NextResponse.json({message:"User already exists", user:userdata[0]});
        }else{
            const result = await db.insert(users).values({
                name:user.firstName,
                email:user.primaryEmailAddress?.emailAddress || "",
                credits:3
            }).returning();
            return NextResponse.json({message:"User created successfully", user:result[0]   
            })
        }
    }
    
}