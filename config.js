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
  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUFMamlPYm5MT0kzZGxyRndodUc1RnZIbk4yNzRSaVd4NDd2R0FKazZYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidE1MZXMwclp2a1FKeFlHN1RzVWM0WklVd3UvVjJlOUQybmFwc0V2L2NqYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3SHlaWk9lZzdpbVpLQVBQdTBCdlppNFVxbUI1ZnFOTVNXSHE1NWFzWlZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSFdjWUtKK0R5YjdrVk9NY1BhRnBEZ2R6VFRyWUxiNFZkYW95ZU9jcVNrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9CNnlJWXdBTi9LcXhocUF2Ujc0K3NJSU1LWnFkMWNIY0RHcHBOcFJrRVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjkxVysvYlFsbDRKaXVwSmZwaHlMT1dlcEY3dTZrZlNTV2xmUDJLSGoxRGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU4vM1Q4c2dNek5KUFpiMzlXUytGTi9jdFpMd0ZZVmd5YXd2VkxuS2VrST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMSt4dmEvU1BOTjRic1ZHY1VjSURFaW9JUml0UUxTdjQreHBxam9iQ0FTST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZOdFpNWkRVNXZiMm9aSno4V0Y1UEF4RGdUOWR2NVQ2WXo4NXlTZnhVS1VJM0krVGZSSmp3bHR5UnpxbnBEV1c5NCs5YWltdHY1aFYvRkNKdnNJK0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIwLCJhZHZTZWNyZXRLZXkiOiJ5Ynl2NXppTEs4V1JEWGt2cFVpYm1kdndQMCtLTXJXMXdmbzNKd1BBa3lvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxNDQzMTcxNTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDVDQUExMERCNEFBNTg5M0JBQzlCRkJCNDE2QUU5OTYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjgzMzMzOH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiVEhsM3FfY09RRC1KZ0FMSHJzaFZYdyIsInBob25lSWQiOiIxOTNhZWY0OC1kNDc1LTQyZTYtOThkNi0wODg3MDE0NTU4ZjYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWG01c0tPc0N5NDZVUCsrSXVLOWhrdVZmaklNPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii90L1BpK3BqL0Q1WmdDeGtNM2hRdnY4YXlabz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJGRE5ZR0JXTCIsIm1lIjp7ImlkIjoiMjM0ODE0NDMxNzE1MjozMEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnVyLzV3Q0VLaXp3YlVHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQ0Y0eVZEVWxZcE4xd0hnK1hLaG1UZFNWMFpOMmJVV2h1WUNMSlNsbUYzND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZzhnU1Y4bmphTWt6alJNcjVnb0cwZ2g1RG0yQXMrWDZrWGhyclJjWVNJWUZ1akEvN1Y5SllFM2NvUTdxdVJlUWRVSlREdWNlbnJYMUF6aVgzTndJQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6IkRSWGpNOWE4a1ZWV2pMNkZoRnFBNlBJbWRWMmhKVzJTR083YUhRQVZaalhnYll0YXVQYU52MHJ3RzNTK2hOQ2IvaHI0TitOZFpoY3dXdkpPN0hiQUNnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODE0NDMxNzE1MjozMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRaGVNbFExSldLVGRjQjRQbHlvWmszVWxkR1RkbTFGb2JtQWl5VXBaaGQrIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyODMzMzMzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5LcSJ9"
  module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
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
