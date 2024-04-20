const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "mongodb+srv://einsteinmokua100:<password>@cluster0.esh4m6x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Nyandiekahh";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/JH6YyDAAsnO2tRNf94z0wW";
global.website=process.env.GURL || "https://chat.whatsapp.com/JH6YyDAAsnO2tRNf94z0wW" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.pinimg.com/564x/da/d6/83/dad683b594182699d9b83093edaaea45.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "254719408098" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254719408098";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.pinimg.com/564x/da/d6/83/dad683b594182699d9b83093edaaea45.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "Someone cooked here" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254719408098,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_36_04_14_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiR0pnN1hVRTdvSG5OaTFWQmhFNVo5ekdlSFQycWJoWDE5R0xidmRkQUcxZz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInRxNFpuUXBRSk1ONDBvY0F6VTNINGh0SmVhS2YyME5oQ3ArYVZXL3JyVGM9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidUtJeDhSeUk3RkltRUczc3lDSS9nVkZvOW5LSEVxajFsK0k4ZnZDV2UzTT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIldWTTFZWEZNaXJkbkNvVmh4UUxqTWREOEM1bWtCV3ZZVkJrS0tZYXhOVUE9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQ0N4YTU5WUVVNUVKZVdiMU9DV3Yzc2swamZneUJNUG1DTzdqZmlZSUQwbz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImVpdForYWVXdlR3UUJZUjB6Q2JWNUd4TjlMN1RaRjNORE9FdHZwaTdERGc9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ5S1RLVlNlU3Nhak1BcHJCZnZpdzBsOTUvZmZnMFFyVC9MOHlEQ2dhWTFvPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUjFpZDRhVFpOcEFTVG5KUVNQRWhSbUFUSTJwTlFyWlhZZnhqWW9jTm1Ecz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJIb3EyR1JOalNHTjdnTXliOW9JMkZNVmR4TVRaUXpKTjFhcnVJTDU4VXFLTkpPdXhSSkZvdE1DNnFMU1ZqL0ltSVBmMlRLT1NsdVcxYUtTbVdTVDVpZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTcwLFwiYWR2U2VjcmV0S2V5XCI6XCI1R2M5Z2R5KzFZcGo4UVRZb2kzSFk1SG9RRFJqNWw2cnJxRGdTNzhaWXlnPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiVWRpcWlPN2lRR3k2WXI1eTN0T18zQVwiLFwicGhvbmVJZFwiOlwiNWE0MjdmNzMtYmM2YS00Y2ZmLTgwY2QtNzIxOWUwMGRhZDgyXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIybXRrd2NJL0R3VkJyZ2grYll1Z0U3LzV1OFE9XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInd2Z3U0ZXZrR202aGlyNS9hdi9vUUllRlhScz1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDUGkxbXdJUTJwdnZzQVlZRlNBQUtBQT1cIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcInFzMmF2VkdVV01wem9JcnZRTksrNW5PMzh3ZW5hK1JKYTVMNGp2eGlXMXc9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJRZFdQNHM2MkV1dFF3Z2F5OGp2cEVhSjFNL1VxRGNHQ0JZVkduSmZOZ3dISXNpMThGR0tTSlk3bENmaUI5Ty9SQmFKczcwOXB1ckY5M1NabG5zcjFCdz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcImViMTdVNjVaOVh2NWFheTJUMWdQakE5NEtZcGQzZURaOEp6YU40dTFQUEFaVzFOMWZBUkVzVkhVOWF6a1RhaGRtQ2dsc2I3UkpkaW1lSHpXc1hHdmdRPT1cIn0sXCJtZVwiOntcImlkXCI6XCIyNTQ3MTk0MDgwOTg6OTRAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMjEzMzI2ODE0NTE5Mzk3Ojk0QGxpZFwiLFwibmFtZVwiOlwiMTAxMDAxMTBcIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyNTQ3MTk0MDgwOTg6OTRAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCYXJObXIxUmxGaktjNkNLNzBEU3Z1Wnp0L01IcDJ2a1NXdVMrSTc4WWx0Y1wifX1dLFwicGxhdGZvcm1cIjpcImFuZHJvaWRcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MTMwOTgyMDUsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBTFV0XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFVTLmpzb24iOiAie1wia2V5RGF0YVwiOlwicmtyUkVtd0lSY2RBaVY5Tm56eTNLYjhNTGxtSGFXdmxjU0xrQU13Q3ZnYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NjQzNTc1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTA2ODkyNDYxODRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMVVUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZT1hNRlk4NHRTRktUYXlYRlYrSE9KbXJPSVBPNTd4RWVQdVYycGk0V3ZzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NDM1NzUsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFVWLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNG1kSXI4MVoyUVM4cmVSOW50ZmF3N1ZKU1Npbk8zTzU2amlSVTBWUG5zRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NjQzNTc1LFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDIsNCw1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTE3MTAyMTkxMDRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMVVcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRVkluVEJaelpuZEVCR2g5dHhNYU5XcXNCZUNQMVVCK0NXN2dSQm1HTUFzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NDM1NzUsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNCw1LDZdfSxcInRpbWVzdGFtcFwiOlwiMTcxMTcxMDY2OTYyMlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxVWC5qc29uIjogIntcImtleURhdGFcIjpcIldyNlJsNExuSFR3bkFCT04vaU5ERFRhVzQ4Y2N2ekgrNmZtNENhWW1taWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDY0MzU3NSxcImN1cnJlbnRJbmRleFwiOjksXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw0LDVdfSxcInRpbWVzdGFtcFwiOlwiMTcxMTcxMDcyNjQ2M1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxVWS5qc29uIjogIntcImtleURhdGFcIjpcIndnRGZ6ZFFldWFLdE1ZQUdnN0pVQUg0UXdrVWhHcEpUei8vS0YzdkhYd2c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDY0MzU3NSxcImN1cnJlbnRJbmRleFwiOjksXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTE3MTA3MzA1ODBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMVVouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxMDM1WVdyaS95c0ZhMGRlT2RBU2hXMU9sekxid0gvS1NtNWYrT244YVBZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NDM1NzUsXCJjdXJyZW50SW5kZXhcIjoxMyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDEwLDExLDEzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMVWEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjdWNNOVVsa2pPeURvQXZwZVpWYUZJSVlzdDdTVlJPYWxLbVRzOGMzU1ZvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NDM1NzUsXCJjdXJyZW50SW5kZXhcIjoxMyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDEwLDExXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTE4MDU4MDAwODRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMVWIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEWEVhZEhTWXdOZlpHamxVTm1ML21VNW1iWXpYbHFnU3RmNWVYT1hLNGhnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NDM1NzUsXCJjdXJyZW50SW5kZXhcIjoxMyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDExXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTE4MDU4MDM0ODdcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMVWMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoQytpRHEzaHlZS0k5REVlUk5zdTRjYXhVWkZzVVU1MGhWc0lWT01zYTQ0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NDM1NzUsXCJjdXJyZW50SW5kZXhcIjoxNixcImRldmljZUluZGV4ZXNcIjpbMTYsMCwxLDE0LDE1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMVWQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3alhyWkNYZ0RHN2F3RE5EZFNMUktzd2hCaWxDTXNHcE5QNlB0ZFZQVk9NPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NDM1NzUsXCJjdXJyZW50SW5kZXhcIjoxNixcImRldmljZUluZGV4ZXNcIjpbMTYsMCwxLDE0XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTE4MjQ0MjkzOTdcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMVWUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2MmFLcis5S2xwdEJmM0hVbUhwZzVYdHBTSFR5YXhIK3JUMGQzbHVQa1djPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NDM1NzUsXCJjdXJyZW50SW5kZXhcIjoxOCxcImRldmljZUluZGV4ZXNcIjpbMTYsMCwxLDE3LDE4XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTE4MjYyMzU1NTJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMVWYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjbnVPTjRETUtKVWdzc1hlVmVHSVFsSTlTMFpXSURJcGZIUWJEZVdlOUo0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NDM1NzUsXCJjdXJyZW50SW5kZXhcIjoxOCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDE3LDE4XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTE4MjYyNDQ0NjhcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMVWcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzZXVrS3ZvVE9nSVlHam5tdDZTaC9IQ1VSL01La2NEcVNQRks5dUVUbmlzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NDM1NzUsXCJjdXJyZW50SW5kZXhcIjoxOCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDE4XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTE4MjYyNDg5NDZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMVWguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJLcXRteXJSZHgydFREdmhMQ1dhQmxoOXhoaW1KaGhMU3ZkT241YnZaKzg0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NDM1NzUsXCJjdXJyZW50SW5kZXhcIjoxOSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDE5XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTE4MjczMzU4NjZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMVWkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1Zi95QnpwTEdnSFkxZWMxdndNV0xWYml6ZFN0S3VETGl3NDUwTExzWEdJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NDM1NzUsXCJjdXJyZW50SW5kZXhcIjoyMCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDIwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTE4Mjc0NDUxODlcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMVWouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJnZENSVmo3UlVtcFliRlRRQkFVU3FCcERBdkNxenRya1kxMnc2ZnVUQlZnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NDM1NzUsXCJjdXJyZW50SW5kZXhcIjoyMSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDIxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTE4MzAzNDQyOTVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMVWsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI4QmxKMlJHSHRVUm1waUZycjFrNDVMWHR0ZzEwQUM1VFR1aXUvS3Fva1VBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NDM1NzUsXCJjdXJyZW50SW5kZXhcIjoyMSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTE4MzAzNTMxMTJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMVWwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIxblk5WGIrV3UvZWxpdW5xL3ZnaXNTMVp5c21IczVKWlRENktjSEk1dnhBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NDM1NzYsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFVtLmpzb24iOiAie1wia2V5RGF0YVwiOlwidm1hMGdvNGVpTFlieGVOanJtZVJnbVk3TUxOQWx6OHR2NUxYTVRrWk5Xdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NjQzNTc2LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxVbi5qc29uIjogIntcImtleURhdGFcIjpcIkhlVnFSR205YTViL2VNdEp4UzNtN1hTOGY4K1YzbVFOR2o4cnd5dWFGMmM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDY0MzU3NixcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTIxNzE2NzQ3ODVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMVW8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwNklGTFl3OC91NXNXcHZoYVZRcEtvcE5CQ1RkNHBWdXE0bzBGYlB0SzE4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NDM1NzYsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsM119LFwidGltZXN0YW1wXCI6XCIxNzEyMTcxNzMwMDA5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFVwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWjQ0czJycmhyNkkwa2dWa2ptS1dGR25uVGxXNUVMZ3o3ZklGdDNrb1ZQUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NjQzNTc2LFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwzLDVdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxVcS5qc29uIjogIntcImtleURhdGFcIjpcIk0zSWlvYksvaTZWODBDYkYyb3B6azdaemdxMFU0bnhTQXNOeVpibVArVEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDY0MzU3NixcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsMyw2LDddfSxcInRpbWVzdGFtcFwiOlwiMTcxMjY0NDgxOTQzNlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxVcy5qc29uIjogIntcImtleURhdGFcIjpcIjNvRkowOTlUc2pXRGdMT1k2ZUh3VlJyMXpXeVlENThWa2NXZDhpMXlja3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDY0MzU3NixcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsMyw2LDddfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxVdC5qc29uIjogIntcImtleURhdGFcIjpcImJSeXRGcmV3N0t6WmlMOHJ5MzVnMWowV2V5allpZy81VWEzR2xNdGxCams9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDY0MzU3NixcImN1cnJlbnRJbmRleFwiOjgsXCJkZXZpY2VJbmRleGVzXCI6WzAsMyw2LDhdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxVdS5qc29uIjogIntcImtleURhdGFcIjpcImozdlZtakVJNmE0QXlZbkJYbE1zUGQyMWZ3ZUp0dlRrY1JiL3dLbzJZWlk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDY0MzU3NixcImN1cnJlbnRJbmRleFwiOjksXCJkZXZpY2VJbmRleGVzXCI6WzAsNiw4LDldfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxVdi5qc29uIjogIntcImtleURhdGFcIjpcIm9adlJGdFI5UDUwOTZKdFMxdUd3aFdvcW9XdmxuSkhrY1d3a0djYkhIRTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDY0MzU3NixcImN1cnJlbnRJbmRleFwiOjEwLFwiZGV2aWNlSW5kZXhlc1wiOlswLDYsOCw5XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTMwNDc0NDk2OTZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMVXcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMT2RLWWVEYTNsYTdHMGtxT1pKRytnQ1hlUHZweGEzSDdkR29LbVRZOFk4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NDM1NzYsXCJjdXJyZW50SW5kZXhcIjoxNCxcImRldmljZUluZGV4ZXNcIjpbMCw2LDgsOV19LFwidGltZXN0YW1wXCI6XCIxNzEzMDk3NTAyNzc1XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFV4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwia1JsZUtDdHFVMklraHYrUG5OWGxoQk9nNHdmYmZJN0plTWNieUtRSUowZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NjQzNTc2LFwiY3VycmVudEluZGV4XCI6MTcsXCJkZXZpY2VJbmRleGVzXCI6WzAsNiw5XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTMwOTc1NDI2ODRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMVXkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJWS0hhVUltdU9ENkNmdGt3TmxQYVZ3bzZnNDF6QUpPR2NHam54c0g5S3FRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NDM1NzYsXCJjdXJyZW50SW5kZXhcIjoxOSxcImRldmljZUluZGV4ZXNcIjpbMCwxOCw5XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTMwOTc2ODY1NjVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMVXouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1TW5Sa1puY2dTRFlGQTdkZWlQa3p1dEtpZWxWUmZDaWQ3U1JhMGw2amRZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NDM1NzYsXCJjdXJyZW50SW5kZXhcIjoyMCxcImRldmljZUluZGV4ZXNcIjpbMCwyMCw5XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTMwOTgxNzk5NzVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUQ4QUFMVVQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNKzBGK3VoalJ0NHBRMVpGYy81V0QzRUdsbEdkdlQ0WFFGb1NNYk16R0VFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2NDM1NzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsNjNdfSxcInRpbWVzdGFtcFwiOlwiMTcxMDg1ODMxMTQwM1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BRlVBQUxVci5qc29uIjogIntcImtleURhdGFcIjpcImFZWW44RU9kT3ROYnR5TmNOQm5LL0MrLzJ3dFQ1R2dDd1pselpTSDFVSTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDY0MzU3NixcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMyw4NSw3XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTI2NzA4Nzc4NDFcIn0iCn0" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "ICONIC ⭐" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ICONIC ⭐ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ICONIC ⭐』*\n youtube.com"),
 
  author : process.env.PACK_AUTHER|| "MASKED",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "ICONIC ⭐",
  ownername:process.env.OWNER_NAME|| "Classified",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = true; 
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
