"use client"

import { trpc } from "@/trpc/client"

export default function PageClient() {
    const [data] = trpc.hello.useSuspenseQuery({
        text: "client"
    })
    
    return (
        <div>
            Client says: {data.greeting}
        </div>
    )
}