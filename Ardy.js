/*Hai Ngab Mau Ngapain?
* Pasti Mau Ambil Case Ya:v
* Sc Punya Ardy
* Recode Kasih Nama Gw Anjg
* Jan Ganti Developer
*/

//Tqto
/*
=> MhankBarBar
=> Penyediaan Apikey
=> Benny Hidayat
=> Manik
=> Fax Botz
=> Lolhuman Team
=> Justpiple
=> X-MrGr3p5
=> Ivanzz
=> MeMans
=> Vean
=> Ramlan ID
=> Yuda Xwer
=> YogiPw
=> All Creator Bot
// [ Big Thanks To ]
=> Adiwajshing
=> Baileys
=> Aqullz
=> Nurutomo
=> Fax Botz (Penyedia Case Langka:v)
=> MFarelS (Membantu Pembuatan Case Nulis)
*/

const {
   WAConnection: _WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   processTime,
   processTicksAndRejections,
   ECONNABORTED,
   apikey,
   Browsers,
   WA_DEAFULT_EPHEMERAL,
   DataView,
   TypedArray,
} = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
//==========[REQUIRE]==========
const crypto = require('crypto')
const { color, bgcolor } = require('./lib/color')
const { ind } = require('./language')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const util = require('util');
const moment = require('moment-timezone')
const { exec, spawn } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const audionye = JSON.parse(fs.readFileSync('./add/audio.json'))
const setiker = JSON.parse(fs.readFileSync('./add/sticker.json'))
const videonye = JSON.parse(fs.readFileSync('./add/video.json'))
const gambarnye = JSON.parse(fs.readFileSync('./add/image.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const adminNumber = JSON.parse(fs.readFileSync('./database/admin.json'))
const anime = JSON.parse(fs.readFileSync('./src/anime.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const ArdyStore = JSON.parse(fs.readFileSync('./src/settings.json'))

//Sticker
const Exif = require('./lib/exif')
const exif = new Exif()

prefix = ArdyStore.prefix
NamaBot = ArdyStore.NamaBot
NamaOwner = ArdyStore.NamaOwner
limitawal = ArdyStore.limitawal
blocked = []
let tictactoe = [];
let tebakgambar = [];
imgibb = ArdyStore.imgibb
// public = false

let {
   lolkey,
   zeks,
   xteamkey
} = ArdyStore



//=======================================================
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
                                         }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
                                         }

const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, time, serials) => {
            const obj = { id: userid, name: sender, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/user.json', JSON.stringify(_registered))
        }
              
        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
            }
        }
        
var date = new Date();

var tahun = date.getFullYear();

var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jams = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();


switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
            switch(jams){
                case 0: pada = "Malem"; break;
                case 1: pada = "Malem"; break;
                case 2: pada = "Malem"; break;
                case 3: pada = "Pagi"; break;
                case 4: pada = "Pagi"; break;
                case 5: pada = "Pagi"; break;
                case 6: pada = "Pagi"; break;
                case 7: pada = "Pagi"; break;
                case 8: pada = "Pagi"; break;
                case 9: pada = "Pagi"; break;
                case 10: pada = "Pagi"; break;
                case 11: pada = "Siang"; break;
                case 12: pada = "Siang"; break;
                case 13: pada = "Siang"; break;
                case 14: pada = "Siang"; break;
                case 15: pada = "Sore"; break;
                case 16: pada = "Sore"; break;
                case 17: pada = "Sore"; break;
                case 18: pada = "Malem"; break;
                case 19: pada = "Malem"; break;
                case 20: pada = "Malem"; break;
                case 21: pada = "Malem"; break;
                case 22: pada = "Malem"; break;
                case 23: pada = "Malem"; break;
            }
 tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
 tampilWaktu =  jams + ":" + menit + ":" + detik;
 tampilHari = pada;
 

//Load Setting
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const _registered = JSON.parse(fs.readFileSync('./database/user.json'))
const _level = JSON.parse(fs.readFileSync('./database/level.json'))
const uang = JSON.parse(fs.readFileSync('./database/uang.json'))
const _limit = JSON.parse(fs.readFileSync('./database/limit.json'))
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

const runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

//--------> Starts <--------

async function starts() {
	const Ardy = new WAConnection()
	Ardy.version = [2, 2119, 6]
	Ardy.browserDescription = ["ArdyTzy", "Desktop", "3.0"]
	Ardy.logger.level = 'warn'
	console.log(banner.string)
	Ardy.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})
	Ardy.on('credentials-updated', () => {
		fs.writeFileSync('./ArdyTzy.json', JSON.stringify(Ardy.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Login Info Updated')
	})
	fs.existsSync('./ArdyTzy.json') && Ardy.loadAuthInfo('./ArdyTzy.json')
	Ardy.on('connecting', () => {
		start('2', 'Connecting...')
	})
	Ardy.on('open', () => {
		success('2', 'Connected')
		//Ardy.sendMessage('6287863200063@s.whatsapp.net', `Hai Owner Bot On`, MessageType.text)
	})
	await Ardy.connect({timeoutMs: 30*1000})

	Ardy.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await Ardy.groupMetadata(anu.jid)
			const moment = require('moment-timezone')
			const jamny = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				pushnem = Ardy.contacts[num] != undefined ? Ardy.contacts[num].vname || Ardy.contacts[num].notify : undefined
				try {
					ppimg = await Ardy.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Hai @${num.split('@')[0]} Welcome To ${mdata.subject}🥳`
				let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome?nama=${pushnem}&descriminator=${jamny}&memcount=${mdata.participants.length}&gcname=${mdata.subject}&pp=${ppimg}&bg=${imgbb}`)
				Ardy.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				pushnem = Ardy.contacts[num] != undefined ? Ardy.contacts[num].vname || Ardy.contacts[num].notify : undefined
				try {
					ppimg = await Ardy.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `SAYONARA... @${num.split('@')[0]}👋* \n_Hati-Hati Dijalan, Kalo Balik Nitip Gorengan Ya_`
				let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye?nama=${pushnem}&descriminator=${jamny}&memcount=${mdata.participants.length}&gcname=${mdata.subject}&pp=${ppimg}&bg=${imgbb}`)
				Ardy.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	Ardy.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	/*Ardy.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
	   global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
        if (json[2][0][1].live == 'true') charging = true
       if (json[2][0][1].live == 'false') charging = false
        console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel+'%')
	})*/

	Ardy.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			m = simple.smsg(Ardy, mek)
			global.prefix
			global.blocked
			const sender = mek.key.fromMe ? Ardy.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const speed = require('performance-now')
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const q = args.join(' ')
			Ardy.chatRead(from)
			pushname = Ardy.contacts[sender] != undefined ? Ardy.contacts[sender].vname || Ardy.contacts[sender].notify : undefined
            const totalchat = await Ardy.chats.all()
            const unread = await Ardy.loadAllUnreadMessages()
			const { isTicTacToe, getPosTic } = require("./lib/tictactoe");
            const tictac = require("./lib/tictac");
            
            mess = {
    "wait": "*Tunggu permintaan anda sedang diproses*",
    "error": {
        "Iv": "Link yang kamu berikan tidak valid",
        "api": "Maaf terjadi kesalahan"
    },
    "OnlyGrup": "Perintah ini hanya bisa digunakan di grup",
    "OnlyPM": "Perintah ini hanya bisa digunakan di private message",
    "GrupAdmin": "Perintah ini hanya bisa digunakan oleh Admin Grup",
    "BotAdmin": "Bot Harus menjadi admin",
    "OnlyOwner": "Perintah ini hanya dapat digunakan oleh owner bot",
    "OnlyPrem": "Perintah ini khusus member premium"
}
       
        /*if (multi){
		    var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(command) ? command.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }*/


			const botNumber = Ardy.user.jid
			const ownerNumber = [`${ArdyStore.ownerNumber}@s.whatsapp.net`]
			const isGroup = from.endsWith('@g.us')
			const groupMetadata = isGroup ? await Ardy.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
            const isPremium = premium.includes(sender)
            const isRegistered = checkRegisteredUser(sender)
			const isAnime = isGroup ? anime.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
            const isAntilink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)

const fgclink = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": "NgsCIU2lXKh3VHJT",
			"groupName": `${ucapanWaktu} ${pushname}\n⎇ ${command}`, 
"caption": `${ucapanWaktu} ${pushname}\n⎇ ${command}`, 
'jpegThumbnail': fs.readFileSync('./src/bugtb.jpg')
		}
	}
}

const getGroup = async function(totalchat){
	let grup = []
	let a = []
	let b = []
	for (c of totalchat){
		a.push(c.jid)
	}
	for (d of a){
		if (d && d.includes('g.us')){
			b.push(d)
		}
	}
	for (e of b){
		let ingfo = await Ardy.groupMetadata(e)
		grup.push(ingfo)
	}
	return grup
}
			
			const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍇 : 🍇 : 🍇','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌']
            const sotoy2 = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇']
            const sotoy1 = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍊 : 🍒 : 🍒','?? : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇']
            const sotoy3 = ['🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌']
            const buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐚']
            const buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
            const buruh3 = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
            const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
		    const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
		    const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]
			
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				Ardy.sendMessage(from, teks, text, {quoted:mek})
			}
			function monospace(string){
            return '```' + string + '```'
            }
			const sendMess = (hehe, teks) => {
				Ardy.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Ardy.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Ardy.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendFile = async(link, type, options) => {
			hasil = await getBuffer(link)
			Ardy.sendMessage(from, hasil, type, options).catch(e => {
			fetchh(link).then((hasil) => {
			Ardy.sendMessage(from, hasil, type, options).catch(e => {
			Ardy.sendMessage(from, { url : link }, type, options).catch(e => {
			reply('Error!')
			console.log(e)
			})
			})
			})
			})
			}

const levelRole = getLevelingLevel(sender)
          var role = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 1243) {
   	         role = 'Legends 忍'
   	     }
   	     
   	          premi = 'Gratisan'
         if (isPremium) {
              premi = 'Premium'
         } else if (isOwner) {
              premi = 'Owner'
         }
         
         
         /*if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		const typei = Object.keys(mek.message)[0]
		budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			if(mek.key.fromMe){
			if (budo === `.public`){
				public = true
				
				Ardy.sendMessage(from, 'SUKSES MENGUBAH MODE: PUBLIC', text, {quoted: fgclink, sendEphemeral: true, thumbnail: fs.readFileSync('./src/bugtb.jpg','base64')})
			}
			if (budo === `.self`){
				public = false
				
				Ardy.sendMessage(from, 'SUKSES MENGUBAH MODE: SELF', text, {quoted: fgclink, sendEphemeral: true, thumbnail: fs.readFileSync('./src/bugtb.jpg','base64')}) 
				}
	     	}
	    	if (!public) {
			if (!mek.key.fromMe && !isOwner) return
	      	}*/
	      	
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			if (isTicTacToe(from, tictactoe)) tictac(budy, prefix, tictactoe, from, sender, reply, mentions)
			
			//•FUNCTION ANTILINK
			pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()

			if (messagesC.match("://chat.whatsapp.com/")){
			if (!isGroup) return
			if (!isAntilink) return
			if (isGroupAdmins) return reply(`Karna Kamu Adalah Admin Group,\nBot Tidak Akan Kick Kamu`)
			var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		    Ardy.updatePresence(from, Presence.composing)
		    reply(`*「 Link Group Terdeteksi 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
		    setTimeout( () => {
		    Ardy.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		    }, 1000)
		    setTimeout( () => {
		    Ardy.updatePresence(from, Presence.composing)
		    reply("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*")
		    }, 0)
			}
			
			//Limited
			const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    Ardy.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/limit.json',JSON.stringify(_limit))
           return false
       }
     }
     
