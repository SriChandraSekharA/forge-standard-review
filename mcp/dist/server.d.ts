#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
export declare function getVersionSync(): string;
export declare const VERSION: string;
export declare const FORGE_REVIEW_TOOL: {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: {
            mode: {
                type: string;
                enum: string[];
                description: string;
            };
            range: {
                type: string;
                description: string;
            };
            file: {
                type: string;
                description: string;
            };
            preview: {
                type: string;
                description: string;
            };
            workdir: {
                type: string;
                description: string;
            };
        };
        required: string[];
    };
};
export declare const REVIEW_PROMPT: {
    name: string;
    description: string;
    arguments: {
        name: string;
        description: string;
        required: boolean;
    }[];
};
export declare function buildReviewPromptText(args: {
    mode?: string;
    file?: string;
    range?: string;
    focus?: string;
}): string;
export declare const REPORT_RESOURCE_URI = "forge://.forge-standard/report.md";
export declare const REPORT_RESOURCE_URI_CANONICAL = "file://.forge-standard-review/report.md";
export declare const REVIEW_JSON_RESOURCE_URI = "forge://.forge-standard/review.json";
export declare const FORGE_RESOURCES: {
    uri: string;
    name: string;
    description: string;
    mimeType: string;
}[];
export declare function resolveReportPaths(repoRoot: string): string[];
export declare function resolveReviewJsonPaths(repoRoot: string): string[];
export declare function readFirstExisting(paths: string[]): {
    path: string;
    content: string;
} | null;
export declare const server: Server<{
    method: string;
    params?: {
        [x: string]: unknown;
        _meta?: {
            [x: string]: unknown;
            progressToken?: string | number | undefined;
            "io.modelcontextprotocol/related-task"?: {
                taskId: string;
            } | undefined;
        } | undefined;
    } | undefined;
}, {
    method: string;
    params?: {
        [x: string]: unknown;
        _meta?: {
            [x: string]: unknown;
            progressToken?: string | number | undefined;
            "io.modelcontextprotocol/related-task"?: {
                taskId: string;
            } | undefined;
        } | undefined;
    } | undefined;
}, {
    [x: string]: unknown;
    _meta?: {
        [x: string]: unknown;
        progressToken?: string | number | undefined;
        "io.modelcontextprotocol/related-task"?: {
            taskId: string;
        } | undefined;
    } | undefined;
}>;
export type ForgeReviewArgs = {
    mode?: "auto" | "staged" | "range" | "file";
    range?: string;
    file?: string;
    preview?: boolean;
    workdir?: string;
};
export declare function resolveRepoRoot(): string;
export declare function buildReviewArgs(args: ForgeReviewArgs): string[];
export declare function runReviewScript(scriptPath: string, scriptArgs: string[], workdir: string): Promise<{
    stdout: string;
    stderr: string;
    exitCode: number | null;
}>;
export declare function handleForgeReview(rawArgs: unknown): Promise<{
    content: {
        type: "text";
        text: string;
    }[];
    isError: boolean;
}>;
export declare function main(): Promise<void>;
//# sourceMappingURL=server.d.ts.map