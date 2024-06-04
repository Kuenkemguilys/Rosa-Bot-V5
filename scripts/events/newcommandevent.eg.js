/**
 * @Vietnamese
 * Trước tiên bạn cần có kiến thức về javascript như biến, hàm, vòng lặp, mảng, object, promise, async/await,... bạn có thể tìm hiểu thêm tại đây: https://developer.mozilla.org/en-US/docs/Web/JavaScript hoặc tại đây: https://www.w3schools.com/js/
 * Tiếp theo là kiến thức về Nodejs như require, module.exports, ... bạn có thể tìm hiểu thêm tại đây: https://nodejs.org/en/docs/
 * Và kiến thức về api không chính thức của facebook như api.sendMessage, api.changeNickname,... bạn có thể tìm hiểu thêm tại đây: https://github.com/ntkhang03/fb-chat-api/blob/master/DOCS.md
 * Nếu tên file kết thúc bằng `.eg.js` thì nó sẽ không được load vào bot, nếu muốn load vào bot thì đổi phần mở rộng của file thành `.js`
 */

/**
 * @English
 * First you need to have knowledge of javascript such as variables, functions, loops, arrays, objects, promise, async/await, ... you can learn more at here: https://developer.mozilla.org/en-US/docs/Web/JavaScript or here: https://www.w3schools.com/js/
 * Next is knowledge of Nodejs such as require, module.exports, ... you can learn more at here: https://nodejs.org/en/docs/
 * And knowledge of unofficial facebook api such as api.sendMessage, api.changeNickname,... you can learn more at here: https://github.com/ntkhang03/fb-chat-api/blob/master/DOCS.md
 * If the file name ends with `.eg.js` then it will not be loaded into the bot, if you want to load it into the bot then change the file extension to `.js`
 */

module.exports = {
	config: {
		name: "commandName", // Name of command, it must be unique to identify with other commands
		version: "1.0", // Version of command
		author: "NTKhang", // Author of command
		category: "events" // Category of command, it must be "events" to identify with other commands
	},

	langs: {
		vi: {
			hello: "xin chào thành viên mới",
			helloWithName: "xin chào thành vien mới, id facebook của bạn là %1"
		}, // Vietnamese language
		en: {
			hello: "𝒉𝒆𝒍𝒍𝒐 𝒃𝒓𝒐𝒕𝒉𝒆𝒓 ",
			helloWithName: "𝑯𝒆𝒍𝒍𝒐 𝒏𝒆𝒘 𝒎𝒆𝒎𝒃𝒆𝒓, 𝒚𝒐𝒖𝒓 𝒇𝒂𝒄𝒆𝒃𝒐𝒐𝒌 𝒊𝒅 𝒊𝒔 %1"
		} // English language
	},

	// onStart is a function that will be executed when has new event in group (see more at https://github.com/ntkhang03/fb-chat-api/blob/master/DOCS.md#apilistenmqttcallback (Event Type: "event"))
	onStart: async function ({ api, usersData, threadsData, message, event, userModel, threadModel, prefix, dashBoardModel, globalModel, dashBoardData, globalData, envCommands, envEvents, envGlobal, role, getLang , commandName }) {
		// YOUR CODE HERE, use console.log() to see all properties in variables above

		// example when user join group

		// check if event is user join group, see more at https://github.com/ntkhang03/fb-chat-api/blob/master/DOCS.md#apilistenmqttcallback
		if (event.logMessageType == "log:subscribe") { 
			// getLang is a function to get language of command

			// getLang without parameter is a function to get language of command without parameter
			message.send(getLang("hello"));

			// getLang with parameter is a function to get language of command with parameter (delete // in line below to test)
			// message.send(getLang("helloWithName", event.logMessageData.addedParticipants[0].fullName));
		}
	}
};