if (budy.startsWith('>')){
		if(!isOwner) return
	console.log('[', color('EVAL', 'silver'),']', color(moment(mek.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))
try {
return reply(JSON.stringify(eval(budy.slice(2)),null,'\t'))
} catch(e) {
reply(`${e}`)
}
}
if (budy.startsWith('=>')){
if (!isOwner) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
  reply(String(e))
}
}
			
jam = moment.tz('Asia/Jakarta').format('HH:mm')
wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
								
				switch(command) {
/*====================================[COMMAND]====================================*/
case 'menu':
case 'help': //Plagiat Menu Itsfachri:v
if (!isRegistered) return reply(ind.noregis())
let l = 1
ownerz = "6287863200063@s.whatsapp.net"
phoneku = await Ardy.user.phone
menunya = `Hai ${pushname}, im ${NamaBot}:)
┏━━━━━━━━━━━━━━━
┣❒「 *Info User* 」
┣❒ *Nama* : ${pushname}
┣❒ *Tag* : @${sender.split("@")[0]}
┣❒ *Premium* : ${premi}
┣❒ *Role* : ${role}
┃
┣❒「 *Info Bot* 」
┣❒ *Owner* : @${ownerz.split("@")[0]}
┣❒ *Prefix* : Multi Prefix
┣❒ *Browser* : ${Ardy.browserDescription[1]}
┣❒ *Server* : ${Ardy.browserDescription[0]}
┣❒ *Version* : ${Ardy.browserDescription[2]}
┣❒ *Total Chat* : ${totalchat.length} Chat
┣❒ *Unread Chat* : ${unread.length} Chat
┣❒ *V. Whatsapp* : ${phoneku.wa_version}
┣❒ *Merk Device* : ${phoneku.device_manufacturer}
┣❒ *Versi Device* : ${phoneku.device_model}
┣❒ *Versi OS* : ${phoneku.os_version}
┣❒ *Runtime* : ${runtime(process.uptime())}
┣━━━━━━━━━━━━━━━
┣❒ *Tanggal* : ${tampilTanggal}
┣❒ *Jam* : ${wita}
┣❒ *User Register* : ${_registered.length} User
┃
┣❒「 *Coverter Menu* 」
┣❒ ${l++}. ${prefix}toimg
┣❒ ${l++}. ${prefix}tovn
┣❒ ${l++}. ${prefix}tomp3
┣❒ ${l++}. ${prefix}hode
┣❒ ${l++}. ${prefix}hode-v
┣❒ ${l++}. ${prefix}reverse
┣❒ ${l++}. ${prefix}fast-v
┣❒ ${l++}. ${prefix}slow-v
┣❒ ${l++}. ${prefix}reverse-v
┣❒ ${l++}. ${prefix}fast
┣❒ ${l++}. ${prefix}slow
┣❒ ${l++}. ${prefix}detikvn
┣❒ ${l++}. ${prefix}detikvideo
┣❒ ${l++}. ${prefix}imut
┣❒ ${l++}. ${prefix}volume
┣❒ ${l++}. ${prefix}budek
┣❒ ${l++}. ${prefix}nightcore
┣❒ ${l++}. ${prefix}bass
┣❒ ${l++}. ${prefix}vibra
┣❒ ${l++}. ${prefix}trigger
┣❒ ${l++}. ${prefix}tempo
┣❒ ${l++}. ${prefix}robot
┣❒ ${l++}. ${prefix}vibrav
┣❒ ${l++}. ${prefix}triggervid
┣❒ ${l++}. ${prefix}tupai
┣❒ ${l++}. ${prefix}blub
┣❒ ${l++}. ${prefix}gemuk
┣❒ ${l++}. ${prefix}ghost
┣❒ ${l++}. ${prefix}earrape
┣❒ ${l++}. ${prefix}apulsator
┃
┣❒「 *Sticker Commands* 」
┣❒ ${l++}. ${prefix}sticker
┣❒ ${l++}. ${prefix}swm nama|author
┣❒ ${l++}. ${prefix}patrick
┣❒ ${l++}. ${prefix}attp
┣❒ ${l++}. ${prefix}ttp
┣❒ ${l++}. ${prefix}ttp2
┣❒ ${l++}. ${prefix}ttp3
┣❒ ${l++}. ${prefix}ttp4
┃
┣❒「 *Enable / Disable* 」
┣❒ ${l++}. ${prefix}antilink [1/0]
┣❒ ${l++}. ${prefix}welcome [1/0]
┃
┣❒「 *Storage Menu* 」
┣❒ ${l++}. ${prefix}addvn [reply audio]
┣❒ ${l++}. ${prefix}addsticker [reply sticker]
┣❒ ${l++}. ${prefix}addimage [reply image]
┣❒ ${l++}. ${prefix}addvideo [reply video]
┣❒ ${l++}. ${prefix}delvn
┣❒ ${l++}. ${prefix}delsticker
┣❒ ${l++}. ${prefix}delimage
┣❒ ${l++}. ${prefix}delvideo
┣❒ ${l++}. ${prefix}getvn
┣❒ ${l++}. ${prefix}getsticker
┣❒ ${l++}. ${prefix}getimage
┣❒ ${l++}. ${prefix}getvideo
┣❒ ${l++}. ${prefix}listvn
┣❒ ${l++}. ${prefix}liststicker
┣❒ ${l++}. ${prefix}listimage
┣❒ ${l++}. ${prefix}listvideo
┃
┣❒「 *Game Menu* 」
┣❒ ${l++}. ${prefix}suit
┣❒ ${l++}. ${prefix}tembak
┣❒ ${l++}. ${prefix}tictactoe @tag
┣❒ ${l++}. ${prefix}delttc
┣❒ ${l++}. ${prefix}slot
┃
┣❒「 *Group Menu* 」
┣❒ ${l++}. ${prefix}listgroup
┣❒ ${l++}. ${prefix}listonline
┣❒ ${l++}. ${prefix}group [buka/tutup]
┣❒ ${l++}. ${prefix}linkgc
┣❒ ${l++}. ${prefix}add
┣❒ ${l++}. ${prefix}kick
┣❒ ${l++}. ${prefix}promote
┣❒ ${l++}. ${prefix}demote
┣❒ ${l++}. ${prefix}tagall
┣❒ ${l++}. ${prefix}getpp @tag
┣❒ ${l++}. ${prefix}getpic
┣❒ ${l++}. ${prefix}searchmsg
┣❒ ${l++}. ${prefix}rptag
┣❒ ${l++}. ${prefix}listadmin
┃
┣❒「 *Text Pro Me*」
┣❒ ${l++}. ${prefix}blackpink text
┣❒ ${l++}. ${prefix}neon text
┣❒ ${l++}. ${prefix}greenneon text
┣❒ ${l++}. ${prefix}advanceglow text
┣❒ ${l++}. ${prefix}futureneon text
┣❒ ${l++}. ${prefix}sandwriting text
┣❒ ${l++}. ${prefix}sandsummer text
┣❒ ${l++}. ${prefix}sandengraved text
┣❒ ${l++}. ${prefix}metaldark text
┣❒ ${l++}. ${prefix}neonlight text
┣❒ ${l++}. ${prefix}holographic text
┣❒ ${l++}. ${prefix}text1917 text
┣❒ ${l++}. ${prefix}minion text
┣❒ ${l++}. ${prefix}deluxesilver text
┣❒ ${l++}. ${prefix}newyearcard text
┣❒ ${l++}. ${prefix}bloodfrosted text
┣❒ ${l++}. ${prefix}halloween text
┣❒ ${l++}. ${prefix}jokerlogo text
┣❒ ${l++}. ${prefix}fireworksparkle text
┣❒ ${l++}. ${prefix}natureleaves text
┣❒ ${l++}. ${prefix}bokeh text
┣❒ ${l++}. ${prefix}toxic text
┣❒ ${l++}. ${prefix}strawberry text
┣❒ ${l++}. ${prefix}box3d text
┣❒ ${l++}. ${prefix}roadwarning text
┣❒ ${l++}. ${prefix}breakwall text
┣❒ ${l++}. ${prefix}icecold text
┣❒ ${l++}. ${prefix}luxury text
┣❒ ${l++}. ${prefix}cloud text
┣❒ ${l++}. ${prefix}summersand text
┣❒ ${l++}. ${prefix}horrorblood text
┣❒ ${l++}. ${prefix}thunder text
┣❒ ${l++}. ${prefix}pornhub text1 text2
┣❒ ${l++}. ${prefix}sponsburn text
┣❒ ${l++}. ${prefix}nulis text
┣❒ ${l++}. ${prefix}glitch text1 text2
┣❒ ${l++}. ${prefix}avenger text1 text2
┣❒ ${l++}. ${prefix}space text1 text2
┣❒ ${l++}. ${prefix}ninjalogo text1 text2
┣❒ ${l++}. ${prefix}marvelstudio text1 text2
┣❒ ${l++}. ${prefix}lionlogo text1 text2
┣❒ ${l++}. ${prefix}wolflogo text1 text2
┣❒ ${l++}. ${prefix}steel3d text1 text2
┣❒ ${l++}. ${prefix}wallgravity text1 text2
┃
┣❒「 *Photo Oxy* 」
┣❒ ${l++}. ${prefix}shadow text
┣❒ ${l++}. ${prefix}cup text
┣❒ ${l++}. ${prefix}cup1 text
┣❒ ${l++}. ${prefix}romance text
┣❒ ${l++}. ${prefix}smoke text
┣❒ ${l++}. ${prefix}burnpaper text
┣❒ ${l++}. ${prefix}lovemessage text
┣❒ ${l++}. ${prefix}undergrass text
┣❒ ${l++}. ${prefix}love text
┣❒ ${l++}. ${prefix}coffe text
┣❒ ${l++}. ${prefix}woodheart text
┣❒ ${l++}. ${prefix}woodenboard text
┣❒ ${l++}. ${prefix}summer3d text
┣❒ ${l++}. ${prefix}wolfmetal text
┣❒ ${l++}. ${prefix}nature3d text
┣❒ ${l++}. ${prefix}underwater text
┣❒ ${l++}. ${prefix}golderrose text
┣❒ ${l++}. ${prefix}summernature text
┣❒ ${l++}. ${prefix}letterleaves text
┣❒ ${l++}. ${prefix}glowingneon text
┣❒ ${l++}. ${prefix}fallleaves text
┣❒ ${l++}. ${prefix}flamming text
┣❒ ${l++}. ${prefix}harrypotter text
┣❒ ${l++}. ${prefix}carvedwood text
┣❒ ${l++}. ${prefix}tiktok text1 text2
┣❒ ${l++}. ${prefix}arcade8bit text1 text2
┣❒ ${l++}. ${prefix}battlefield4 text1 text2
┣❒ ${l++}. ${prefix}pubg text1 text2
┃
┣❒「 *Ephoto 360* 」
┣❒ ${l++}. ${prefix}wetglass text
┣❒ ${l++}. ${prefix}multicolor3d text
┣❒ ${l++}. ${prefix}watercolor text
┣❒ ${l++}. ${prefix}luxurygold text
┣❒ ${l++}. ${prefix}galaxywallpaper text
┣❒ ${l++}. ${prefix}lighttext text
┣❒ ${l++}. ${prefix}beautifulflower text
┣❒ ${l++}. ${prefix}puppycute text
┣❒ ${l++}. ${prefix}royaltext text
┣❒ ${l++}. ${prefix}heartshaped text
┣❒ ${l++}. ${prefix}birthdaycake text
┣❒ ${l++}. ${prefix}galaxystyle text
┣❒ ${l++}. ${prefix}hologram3d text
┣❒ ${l++}. ${prefix}greenneon text
┣❒ ${l++}. ${prefix}glossychrome text
┣❒ ${l++}. ${prefix}greenbush text
┣❒ ${l++}. ${prefix}metallogo text
┣❒ ${l++}. ${prefix}noeltext text
┣❒ ${l++}. ${prefix}glittergold text
┣❒ ${l++}. ${prefix}textcake text
┣❒ ${l++}. ${prefix}starsnight text
┣❒ ${l++}. ${prefix}wooden3d text
┣❒ ${l++}. ${prefix}textbyname text
┣❒ ${l++}. ${prefix}writegalacy text
┣❒ ${l++}. ${prefix}galaxybat text
┣❒ ${l++}. ${prefix}snow3d text
┣❒ ${l++}. ${prefix}birthdayday text
┣❒ ${l++}. ${prefix}goldplaybutton text
┣❒ ${l++}. ${prefix}silverplaybutton text
┣❒ ${l++}. ${prefix}freefire text
┃
┣❒「 *Owner Menu* 」
┣❒ ${l++}. >
┣❒ ${l++}. =>
┣❒ ${l++}. ${prefix}setprefix
┣❒ ${l++}. ${prefix}exif nama|author
┃
┣❒「 *Random Menu* 」
┣❒ ${l++}. ${prefix}nickepep
┣❒ ${l++}. ${prefix}darkjokes
┣❒ ${l++}. ${prefix}memeindo
┣❒ ${l++}. ${prefix}apakah
┣❒ ${l++}. ${prefix}bisakah
┣❒ ${l++}. ${prefix}kapankah
┣❒ ${l++}. ${prefix}hobby
┃
┣❒「 *Other* 」
┣❒ ${l++}. ${prefix}spamchat
┣❒ ${l++}. ${prefix}spamsms
┣❒ ${l++}. ${prefix}spamcall
┣❒ ${l++}. ${prefix}timer
┣❒ ${l++}. ${prefix}kalkulator
┗━━━━━━━━━━━━━━━`
Ardy.sendMessage(from, fs.readFileSync(`./src/bugtb.jpg`), image, {quoted: fgclink, caption: menunya, contextInfo: {"mentionedJid": [sender, ownerz]}})
break

case 'nickepep': //By Ardy
if (!isRegistered) return reply(ind.noregis())
nick = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=${zeks}`)
teks = '╔═════════════════\n'
for (let i of nick.result) {
						teks += `║*Nick* : ${i}\n╠═════════════════\n`
					}
reply(teks.trim())
break

case 'apakah':
if (!isRegistered) return reply(ind.noregis())
apakah = body.slice(1)
const apa = ['Iya','Tidak','Bisa Jadi','Coba Ulangi']
const kah = apa[Math.floor(Math.random() * apa.length)]
Ardy.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+kah, text, {quoted: mek})
break

case 'bisakah':
if (!isRegistered) return reply(ind.noregis())
bisakah = body.slice(1)
const bisa = ['Bisa','Tidak Bisa','Coba Ulangi']
const keg = bisa[Math.floor(Math.random() * bisa.length)]
Ardy.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+keg, text, {quoted: mek})
break

case 'kapankah':
if (!isRegistered) return reply(ind.noregis())
kapankah = body.slice(1)
const kapan = ["1 tahun lagi","2 tahun lagi","3 tahun lagi","1/2 tahun lagi","1 bulan lagi","2 bulan lagi","3 bulan lagi","1 minggu lagi","2 minggu lagi","1 hari lagi","2 hari lagi","3 hari lagi","kurang dari 24 jam","8 jam lagi"]
const koh = kapan[Math.floor(Math.random() * kapan.length)]
Ardy.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+koh, text, {quoted: mek})
break

case 'rate':
if (!isRegistered) return reply( ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
rate = body.slice(1)
const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const te = ra[Math.floor(Math.random() * ra.length)]
Ardy.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
await limitAdd(sender)
break

 case 'hobby':
if (!isRegistered) return reply( ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
hobby = body.slice(1)
const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
const by = hob[Math.floor(Math.random() * hob.length)]
Ardy.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
await limitAdd(sender)
break


case 'slot': //SLOT BY MANIK, THX FOR MANIK
if (!isRegistered) return reply(ind.noregis())
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            const somtoy2 = sotoy1[Math.floor(Math.random() * sotoy1.length)]
            const somtoy3 = sotoy2[Math.floor(Math.random() * sotoy2.length)]
            const somtoy4 = sotoy3[Math.floor(Math.random() * sotoy3.length)]
            Ardy.sendMessage(from, `
[ SLOTS ]\n-----------------
${somtoy2}
${somtoy}<=====
${somtoy3}
[ SLOTS ]
Keterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win
Contoh : ${somtoy4}<=====`, text, { quoted: mek })
            break

				    case 'tembak': //By Manik
if (!isRegistered) return reply(ind.noregis())
                    if (args[0] == 'udara') {
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh33}* ]`)
                    }, 12000)
                    }
                    if (args[0] == 'darat') {
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh22}* ]`)
                    }, 12000)
                    }
                    if (args[0] == 'laut') {
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh11}* ]`)
                    }, 12000)
                    }
                    break
                    
