const Discord = require("discord.js")


const fs = require("fs");



module.exports = {
   name: "add",
   description: "adds a film to the watchlist",
   run: async ({client, message, args}) => {
    
    const films = args.slice(0).join(" ")

  if(!films) {
      return message.channel.send("You need to at least add a film")
    }
  
 
  
      
   const list = {
    Film: `${films}`,
          
      User: `${message.author.username}`
   }
   const jsonString = JSON.stringify(list)
    fs.appendFileSync('./list.json', jsonString+`\n`, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
        
    }
})
    message.channel.send(`${films} has been added to the watchlist by ${message.author}`)
   }
}