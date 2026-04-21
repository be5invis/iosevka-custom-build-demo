import fs from "node:fs";
import toml from "@iarna/toml";

const tomlPath = "../private-build-plans.toml";
const tomlContent = fs.readFileSync(tomlPath, "utf-8");
const parsedToml = toml.parse(tomlContent);

process.stdout.write(
    "buildPlans=" + JSON.stringify(Object.keys(parsedToml.buildPlans || {})) + "\n"
);
process.stdout.write(
    "collectPlans=" + JSON.stringify(Object.keys(parsedToml.collectPlans || {})) + "\n"
);