case 'suit': //By Ardy
if (!isRegistered) return reply(ind.noregis())
if (args.length == 0) return reply(`Penggunaan : ${prefix + command} [batu/gunting/kertas]\nContoh : ${prefix + command} batu`)
const eluuuu = args.join(' ')
var bot = Math.random()
if (bot < 0.34) {
bot = 'batu'
} else if (bot > 0.34 && bot < 0.67) {
bot = 'gunting'
} else {
bot = 'kertas'
}
if (eluuuu == bot) {
       reply(`Hasil Seri😕\nKamu : ${eluuuu}\nBot : ${bot}\nYah Kamu Seri😕, Coba Di Lain Waktu Ya😄`)
     } else if (eluuuu == 'batu') {
       if (bot == 'gunting') {
         reply(`Hasil Menang😎👑\nKamu : ${eluuuu}\nBot : ${bot}\nSelamat Kamu Menang👏`)
         await limitAdd(sender)
       } else {
         reply(`Kamu kalah☹️\nKamu : ${eluuuu}\nBot : ${bot}\nYah Kamu Kalah😕, Coba Di Lain Waktu Ya😄`)
       }
     } else if (eluuuu == 'gunting') {
       if (bot == 'kertas') {
         reply(`Hasil Menang😎👑\nKamu : ${eluuuu}\nBot : ${bot}\nSelamat Kamu Menang👏`)
         await limitAdd(sender)
       } else {
         reply(`Kamu kalah☹️\nKamu : ${eluuuu}\nBot : ${bot}\nYah Kamu Kalah😕, Coba Di Lain Waktu Ya😄`)
       }
     } else if (eluuuu == 'kertas') {
       if (bot == 'batu') {
         reply(`Hasil Menang😎👑\nKamu : ${eluuuu}\nBot : ${bot}\nSelamat Kamu Menang👏`)
         await limitAdd(sender)
       } else {
         reply(`Kamu kalah☹️\nKamu : ${eluuuu}\nBot : ${bot}\nYah Kamu Kalah😕, Coba Di Lain Waktu Ya😄`)
       }
     }
