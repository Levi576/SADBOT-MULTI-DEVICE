let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Sad-Bot
*✉️ Nama RL* : levi
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 7 desember 2007
*🎨 Umur* : 14
*🧮 Kelas* : 7
*🧩 Hobby* : Nonton Hanime, Chatting, suka nonton hentai
*💬 Sifat* : pendiam, satir, Kanjut, Prik, Pedofil
*🗺️ Tinggal* : Indo, berau, kaltim, suaran
*❤️ Suka* : warnah kuning & biru, Hanime, waifu, loli, trap, furry, kucing
*💔 Benci* : autis, anak epep, seleb

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : private
*🇫  Facebook* : levi adnansyah
*🏮 Chanel Youtube* : private
*🐈 Github:* Levi576

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
