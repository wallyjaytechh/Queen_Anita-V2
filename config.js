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
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUFQbldXa3lycEtxeHdXZTNEdGtsY1RmdFk4VFNsQjRBYm5OWVVGQkxVcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZWJaRk13eXFXK08vdEJ6Rk9XcDlRenFOQU15ZjhJNHZLTlZ4eEtINUxqOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRzg1YmlWQWh5dDl6TEpBRy92ZUxpQ2I2czRuQ1Azc25IOHZpS0I2a2t3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMYk1pMGRSbFpMVFpKbGNDMWFjNnh4cXVQT1QzZ2xLOXI0cWd1RzNGMUZzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNIZFdxL1BkWGw4M1FxSnFodDV6bnlUKzJaU2pqOC84b0VyZzUrYk0yM3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBmOU52cHRnWk9MeHVRR3U1K25MVDd4TGJVMVg5d3JManRmL2dHY21hVkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUtJNm5pZHpZWUFjU0ZFMFNmNHhZNjUzQVpLa0kvQVpPY2p5ejRxZmdtUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTlhVSXlRdnAvRzlFbTlpWUNWSndWUEdmZEZFL1RkaVowdVFkdjAxODlRRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVTc2gycDdlVGo1QUR2aHVieDRtQ3I1ZlJFU0FoNTYyQzNMaC9qMWdxWnQvMGRGVHdxNTVlUHQrMThscnRNVE9MdXZsL0E2NWM5RThnQmZPVTVtOUNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTcsImFkdlNlY3JldEtleSI6ImhKSnhRVGxWMGQ0OFRuNy9LcktjTXFUQ1NpMGlBUlZRN3N2UnhGSTNsNUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InBsVjMzR3UwVFZHeXc2dVgxVTlIU0EiLCJwaG9uZUlkIjoiZGZkYzIxNDktNzYxZi00YTRmLTk5MGEtYTU2OWEwZTA3ODQzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1PQkxsRjYxd3RLa2ZVVWY0YXlzbGV3MW5GUT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNDVqVkF3MTFVeU1kUitXZFdqblJESXA2WVJrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnVyLzV3Q0VMYWx0TFVHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQ0Y0eVZEVWxZcE4xd0hnK1hLaG1UZFNWMFpOMmJVV2h1WUNMSlNsbUYzND0iLCJhY2NvdW50U2lnbmF0dXJlIjoibnZRMmVQc01NWi9XZXBlMnNnNVprNHRKcVlNNGtDMW5GMnhXdCtKMkpYYndWaWpnbXpnMmpjdGVta1BRSDlHa1RsSFJjMlg0SE5BRDN2UXdyT0puQmc9PSIsImRldmljZVNpZ25hdHVyZSI6ImlPcWpKeTdyYytBdnVsS1haZ0R3eGZVVkRBSFJIQ1o3eEZaN2hlYlRhTU1hV29DdDJzQnZ3SFFSOEdyOEExczJRWWVERU1zVC9jNndZVlNnZm9Sa0JBPT0ifSwibWUiOnsiaWQiOiIyMzQ4MTQ0MzE3MTUyOjI5QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTQ1Njk4NTk1MDU3ODY2OjI5QGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTQ0MzE3MTUyOjI5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFoZU1sUTFKV0tUZGNCNFBseW9aazNVbGRHVGRtMUZvYm1BaXlVcFpoZCsifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjYxODU2NCwibGFzdFByb3BIYXNoIjoiMWxPU0VJIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOS3EifQ=="
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