break

case 'tictactoe': case 'ttt': case 'ttc':
	if (!isGroup)return reply('Hanya bisa di grup')
	if (isTicTacToe(from, tictactoe)) return reply(`Masih ada game yg blum selesai`)
	if (args.length < 1) return reply(`Kirim perintah *${prefix}tictactoe* @tag`)
	if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(`Kirim perintah *${prefix}tictactoe* @tag`)
	let mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
	if (mentioned.length !== 0){
			if (mentioned[0] === sender) return reply(`Sad amat main ama diri sendiri`)
			mentions(monospace(`@${sender.split('@')[0]} menantang @${mentioned[0].split('@')[0]} untuk bermain TicTacToe\n\nKirim (Y/T) untuk bermain`), [sender, mentioned[0]], false)
			tictactoe.push({
				id: from,
				penantang: sender,
				ditantang: mentioned[0],
				TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
			})
	} else {
		reply(`Kirim perintah *${prefix}tictactoe* @tag`)
	}
	break
case 'delttt':
case 'delttc':
	if (!isGroup)return reply('Hanya bisa di grup')
	if (!isTicTacToe(from, tictactoe)) return reply(`Tidak ada sesi game tictactoe di grup ini`)
	tictactoe.splice(getPosTic(from, tictactoe), 1)
	reply(`Berhasil menghapus sesi tictactoe di grup ini`)
	break

