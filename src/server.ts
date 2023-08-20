#! /usr/bin/env node

import http from "http";
import { ParserOutput } from "../types/parser";

export class Server {
    data: ParserOutput[];

    constructor(data: ParserOutput[]) {
        this.data = data;
    }

    public serve() {
        http.createServer((req, res) => {
            for (const d of this.data) {
                if (req.url == d.path) {
                    res.setHeader("Content-type", "text/html");
                    res.write(d.returnContent);
                    res.end();
                }
            }
        }).listen(3215);

        console.log("server is running");
    }
}
