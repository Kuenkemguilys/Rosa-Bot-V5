module.exports = {
    config: {
        name: "ok",
        version: "1.0",
        author: "VotreNom",
        countDown: 5,
        role: 0,
        shortDescription: "commande Ok",
        longDescription: "commande Ok",
        category: "reply",
    },
    onStart: async function(){}, 
    onChat: async function({
        event,
        message,
        getLang
    }) {
        if (event.body && event.body.toLowerCase() == "ok") return message.reply("𝑶𝒏 𝒆𝒔𝒕 𝒅'𝒂𝒄𝒄𝒐𝒓𝒅 𝒒𝒖𝒆 👑𝒚𝒗𝒂𝒏 𝒑𝒐𝒘𝒆𝒓 👑𝒆𝒔𝒕 𝒍𝒆 𝒑𝒍𝒖𝒔 𝒃𝒆𝒂𝒖 𝒆𝒕 𝒊𝒏𝒕𝒆𝒍𝒍𝒊𝒈𝒆𝒏𝒕 𝒉𝒐𝒎𝒎𝒆 𝒅𝒖 𝒎𝒐𝒏𝒅𝒆 😁");
    }
  }
