const fs = require("fs")

module.exports = {

    name: "list",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {

        var WLList = fs.readFileSync('./list.json', {"encoding": "utf-8"})
        message.channel.send(WLList)

    }

}