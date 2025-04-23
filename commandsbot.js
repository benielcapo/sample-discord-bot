const { REST, Routes, SlashCommandBuilder } = require("discord.js")
const CONFIGS = require("./configs.json")

const TOKEN = CONFIGS["token"]
const CLIENT_ID = CONFIGS["client_id"]

const COMMAND = new SlashCommandBuilder()
    .setName("echo")
    .setDescription("echoes your message")
    .addStringOption(OPT => 
        OPT.setName("message")
            .setDescription("Message to echo")
            .setRequired(true)
)


const COMMANDS = [
    COMMAND
]

const rest = new REST({ version: 10 }).setToken(TOKEN)

async function init() {
    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: COMMANDS })
}

module.exports = init
