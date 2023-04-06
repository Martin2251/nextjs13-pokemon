import { NextResponse } from "next/server";

import pokemon from "@/pokemon.json"

export async function GET(req:Request) {
    const {searchParams} =  new URL(req.url);

    // search all pokemon and filter by name
    const name = searchParams.get("name");
    const pokemonData = pokemon.filter ((p) =>
    p.name.toLowerCase().includes(name?.toLowerCase() ?? "")
    );

    // dont want to overwhelm the client so use the top 10

    return NextResponse.json(pokemon.slice(0,10));
    
}