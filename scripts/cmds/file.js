const fs = require('fs');

module.exports = {
  config: {
    name: "file",
    version: "1.0",
    author: "OtinXShiva",
    countDown: 5,
    role: 0,
    shortDescription: "Send bot script",
    longDescription: "Send bot specified file ",
    category: "owner",
    guide: "{pn} file name. Ex: .{pn} filename"
  },

  onStart: async function ({ message, args, api, event }) {
    const permission = ["61553436962117",];
    if (!permission.includes(event.senderID)) {
      return api.sendMessage(" 🔒𝑪𝒐𝒏𝒏𝒂𝒓𝒅 , 𝒊𝒏𝒔𝒆𝒏𝒔é,  𝒔𝒆𝒖𝒍𝒆 ♦️ ロ.ɞZEUSɞ ZENO く瀬 ♦️ 𝒑𝒆𝒖𝒕 𝒖𝒕𝒊𝒍𝒊𝒔𝒆𝒓 𝒄𝒆𝒕𝒕𝒆 𝒄𝒎𝒅 👿🗝️", event.threadID, event.messageID);
    }
    
    const fileName = args[0];
    if (!fileName) {
      return api.sendMessage("Please provide a file name.", event.threadID, event.messageID);
    }

    const filePath = __dirname + `/${fileName}.js`;
    if (!fs.existsSync(filePath)) {
      return api.sendMessage(`File not found: ${fileName}.js`, event.threadID, event.messageID);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    api.sendMessage({ body: fileContent }, event.threadID);
  }
};