case 'antilink':
if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply(ind.satukos())
					
					if (args[0] === '1') {
					if (isAntilink) return reply(`Antilink Sudah Aktif Sebelumya`)
					antilink.push(from)
					fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
					reply('Sukses mengaktifkan anti link group di group ini ✔️')
					Ardy.sendMessage(from, `Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (args[0] === '0') {
					if (!isAntilink) return reply('Mode Anti Link Group Sudah Disable Sebelumnya')
					antilink.splice(from)
					fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
					reply('Sukes Menonaktifkan Anti Link Group Di Group Ini ✔️')
					} else {
					    reply(ind.satukos())
					}
					break

case 'welcome':
if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply(ind.satukos())
					
					if (args[0] === '1') {
					if (isWelkom) return reply(`Welcome Sudah Aktif Sebelumnya`)
					welkom.push(from)
					fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
					reply('Sukses mengaktifkan Welcome Di Group Ini ✔️')
					} else if (args[0] === '0') {
					if (!isWelkom) return reply('Mode Welcome Sudah Disable Sebelumnya') 
					welkom.splice(from)
					fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
					reply('Sukses Menonaktifkan Welcome Di Grup Ini✔️')
					} else {
					reply(ind.satukos())
					}
					break

case 'listonline':
        		if (!isGroup) return reply(ind.groupo())
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(Ardy.chats.get(ido).presences), Ardy.user.jid]
			    Ardy.sendMessage(from, '*CIE NYIMAK AJE LU*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n` + `\n*Kang Minyak*`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break
case 'tagall':
					if (!isGroup) return reply(mess.OnlyGrup)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `=> @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break

                    case 'getgrup': 
                    case 'getgroup': 
                    case 'getg':
                    case 'gruplist':
                    case 'listgrup':
                    case 'grouplist':
                    case 'listgroup':
			         ingfo = await getGroup(totalchat)
				     let txt = `*List Group*\nJumlah Grup: ${ingfo.length}\n\n`
				     for (let i = 0; i < ingfo.length; i++){
					txt += `Nama grup : ${ingfo[i].subject}\nID grup : ${ingfo[i].id}\nDibuat : ${moment(`${ingfo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\nJumlah Peserta : ${ingfo[i].participants.length}\n\n`
				    }
				    reply(txt)
	                break
case 'searchmsg':
case 'searchmessage':
if (!q) return reply('Error')
reply(mess.wait)
 xtext = args.join(' ')
                cond = xtext.split(" ")
                 a = await Ardy.searchMessages(xtext, from, 10, 1)// count 10 
                 fox = '*「 Message Search 」*\n\n'
                num = 0
                for (j of a.messages){
                    num += 1
                    if (j.message.conversation) {
                        if (j.key.fromMe){ 
                            fox += num+'. Sender: '+Ardy.user.jid+'\n    Msg: '+j.message.conversation+'\n    MsgID: '+j.key.id+'\n    Type: conversation\n\n'
                        }else{
                            fox += num+'. Sender: '+j.key.participant+'\n    Msg: '+j.message.conversation+'\n    MsgID: '+j.key.id+'\n    Type: conversation\n\n'
                        } 
                    }
                    else if (j.message.extendedTextMessage){
                        if (j.key.fromMe){ 
                            fox += num+'. Sender: '+Ardy.user.jid+'\n    Msg: '+j.message.extendedTextMessage.text+'\n    MsgID: '+j.key.id+'\n    Type: extendedTextMessage\n\n'
                        }else{
                            fox += num+'. Sender: '+j.key.participant+'\n    Msg: '+j.message.extendedTextMessage.text+'\n    MsgID: '+j.key.id+'\n    Type: extendedTextMessage\n\n'
                        } 
                    }
                }
                reply(fox)
                break

case 'rptag':
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply("Gada yang di tag")
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
teks = `*Repeat Tag*\n${q}`
teks += "\n\n"
members_id = []
for (let z = 0; z < 2000; z++) {
teks += ` @${mentioned[0].split("@")[0]}`
members_id.push(mentioned[0])
}
mentions(teks, members_id, true)
break

case 'add':
			if (!isGroup) return reply(mess.OnlyGrup)
			if (!isGroupAdmins) return reply(mess.GrupAdmin)
			if (!isBotGroupAdmins) return reply(mess.BotAdmin)
			if (args[0].startsWith('08')) return reply('Gunakan 62!!')
				if (args.length < 1) return reply(`Usage ${prefix}add nomor`)
				try {
				num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
				Ardy.groupAdd(from, [num])
				reply(`Sukses`)
				} catch (e) {
				console.log('Error :', e)
				reply('Gagal Menambah Target, Mungkin Karena Di Private')
				}
				break
			case 'kick':
			if (!isGroup) return reply(mess.OnlyGrup)
			if (!isGroupAdmins) return reply(mess.GrupAdmin)
			if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (args.length < 1) return reply(`Usage ${prefix}kick nomor|tag`)
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						Ardy.groupRemove(from, mentioned[i])
                    }
                    Ardy.sendMessage(from, 'bye', text, {quoted: fgclink})
                } else {
                    Ardy.groupRemove(from, args[0] + '@s.whatsapp.net')
                    Ardy.sendMessage(from, 'bye', text, {quoted:fgclink})
                }
				break
case 'promote':
					if (!isGroup) return reply(mess.OnlyGrup)
					if (!isGroupAdmins) return reply(mess.GrupAdmin)
                   if (!isBotGroupAdmins) return reply(mess.BotAdmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag targernya!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						Ardy.groupMakeAdmin(from, mentioned)
					} else {
						reply(`Sukses`)
						Ardy.groupMakeAdmin(from, mentioned)
					}
					break
case 'demote':
				if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
                   if (!isBotGroupAdmins) return reply(mess.BotAdmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag targetnya!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						Ardy.groupDemoteAdmin(from, mentioned)
					} else {
						reply(`Sukses`)
						Ardy.groupDemoteAdmin(from, mentioned)
					}
					break

case 'listadmin':
if (!isGroup) return reply(ind.groupo())
teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break 

case 'getpp': //Nyolong Dari Itsfachri
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
linkpp = await Ardy.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
buffer = await getBuffer(linkpp)
Ardy.sendMessage(from, buffer, image, {caption: "Nih", quoted: mek })
} else if (mek.message.extendedTextMessage.contextInfo.mentionedJid === null || mek.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
mberr = mek.message.extendedTextMessage.contextInfo.participant
linkpp = await Ardy.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
buffer = await getBuffer(linkpp)
Ardy.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
} else if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
mberr = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
linkpp = await Ardy.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
buffer = await getBuffer(linkpp)
Ardy.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
}
break

