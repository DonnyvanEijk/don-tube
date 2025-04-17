import { db } from "@/db";
import { categories } from "@/db/schema";
import { desc } from "drizzle-orm";

const categoryNames = [
    "Cards and vehicles",
    "Comedy",
    "Education",
    "Gaming",
    "Entertainment",
    "Film and animation",
    "How-to and style",
    "Music",
    "News and politics",
    "People and blogs",
    "Pets and animals",
    "Science and technology",
    "Sports",
    "Travel and events",
]

async function main() {
    console.log("Seeding categories...");

    try {
        const values = categoryNames.map((name) => ({
            name,
            description: `Videos relates to ${name.toLowerCase()}`,
        }))

        await db.insert(categories).values(values).onConflictDoNothing();
        console.log("Seeded categories successfully!");
    } catch (error) {
        console.error("A error has occured: " + error)
        process.exit(1)
    }
}

main();