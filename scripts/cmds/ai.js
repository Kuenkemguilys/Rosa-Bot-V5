const axios = require('axios');



const Prefixes = [

  'ask',

  'zeno',

  'ai',

  'bot',

  'darkness',

];



module.exports = {

  config: {

    name: "chatgpt",

    version: 1.0,

    author: "ArYAN",

    role: 0,

    shortDescription: "Ask question to ChatGPT",

    longDescription: "Interact as ChatGPT provided by OpenAi. This command allows users to interact with the AI, asking various questions and receiving detailed answers.",

    category: "ai",

    guide: {

      en: "{p}ai [ question ] - Replace '{p}' with your command prefix and 'question' with your actual query.",

    },

  },

  

  onStart: async function () {},

  onChat: async function ({ api, event, args, message }) {

    try {

      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));

      if (!prefix) {

        return; // Invalid prefix, ignore the command

      }

      const prompt = event.body.substring(prefix.length).trim();

      if (!prompt) {

        await message.reply("💠𝒑𝒐𝒔𝒆 𝒕𝒂 𝒒𝒖𝒆𝒔𝒕𝒊𝒐𝒏 𝒉𝒖𝒎𝒂𝒊𝒏 𝒋𝒆 𝒓é𝒑𝒐𝒏𝒅𝒓𝒂𝒊 𝒈𝒓â𝒄𝒆 à 𝒎𝒂 𝒄𝒐𝒎𝒑é𝒕𝒆𝒏𝒄𝒆 𝒖𝒏𝒊𝒒𝒖𝒆 (𝒈𝒓𝒂𝒏𝒅 𝒔𝒂𝒈𝒆)💠");

        return;

      }

      api.setMessageReaction("⏰", event.messageID, (err) => {}, true);

      const response = await axios.get(`https://himachalwale.onrender.com/api/chatgpt?prompt=${encodeURIComponent(prompt)}&apikey=©himachalwale`);

      const answer = response.data.fullResponse;

      await message.reply(answer);

      api.setMessageReaction("✅", event.messageID, (err) => {}, true);

    } catch (error) {

      console.error("Error:", error.message, error.response?.data);

      api.setMessageReaction("❌", event.messageID, (err) => {}, true);

    }

  }

};