case 'getpic': //Nyolong Dari Itsfachri
					if (args.length < 1) return 
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Siap Boss')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
						try {
						pp = await Ardy.getProfilePicture(mentioned)
						buffer = await getBuffer(pp)
						
						Ardy.sendMessage(from, buffer, image, {quoted: mek, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					} catch (e) {
					await Ardy.sendMessage(from, buffer, image, {quoted: mek, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					}
				break

case 'group': case 'grup': case 'gc':
if (!isGroup) return reply(ind.groupo())
if (!isGroupAdmins) return reply(ind.admin())
if (!isBotGroupAdmins) return reply(ind.badmin())

if (!q) return
if (args[0] === 'buka') {
Ardy.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'tutup') {
await Ardy.groupSettingChange(from, GroupSettingChange.messageSend, true)
} else {
reply(`Penggunaan ${prefix + command} [tutup/buka]\nContoh : ${prefix + command} tutup`)
}
break

case 'linkgrup':
				case 'linkgroup':
				case 'linkgc':
				if (!isGroup) return reply(mess.OnlyGrup)
                   if (!isBotGroupAdmins) return reply(mess.BotAdmin)
					linkgc = await Ardy.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink Group *${groupName}*`
					Ardy.sendMessage(from, yeh, text, { quoted: mek })
					break



case 'nulis': //By Ardy, Di Bantu Oleh MFarelS, Dan Imagemagick
if (!isRegistered) return reply(ind.noregis())
if (args.length == 0) return reply(`Penggunaan : ${prefix + command} teks\nContoh : ${prefix + command} Ardy`)
tekss = body.slice(7)
reply(ind.wait())
let d = new Date
let tgl = d.toLocaleDateString('id-Id')
let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
spawn('convert', [
'./src/nulis/images/magernulis1.jpg',
'-font',
'./src/nulis/font/Zahraaa.ttf',
'-size',
'1024x784',
'-pointsize',
'20',
'-interline-spacing',
'1',
'-annotate',
'+806+78',
hari,
'-font',
'./src/nulis/font/Zahraaa.ttf',
'-size',
'1024x784',
'-pointsize',
'18',
'-interline-spacing',
'1',
'-annotate',
'+806+102',
tgl,
'-font',
'./src/nulis/font/Zahraaa.ttf',
'-size',
'1024x784',
'-pointsize',
'20',
'-interline-spacing',
'-7.5',
'-annotate',
'+365+102',
pushname,
'-font',
'./src/nulis/font/Zahraaa.ttf',
'-size',
'1024x784',
'-pointsize',
'20',
'-interline-spacing',
'-7.5',
'-annotate',
'+355+122',
role,
'-font',
'./src/nulis/font/Zahraaa.ttf',
'-size',
'960x1280',
'-pointsize',
'23',
'-interline-spacing',
'3',
'-annotate',
'+344+145',
tekss,
'./src/nulis/hasil.jpg'
])
.on('error', () => reply("Maaf terjadi kesalahan"))
.on('exit', () => {
Ardy.sendMessage(from, fs.readFileSync(`./src/nulis/hasil.jpg`), image, {caption: 'Jangan Males Pak', quoted: mek})
})
break

//Owner
case 'setprefix':
                if (!isRegistered) return reply(ind.noregis())
                if (!isOwner) return reply(ind.ownerb())
                if (args.length < 1) return
                prefix = args[0]
                ArdyStore.prefix = prefix
                fs.writeFileSync('./src/settings.json', JSON.stringify(ArdyStore, null, '\t'))
                reply(`Sukses Mengubah Prefix Menjadi : ${prefix}`)
                break

case 'exif':
if (!isOwner) return reply(ind.ownerb())
const namaPack = q.split('|')[0]
const authorPack = q.split('|')[1]
exif.create(namaPack, authorPack)
await reply(ind.succes())
break

case 'owner':
case 'developer':
case 'creator':
if (!isRegistered) return reply(ind.noregis())
const vcard = 'BEGIN:VCARD\n' 
              + 'VERSION:3.0\n' 
              + `FN:${NamaOwner}\n`
              + `ORG: Owner ${NamaBot};\n`
              + `TEL;type=CELL;type=VOICE;waid=${ArdyStore.ownerNumber}:+${ArdyStore.ownerNumber}\n`
              + 'END:VCARD'
Ardy.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
.then((res) => Ardy.sendMessage(from, 'Nih kontak ownerku >_<', text, {quoted: res}))
break

case 'timer': //By Manik
				if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam")}
				setTimeout( () => {
				reply("Waktu habis")
				}, timer)
				break

//Other

case 'spamchat': //Case By Ardy
if (!isRegistered) return reply(ind.noregis())
if (args.length == 0) return reply(`Penggunaan : ${prefix + command} nomor pesan jumlah\nContoh : 6287863200063 Test 15`)
nomor = args[0]
pesan = args[1]
total = args[2]
ssk = `*[SUKSES]*
Berhasil Send ${total} Chat Ke @${nomor}
Pesan : ${pesan}
Jumlah : ${total}
Target : @${nomor}`
for ( let i = 0 ; i < total; i++) {
Ardy.sendMessage(nomor+'@s.whatsapp.net', pesan, text)
}
Ardy.sendMessage(from, ssk, text, {quoted: mek, thumbnail: './src/bugtb.jpeg', contextInfo: {"mentionedJid": [nomor+'@s.whatsapp.net']}})
break

case 'spamcall':
if (!isRegistered) return reply(ind.noregis())
reply(mess.wait)
call = `${body.slice(10)}`
anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${call}`, {method: 'get'})
Ardy.sendMessage(from, `${anu.result.logs}`, text, {quoted: mek})
await limitAdd(sender)
break

case 'spamsms':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (args.length < 1) return reply(`text mana broh?\ncontoh : ${prefix + command} 085---`)
reply('Angzing Nangis Anak Orang')
nomor = args[0]
await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=${lolkey}&nomor=${nomor}`)
await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=${lolkey}&nomor=${nomor}`)
await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=${lolkey}&nomor=${nomor}`)
await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=${lolkey}&nomor=${nomor}`)
await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=${lolkey}&nomor=${nomor}`)
await fetchJson(`http://api.lolhuman.xyz/api/sms/spam6?apikey=${lolkey}&nomor=${nomor}`)
await fetchJson(`http://api.lolhuman.xyz/api/sms/spam7?apikey=${lolkey}&nomor=${nomor}`)
await fetchJson(`http://api.lolhuman.xyz/api/sms/spam8?apikey=${lolkey}&nomor=${nomor}`)
reply(ind.succes)
await limitAdd(sender)
break

		case 'kalkulator':
				
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`Penggunaan : ${prefix + command} Angka\nContoh : ${prefix + command} 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				const Math_js = require('mathjs')
				mtk = body.slice(12)
				if (typeof Math_js.evaluate(mtk) !== "number") {
					reply(`"${mtk}", Kesalahan!\nPenggunaan : ${prefix + command} Angka\nContoh : ${prefix + command} 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				} else {
					reply(`*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
				await limitAdd(sender)
				break

//------------------< Premium >-------------------
case 'addprem':
if (!isOwner) return reply(ind.ownerb())
adprem = args[0]+'@s.whatsapp.net'
premium.push(adprem)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply(`BERHASIL MENAMBAHKAN USER PREMIUM`)
break

case 'delprem':
if (!isOwner) return reply(ind.ownerb())
dprem = args[0]+'@s.whatsapp.net'
premium.splice(dprem, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply(`Berhasil Menghapus wa.me/${dprem.split("@")[0]} Dari Daftar Premium`)
break

case 'listprem':
if (!isRegistered) return reply(ind.noregis())
teks = '*List Premium* :\n\n'
for (let pem of premium) {
teks += `- @${pem.split("@")[0]}\n`
}
teks += `\n*Total* : ${premium.length} User`
mentions(teks.trim(), premium, true)
break

/*====================================[BATAS]====================================*/

//Maker
                //Text Pro Me
                case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
		if (!isRegistered) return reply(ind.noregis())
                     if (args.length == 0) return reply(`Penggunaan : ${prefix + command} teks\nContoh : ${prefix + command} Ardy`)
	                reply(ind.wait())
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    Ardy.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
case 'sponsburn':
if (!isRegistered) return reply(ind.noregis())
if (args.length == 0) return reply(`Penggunaan : ${prefix + command} teks\nContoh : ${prefix + command} Ardy`)
paper = body.slice(11)
buff = await getBuffer(`http://zekais-api.herokuapp.com/sbburn?text=${paper}`)
reply(ind.wait())
Ardy.sendMessage(from, buff, image, {quoted: mek})
break

                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
		if (!isRegistered) return reply(ind.noregis())
               cf = `${body.slice(8)}`
                    txt1 = cf.split("/")[0];
                    txt2 = cf.split("/")[1];
                     if (args.length == 0) return reply(`Penggunaan : ${prefix + command} teks\nContoh : ${prefix + command} Ardy`)
	                reply(ind.wait())
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
                    Ardy.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break

                    // Photo Oxy
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
		if (!isRegistered) return reply(ind.noregis())
                     if (args.length == 0) return reply(`Penggunaan : ${prefix + command} teks\nContoh : ${prefix + command} Ardy`)
	                reply(ind.wait())
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    Ardy.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'tiktok':
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
		if (!isRegistered) return reply(ind.noregis())
		            cf = `${body.slice(8)}`
                    txt1 = cf.split("/")[0];
                    txt2 = cf.split("/")[1];
                     if (args.length == 0) return reply(`Penggunaan : ${prefix + command} teks\nContoh : ${prefix + command} Ardy`)
	                reply(ind.wait())
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
                    Ardy.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break

                //Ephoto 360
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
		if (!isRegistered) return reply(ind.noregis())
                     if (args.length == 0) return reply(`Penggunaan : ${prefix + command} teks\nContoh : ${prefix + command} Ardy`)
	                reply(ind.wait())
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    Ardy.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break

//Creator By Lolhuman Team
                case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'attp':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Penggunaan : ${prefix + command} teks\nContoh : ${prefix + command} Ardy`)
                    teksnya = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/${command}?apikey=${lolkey}&text=${teksnya}`)
                    Ardy.sendMessage(from, ini_buffer, sticker, { quoted: mek})
                    break
                    case 'attp':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Penggunaan : ${prefix + command} teks\nContoh : ${prefix + command} Ardy`)
                    teks = args.join(" ")
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/attp?apikey=${lolkey}&text=${teks}`)
                    Ardy.sendMessage(from, buffer, sticker, { quoted: mek})
                    break

