const axios = require('axios');

const Prefixes = [
  'limule'
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "Shïsûį",
    longDescription: "AI", 
    category: "ai",
    guide: {
      en: "{p} questions",
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


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply({ body: `🔷💧💠
✧════•❁❀❁•════✧        ${answer}
✧════•❁❀❁•════✧ limule tempest 💧`,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
     }
