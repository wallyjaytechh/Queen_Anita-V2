//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wallyjay123@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/wallyjaytechh/WALLYJAYTECH-MD";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/FTuAbXCgwPLDt96BK7bm5P";
global.website = process.env.GURL || "https://chat.whatsapp.com/FTuAbXCgwPLDt96BK7bm5P";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://graph.org/file/21e984a94def2215b0215.jpg";
global.devs = "https://t.me/wallyjaytechy";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348144317152";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://graph.org/file/21e984a94def2215b0215.jpg,https://i.imgur.com/wxgFh6d.jpeg";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT01mb3VJNDdtdEhjRzNoa1ROYytYRGVsZk80NlpxTnpScmhpMFlQTk5GWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUFRHYU5ENVpOYUJ0UXJIQ1VvMkxBdWlOaVB0S1NBZUptNndvVDNjajhpZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQ21VWDVZSXdQTXBuWFplWnBQaElSUVNXelIzcjd6Nnd4K2gyREZTZW44PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDcXRDODhsUDhVQzdiOFlUd2JSTGxla3VhaFlhZm4xTHFJbGxTTTIrZFVjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1IOFo2eHo2VW1YcVlVUDdpUVBSa2ozbVR6SzIzR2E0c245Tkdic05kRVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inp5Q29GY004M0dWRUphREVtWFlBbUdBOVV2cjZSV21JZEcvT2wvOXl1SHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUVYYk13MzZiMWQwaFVPRVA3TGN6dkpiaVpHUWduVWdFSm5GSzZHR3BYOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmlmNStUMUhNR1JMWHhJR0Z3MmlxK2NDa20wZ3FrK2xpL28rVnl1eGpRaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5IbUxyTUNGb0Z2dUJpaGVPbnNEdjhUOFduVEgrbVFQZUdOVkJ3N1k1TnpJZDRRYVlHbXgrbmVRVEdzL2dORXFvWC9icWE4VFlBVGIyZUJvN0k5ZmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMxLCJhZHZTZWNyZXRLZXkiOiJ2VkdDcWs4K2pibmxBZkFlNXB1aUtDTGR6WjBnV1BBVEpIM24zNng4bW1zPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxNTU3NjM3MDlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRkI0RjE3Q0NBQjU5NzdFRDI5QkRGODYyOTIxNkMxNEQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjY2ODg2NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMTdpU3M0TkdUQkNjdUU5bmVNMG9YQSIsInBob25lSWQiOiJkNTE2NDY3NS01NTAzLTQzNmItOWQ2ZC01N2JjNDA2ZjE4YzciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGJiMDV2L1FOMzlBMXB4M1FxUThvZE1YS1FZPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1Z01KZDdUZXVqd0ozbVpLemRjd29xbk5acEk9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNQendsYklERUxDdXQ3VUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJVcTZ4NERvaGx0RzNKNHR1Z0ZMajZKSTJTU1QyVmZ1dHdacVNKTnR0VnlFPSIsImFjY291bnRTaWduYXR1cmUiOiIzdVdTUmZSNVA5QnRoM3hDWjlnM1Z5VXIycEhoT2ZSWUIzWDZud2RiSldpdlpXYUsxN2RLTEZPcm01T05GY3hrSElMQ09zd1hzSkZDN2NjbG1hSDFBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibG85eXNFUEVQWGZRem9IT1JQZnMyaHd3aVNYZ1dSZEd5Rjc2VSt0bVRLSWlWRE1XRklIUzNsQUNLOVdid0xKNGFaYWNvU3ZwMCsweTVxSjhJcC9SaHc9PSJ9LCJtZSI6eyJpZCI6IjIzNDgxNTU3NjM3MDk6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJBbm9ueW1vdXMgQnVnZ2VyIiwibGlkIjoiNTU5MjA5Nzc1NTk2ODA6NUBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODE1NTc2MzcwOTo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZLdXNlQTZJWmJSdHllTGJvQlM0K2lTTmtrazlsWDdyY0dha2lUYmJWY2gifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjY2ODg2MiwibGFzdFByb3BIYXNoIjoiMXloSVJBIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJQ3UifQ=="
  module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`WALLYJAYTECH-MD`",
  author: process.env.PACK_AUTHER || "WALLYJAYTECH",
  packname: process.env.PACK_NAME || "WALLY JAY TECH",
  botname: process.env.BOT_NAME || "WALLYJAYTECH-MD",
  ownername: process.env.OWNER_NAME || "Wally Jay",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WALLYJAYTECH").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