case 'patrick':
if (!isRegistered) return reply(ind.noregis())
ran = getRandom('.webp')
ranp = getRandom('.png')
data = fs.readFileSync('./lib/patrick.js')
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasil = await getBuffer(randKey.result)
exec(`wget ${randKey.result} -O ${ranp} && ffmpeg -i ${ranp} ${ran} && webpmux -set exif './sticker/data.exif' ${ran} -o ${ran}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply('Gagal :V')
						Ardy.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
						fs.unlinkSync(ran)
					})
//Ardy.sendMessage(from, hasil, sticker)
break

/*====================================[BATAS]====================================*/



/*====================================[PENAMBAHAN KE BAWAH]====================================*/
								
//Vn
case 'addvn':
if (!isRegistered) return reply(ind.noregis())
if (!isQuotedAudio) return reply(`Reply Audio!!!`)
if (audionye.length == 40) return reply(`Audio Full.\nMohon Hubungi Owner Untuk Reset Audio`)
if (!q) return reply(`Reply Nama Audio!!`)
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await Ardy.downloadMediaMessage(boij)
audionye.push(`${q}`)
fs.writeFileSync(`./add/audio/${q}.mp3`, delb)
fs.writeFileSync('./add/audio.json', JSON.stringify(audionye))
reply(`Sukses Menambahkan Audio Dengan Nama : ${q}`)
break

case 'delvn':
if (!isOwner) return reply(ind.ownerb())
if (!isRegistered) return reply(ind.noregis())
if (args.length == 0) return reply('reply nama audio!!')
try {
nmn = body.slice(7)
wanu = audionye.indexOf(nmn)
audionye.splice(wanu, 1)
fs.unlinkSync(`./add/audio/${nmn}.mp3`)
reply(ind.succes())
} catch (err) {
console.log(err)
reply(mess.error.api)
}
break

case 'getvn': //Fix By Itsfachri 
if (!isRegistered) return reply(ind.noregis())
if (!q) return reply(`nama audio?`)
baper = fs.readFileSync(`./add/audio/${q}.mp3`)
Ardy.sendMessage(from, baper, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt: true})
break

case 'listvn':
if (!isRegistered) return reply(ind.noregis())
teks = '*List Vn* :\n\n'
for (let namavn of audionye) {
teks += `- ${namavn}\n`
}
teks += `\n*Total Vn* : ${audionye.length}`
Ardy.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: { "mentionedJid": audionye } })
break

//Sticker
case 'addsticker':
if (!isRegistered) return reply(ind.noregis())
if (!isQuotedSticker) return reply('reply sticker nya!!')
if (!q) return reply('reply nama sticker!!')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await Ardy.downloadMediaMessage(boij)
setiker.push(q)
fs.writeFileSync(`./add/sticker/${q}.webp`, delb)
fs.writeFileSync('./add/sticker.json', JSON.stringify(setiker))
reply(`Sukses Menambahkan Sticker Dengan Nama : ${q}`)
break

case 'delsticker':
if (!isOwner) return reply(ind.ownerb())
if (!isRegistered) return reply(ind.noregis())
if (args.length == 0) return reply('reply nama audio!!')
try {
nmn = body.slice(12)
wanu = audionye.indexOf(nmn)
setiker.splice(wanu, 1)
fs.unlinkSync(`./add/sticker/${nmn}.webp`)
reply(ind.succes())
} catch (err) {
console.log(err)
reply(mess.error.api)
}
break

case 'getsticker':
if (!isRegistered) return reply(ind.noregis())
if (!q) return reply(`nama sticker?`)
buffer = fs.readFileSync(`./add/sticker/${q}.webp`)
Ardy.sendMessage(from, buffer, sticker, {quoted: mek})
break

case 'liststicker':
if (!isRegistered) return reply(ind.noregis())
teks = '*List Sticker* :\n\n'
for (let namastc of setiker) {
teks += `- ${namastc}\n`
}
teks += `\n*Total Sticker* : ${setiker.length}`
Ardy.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: { "mentionedJid": setiker } })
break

//Image
case 'addimage':
if (!isRegistered) return reply(ind.noregis())
if (!isQuotedImage) return reply('reply imagenya!!')
if (!q) return reply('Nama imagenya?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await Ardy.downloadMediaMessage(boij)
gambarnye.push(`${q}`)
fs.writeFileSync(`./add/image/${q}.jpeg`, delb)
fs.writeFileSync('./add/image.json', JSON.stringify(gambarnye))
Ardy.sendMessage(from, `Sukses Menambahkan Image Dengan Nama : ${q}`, MessageType.text, { quoted: mek })
break

case 'delimage':
if (!isRegistered) return reply(ind.noregis())
if (!isOwner) return reply(ind.ownerb())
try {
nmm = body.slice(10)
wanu = videonye.indexOf(nmm)
gambarnye.splice(wanu, 1)
fs.unlinkSync(`./add/image/${nmm}.jpeg`)
reply(ind.succes())
} catch (err) {
console.log(err)
reply(mess.error.api)
}
break

case 'getimage':
if (!isRegistered) return reply(ind.noregis())
if (!q) return reply(`nama image?`)
buffer = fs.readFileSync(`./add/image/${q}.jpeg`)
Ardy.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${q}.jpeg` })
break

case 'listimage':
if (!isRegistered) return reply(ind.noregis())
teks = '*List Image :*\n\n'
for (let awokwkwk of gambarnye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${gambarnye.length}*`
Ardy.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": gambarnye } })
break

//Video
case 'addvideo':
if (!isRegistered) return reply(ind.noregis())
if (!q) return reply('Nama videonya apa su?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await Ardy.downloadMediaMessage(boij)
videonye.push(`${q}`)
fs.writeFileSync(`./add/video/${q}.mp4`, delb)
fs.writeFileSync('./add/video.json', JSON.stringify(videonye))
Ardy.sendMessage(from, `Sukses Menambahkan Video Dengan Nama : ${q}`, MessageType.text, { quoted: mek })
break

case 'delvideo':
if (!isRegistered) return reply(ind.noregis())
if (!isOwner) return reply(mess.only.ownerB)
try {
nmm = body.slice(10)
wanu = videonye.indexOf(nmm)
videonye.splice(wanu, 1)
fs.unlinkSync(`./add/video/${nmm}.mp4`)
reply(ind.succes())
} catch (err) {
console.log(err)
reply(mess.error.api)
}
break

case 'getvideo':
if (!isRegistered) return reply(ind.noregis())
if (!q) return reply('nama video nya apa?')
buffer = fs.readFileSync(`./add/video/${q}.mp4`)
Ardy.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek})
break

case 'listvideo':
if (!isRegistered) return reply(ind.noregis())
teks = '*List Video* :\n\n'
for (let namavid of videonye) {
teks += `- ${namavid}\n`
}
teks += `\n*Total* : ${videonye.length}`
Ardy.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: { "mentionedJid": videonye } })
break

//Convert
            case 'sticker':
            case 'stiker':
            case 's':
            case 'stickergif':
            case 'sgif':
                if (!isRegistered) return reply(ind.noregis())
                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    let media = await Ardy.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									Ardy.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
									limitAdd(sender)
                                    fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                    let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    let media = await Ardy.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					reply(mess.wait)
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									Ardy.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
									limitAdd(sender)
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                } else {
                    reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
                }
                break

case 'stickerwm':
case 'swm':
case 'take':
case 'takesticker':
case 'takestick':
                if (!isPremium) return reply(ind.nopremi())
                if (args.length < 2) return reply(`Penggunaan ${prefix + command} nama|author\nContoh : ${prefix + command} Ardy Bot|By Ardy Store`)
                let packname1 = q.split('|')[0]
                let author1 = q.split('|')[1]
                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    let media = await Ardy.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					exif.create(packname1, author1, `stickwm_${sender}`)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									Ardy.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
                                    fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
                                    fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                    let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    let media = await Ardy.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					exif.create(packname1, author1, `stickwm_${sender}`)
                    reply(mess.wait)
						await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									Ardy.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
                                    fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                } else if (isQuotedSticker) {
                    let encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    let media = await Ardy.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                    exif.create(packname1, author1, `takestick_${sender}`)
                    exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                        if (error) return reply(mess.error.api)
                        Ardy.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
                        fs.unlinkSync(media)
                        fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
                    })
                }else {
                    reply(`Penggunaan ${prefix + command} nama|author\nContoh : ${prefix + command} Ardy Bot|By Ardy Store`)
                }
                break

					case 'detikvn':
					if (!isRegistered) return reply(ind.noregis())
                    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Ardy.downloadAndSaveMediaMessage(encmedia)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(media)
			        Ardy.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
				    fs.unlinkSync(media)
				    break
				    case 'detikvideo':
				    if (!isRegistered) return reply(ind.noregis())
				    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Ardy.downloadAndSaveMediaMessage(encmedia)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(media)
				    Ardy.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
			        fs.unlinkSync(media)
				    break

case 'hode':
if (!isRegistered) return reply(ind.noregis())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Ardy.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Ardy.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: fgclink})
						fs.unlinkSync(ran)
					})
				break
         case 'hode-v':
         if (!isRegistered) return reply(ind.noregis())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Ardy.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Ardy.sendMessage(from, hah, audio, {mimetype: 'video/mp4', quoted: fgclink})
						fs.unlinkSync(ran)
					})
				break
case 'reverse':
if (!isRegistered) return reply(ind.noregis())
	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

	media = await Ardy.downloadAndSaveMediaMessage(encmedia)

	ran = getRandom('.mp3')

	exec(`ffmpeg -i ${media} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {

fs.unlinkSync(media)

if (err) return reply('Error!')

res = fs.readFileSync(ran)

Ardy.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: false, quoted: mek})

fs.unlinkSync(ran)

	})

break

case 'volume':
if (!isRegistered) return reply(ind.noregis())
	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

	media = await Ardy.downloadAndSaveMediaMessage(encmedia)

	ran = getRandom('.mp3')

	exec(`ffmpeg -i ${media} -filter:a "volume=${args[0]}" ${ran}`, (err, stderr, stdout) => {

fs.unlinkSync(media)

if (err) return reply('Error!')

res = fs.readFileSync(ran)

Ardy.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: false, quoted: mek})

fs.unlinkSync(ran)

	})

break

case 'budek':
if (!isRegistered) return reply(ind.noregis())
	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

	media = await Ardy.downloadAndSaveMediaMessage(encmedia)

	ran = getRandom('.mp3')

	exec(`ffmpeg -i ${media} -filter:a "volume=50" ${ran}`, (err, stderr, stdout) => {

fs.unlinkSync(media)

if (err) return reply('Error!')

res = fs.readFileSync(ran)

Ardy.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: false, quoted: mek})

fs.unlinkSync(ran)

	})

