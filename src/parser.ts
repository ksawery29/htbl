#! /usr/bin/env node

import { parse } from "node-html-parser";
import { ParserOutput } from "../types/parser";
import fs from "fs/promises";

export class Parser {
    filePath: string;

    public async read(): Promise<string> {
        const content = await fs.readFile(this.filePath, "utf8");
        return content;
    }

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    public async parseHtml(fileContent: string): Promise<ParserOutput[]> {
        const output: ParserOutput[] = [];

        const root = parse(fileContent);

        const routeElements = root.getElementsByTagName("route");
        for (const element of routeElements) {
            const returnText = parse(element.innerHTML).getElementsByTagName(
                "return"
            )[0].innerHTML;

            output.push({
                path: element.attrs.url,
                returnContent: returnText,
            });
        }

        return output;
    }
}
