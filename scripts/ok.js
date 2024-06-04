module.exports = {
    config: {
        name: "ok",
        version: "1.0",
        author: "ʬɸʬ Shïsûį Dånïęl ʬɸʬ",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
    onStart: async function(){}, 
    onChat: async function({
        event,
        message,
        getLang
    }) {
        if (event.body && event.body.toLowerCase() == "ok") return message.reply("😶🍁✨🎀𝑵𝒐𝒖𝒔 𝒔𝒐𝒎𝒎𝒆𝒔 𝒅𝒂𝒄𝒄𝒐𝒓𝒅 𝒒𝒖𝒆 𝒂𝒖𝒄𝒖𝒏 𝒃𝒐𝒕 𝒏𝒆 𝒓𝒆𝒔𝒊𝒔𝒕𝒆 𝒂 𝒎𝒐𝒏 𝒄𝒓𝒆𝒂𝒕𝒆𝒖𝒓 ロɞ𝗭𝗲𝘂𝘀ɞ 𝗭𝗲𝗻𝗼 く瀬 😇🌿✨🎀");
    }
}