break

case 'imut':
if (!isRegistered) return reply(ind.noregis())
	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

	media = await Ardy.downloadAndSaveMediaMessage(encmedia)

	ran = getRandom('.mp3')

	exec(`ffmpeg -i ${media} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, (err, stderr, stdout) => {

fs.unlinkSync(media)

if (err) return reply('Error!')

res = fs.readFileSync(ran)

Ardy.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: false, quoted: mek})

fs.unlinkSync(ran)

	})

break
case 'nightcore':
if (!isRegistered) return reply(ind.noregis())
if (!isQuotedAudio) return reply('Reply audio nya om')
reply(mess.wait)
encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
media = await Ardy.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*${args[0]} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
Ardy.sendMessage(from, hah, audio, { mimetype: "audio/mp4", ptt: false, quoted: mek})
fs.unlinkSync(ran)
})
break 
case 'bass': 
if (!isRegistered) return reply(ind.noregis())
req = q

encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

	media = await Ardy.downloadAndSaveMediaMessage(encmedia)

random = getRandom('.mp3')

exec(`ffmpeg -i ${media} -af equalizer=f=${req}:width_type=o:width=2:g=20 ${random}`, (err, stderr, stdout) => {

fs.unlinkSync(media)

if (err) return reply('Error!')

res = fs.readFileSync(random)

Ardy.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: false, quoted: mek})

fs.unlinkSync(random)

})

break

case 'vibra': 
if (!isRegistered) return reply(ind.noregis())
var req = q

encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

	media = await Ardy.downloadAndSaveMediaMessage(encmedia)

ran = getRandom('.mp3')

exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {

fs.unlinkSync(media)

if (err) return reply('Error!')

res = fs.readFileSync(ran)

Ardy.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: false, quoted: mek})

fs.unlinkSync(ran)

})

break

case 'trigger':
if (!isRegistered) return reply(ind.noregis())
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

	media = await Ardy.downloadAndSaveMediaMessage(encmedia)

ran = getRandom('.mp3')

exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {

fs.unlinkSync(media)

if (err) return reply('Error!')

res = fs.readFileSync(ran)

Ardy.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: false, quoted: mek})

fs.unlinkSync(ran)

})

break

case 'tempo':
if (!isRegistered) return reply(ind.noregis())
 var req = q

encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

	media = await Ardy.downloadAndSaveMediaMessage(encmedia)

ran = getRandom('.mp3')

exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {

fs.unlinkSync(media)

if (err) return reply('Error!')

res = fs.readFileSync(ran)

Ardy.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: false, quoted: mek})

fs.unlinkSync(ran)

})

break

case 'robot':
if (!isRegistered) return reply(ind.noregis())
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

	media = await Ardy.downloadAndSaveMediaMessage(encmedia)

ran = getRandom('.mp3')

exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {

fs.unlinkSync(media)

if (err) return reply('Error!')

res = fs.readFileSync(ran)

Ardy.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: true, quoted: mek})

fs.unlinkSync(ran)

})

break
case 'vibrav':     
if (!isRegistered) return reply(ind.noregis())
var req = args.join(' ')            
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Ardy.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Ardy.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: mek })
})
					break
case 'triggervid':
if (!isRegistered) return reply(ind.noregis())
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Ardy.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=3:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
Ardy.sendMessage(from, hah, audio, {mimetype: 'video/mp4', quoted: mek})
fs.unlinkSync(ran)
})
break
case 'tupai':
if (!isRegistered) return reply(ind.noregis())
if (!isQuotedAudio) return reply('Reply audio nya oom')
reply(mess.wait)
encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
media = await Ardy.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
Ardy.sendMessage(from, hah, audio,{ mimetype: "audio/mp4", ptt: true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'blub':
if (!isRegistered) return reply(ind.noregis())
if (!isQuotedAudio) return reply('Reply audio nya om')
reply(mess.wait)
encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
media = await Ardy.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
Ardy.sendMessage(from, hah, audio,{ mimetype: "audio/mp4", ptt: true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'gemuk':
if (!isRegistered) return reply(ind.noregis())
if (!isQuotedAudio) return reply('Reply audio nya om')
reply(mess.wait)
encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
media = await Ardy.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
Ardy.sendMessage(from, hah, audio,{ mimetype: "audio/mp4", ptt: true, quoted: mek})
fs.unlinkSync(ran)
 })
  break
				case 'ghost':
				if (!isRegistered) return reply(ind.noregis())
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
	             reply(mess.wait)
					encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					media = await Ardy.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						 Ardy.sendMessage(from, hah, audio,{ mimetype: "audio/mp4", ptt: true, quoted: mek})
						fs.unlinkSync(ran)
					    })
				       break
case 'earrape':
if (!isRegistered) return reply(ind.noregis())
            if (isQuotedAudio || isQuotedVideo || isQuotedDocument || args.length < 1){
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Ardy.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -af volume=${args[0]} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Ardy.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek, sendEphemeral: true})
            fs.unlinkSync(ran)
            })
            } else {
            	reply(mess.wrongFormat)
            }
            break
case 'apulsator':
if (!isRegistered) return reply(ind.noregis())
            if (isQuotedAudio || isQuotedVideo || isQuotedDocument){
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Ardy.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -filter_complex "apulsator=mode=sine:hz=3:width=0.1:offset_r=0" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Ardy.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek, sendEphemeral: true})
            fs.unlinkSync(ran)
            })
            } else {
            	reply(mess.wrongFormat)
            }
            break
case 'tomp3':
case 'tovn':
if (!isRegistered) return reply(ind.noregis())
	if (!isQuotedAudio || isQuotedVideo) return reply('Reply audio/video nya om')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Ardy.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal mengkonversi audio ke ptt')
						topt = fs.readFileSync(ran)
						Ardy.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', duration: 999999999, quoted: mek, ptt:false})
						})
						break
case 'fast-v':
if (!isRegistered) return reply(ind.noregis())
            if (!isQuotedVideo) return reply('Reply videonya!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Ardy.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Ardy.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'slow-v':
    if (!isRegistered) return reply(ind.noregis())
            if (!isQuotedVideo) return reply('Reply videonya!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Ardy.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Ardy.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'reverse-v':
    if (!isRegistered) return reply(ind.noregis())
            if (!isQuotedVideo) return reply('Reply videonya!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Ardy.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Ardy.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
case 'fast':
if (!isRegistered) return reply(ind.noregis())
            if (!isQuotedVideo) return reply('Reply videonya!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Ardy.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Ardy.sendMessage(from, buffer453, audio, { mimetype: 'video/mp4', ptt: true, quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':
    if (!isRegistered) return reply(ind.noregis())
            if (!isQuotedVideo) return reply('Reply videonya!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Ardy.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Ardy.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
            fs.unlinkSync(ran)
            })
            break
					
				default:
				if (budy.includes(`@6287863200063`)) {
				reply('Jangan Tag Owner Gw Asu😼')
				Ardy.sendMessage(from, fs.readFileSync(`./src/tag.webp`), sticker)
				}
				if (budy.startsWith('@verify')) {
				if (isRegistered) return reply(ind.rediregis())
				const serialUser = createSerial(20)
				// let d = new Date
				// let tgl = d.toLocaleDateString('id-Id')
				// let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
				try {
				ppuser = await Ardy.getProfilePicture(`${sender.split("@")[0]}@c.us`)
				} catch {
				ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				addRegisteredUser(sender, pushname, time, serialUser)
				dpter = `
┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│ *「 VERIFICATION SUKSES 」*
│ *Terimakasih Sudah*
│ *Mendaftarkan Diri*
│ *Dalam Database*
└┬────────────┈ ⳹
┌┤◦➛ *Nama :* ${pushname}
││◦➛ *Nomor :* @${sender.split('@')[0]}
││◦➛ *SN :* ${serialUser}
││◦➛ *Total Pengguna :* ${_registered.length} Orang
││◦➛ *Status :* ☑️ Terverifikasi
│└────────────┈ ⳹
│ *Waktu Pendaftaran*
│ *Tanggal :* ${tampilTanggal}
│ *Jam :* ${wita}
├───────────────
│ *Silahkan Ketik ${prefix}rules*
│ *Untuk Melanjutkan Pengguna*
└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
*「 ${NamaBot} 」*`
buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${pushname}&member=${_registered.length}&seri=${serialUser}&pp=${ppuser}&bg=${imgibb}`)
Ardy.sendMessage(from, buff, MessageType.image, {quoted: mek, caption: dpter, contextInfo: {"mentionedJid": [sender]}})
				}

					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
