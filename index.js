const INIT_CMDS = require("./commandsbot")
const CONFIGS = require("./configs.json")
INIT_CMDS()

const TOKEN = CONFIGS["token"]
const { GatewayIntentBits, Client } = require("discord.js")

var CLIENT = new Client({ intents: Object.values(GatewayIntentBits) })

CLIENT.on('interactionCreate', async function(interaction) {
  if (!interaction.isCommand()) return;
  const { commandName } = interaction;
  if (commandName == "echo") {
    await interaction.reply(interaction.options.getString("message"))
  }
})

CLIENT.login(TOKEN)
