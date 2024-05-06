#!/usr/bin/env node

const secrets = JSON.parse(process.env.secrets);
const NPM_TOKEN = secrets["NPM_TOKEN"];
console.log(NPM_TOKEN);
