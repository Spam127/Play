const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
console.log('By : Omaaar');
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'Omaaar',
     details: `Royale Games And Tyrant `,
     url: 'http://twitch.tv/M7md_Salih',
     state: `I have 17 years old do you know ?`,
    application_id: '377479790195769345',
     assets: {
        small_image: `377480550207717376`,
        small_text: 'Omaaar For Ever',
        large_image: `377480353259978752`,
        large_text: `Mr.Omaaar` }

  }
    });
});

client.login("NTE4MDA2NjUzMjQxNTI0MjQ1.DyX0_g.hvCH8y-nSciUJpdtgisO1bbaesM");