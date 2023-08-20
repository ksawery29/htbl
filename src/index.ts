#! /usr/bin/env node

import { Parser } from "./parser";
import { Server } from "./server";

export async function init() {
    console.log("reading from file: " + process.argv[2]);

    // parse
    const parser = new Parser(process.argv[2]);
    const file = await parser.read();
    const data = await parser.parseHtml(file);

    // serve
    const server = new Server(data);
    server.serve();
}

init();
