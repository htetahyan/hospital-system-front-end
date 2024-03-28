import {NextRequest, NextResponse} from 'next/server';
import {revalidateTag} from "next/cache";

export const POST = async (req:NextRequest) => {
    try {
        const { body, path, tag } = await req.json();
        // Assuming revalidateTag is a function you've defined elsewhere
        revalidateTag(tag);
        const bodyString = JSON.stringify(body);
        console.log(`Body length: ${bodyString.length}`);
        const url=`${process.env.NEXT_PUBLIC_API_URL}${path}`

        const res = await fetch(url, {
            method: 'POST',
            body: bodyString, // Ensure body is stringified
            headers: {
                'Content-Type': 'application/json'

            }
        });
                const data = await res.json(); // Await the response body

        return NextResponse.json({
            message: data, // Assuming you want to return the data directly
            status: 200
        });
    } catch (error:unknown) {

        return NextResponse.error(); // Return a 500 error with the error message
    }
};
