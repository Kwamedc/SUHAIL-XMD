const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+233531725160";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_03_10_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTEsXG4gICAgICAgIDI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0NyxcbiAgICAgICAgNixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAzMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDUzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMSxcbiAgICAgICAgOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5LFxuICAgICAgICA2NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODQsXG4gICAgICAgIDc3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjAyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDMsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDksXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDg3LFxuICAgICAgICA1NixcbiAgICAgICAgMTY0LFxuICAgICAgICA1MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDk1LFxuICAgICAgICA2NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM0LFxuICAgICAgICAxODAsXG4gICAgICAgIDYzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY4LFxuICAgICAgICA4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDU1LFxuICAgICAgICAzLFxuICAgICAgICAxMixcbiAgICAgICAgMTE1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDMxLFxuICAgICAgICA5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDY5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDYzLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTmdPazlHSEZ4TTFNL1NacVQ2cVBDRUlzOXhVbkRoZlNUZnp6S1hiS1ZVaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibG5TdkEyMG9SMkt0QlZiR01DdE5tZ1wiLFxuICBcInBob25lSWRcIjogXCI0ZDgxYTg2Zi04ZmJlLTQ0ZDQtOGRlNy1lOGU4YWNiZDBiMDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTQsXG4gICAgICA3MCxcbiAgICAgIDIzMSxcbiAgICAgIDU5LFxuICAgICAgMjM0LFxuICAgICAgMTMzLFxuICAgICAgMjA0LFxuICAgICAgMTA4LFxuICAgICAgMTY5LFxuICAgICAgMTkwLFxuICAgICAgMTkxLFxuICAgICAgMTQ1LFxuICAgICAgMjEyLFxuICAgICAgOTksXG4gICAgICAxMzIsXG4gICAgICA3MyxcbiAgICAgIDE4MCxcbiAgICAgIDI2LFxuICAgICAgMTU2LFxuICAgICAgODNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjcsXG4gICAgICAxODcsXG4gICAgICA4MCxcbiAgICAgIDE1MyxcbiAgICAgIDE4MixcbiAgICAgIDE5LFxuICAgICAgMjU1LFxuICAgICAgMyxcbiAgICAgIDEzNCxcbiAgICAgIDE0MyxcbiAgICAgIDYsXG4gICAgICAxMzUsXG4gICAgICAyMTMsXG4gICAgICAzOSxcbiAgICAgIDEyMyxcbiAgICAgIDE3OCxcbiAgICAgIDI0OCxcbiAgICAgIDE3LFxuICAgICAgMTIxLFxuICAgICAgMTMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJETDIzUEFQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1MzE3MjUxNjA6NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg5MzIyOTU0OTk3ODUxOjQ2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xTU3Y2a0NFTUgzbExnR0dCUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNEpIS0ZNKzRuK0YvUVd2czlvVjI3UXBYenFlVzNXMlMweERqOVFENmNCbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGTWJGdDZ6aXJIOTNhUU5PYXFKc0dxZG51QzJpTHNmRGQ2K3FLOWdrVG9NMElDcWpkbnBGZ095Vk1JK2c5TkRKb3lOWmFyQTllUlZuR2YrazhoVVlBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJQdXpaL2xvbkVOOHpOM3hBemdkSHljWitmblpZL1Y1cG5YOEE2eGJZVVRWQVMzRFNJWG12NnBrd3gyNElhaklOdVZQbVIwbWgrVzJnano4WVIwbHFCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1MzE3MjUxNjA6NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4Mzk2MjI5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRWVCXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFZUIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJnQkl6UWs2eGR2c1EwaHdDRGdqT2QxTW1yQ0p4WlZkbEEwQXpxZmYyNGhnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYyMzg4ODY4OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyODAwMjgyNTQ1NVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
