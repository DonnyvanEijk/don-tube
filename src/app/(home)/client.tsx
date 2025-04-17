"use client"

import { trpc } from "@/trpc/client"

export default function PageClient() {
    const [data] = trpc.hello.useSuspenseQuery({
        text: "Sigma"
    })
    
    return (
        <div>
            Client says: {data.greeting}
        </div>
    )
}