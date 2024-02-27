import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw `*[❗] 𝖠𝖽𝖽 𝖠𝗉𝗉 𝖭𝖺𝗆𝖾.*`;
  try {    
    const searchA = await search(text);
    const data5 = await download(searchA[0].id);
    let response = `*N𝖺𝗆𝖾:* ${data5.name}\n*Package:* ${data5.package}\n\ninstagram.com/amin1_tech1igsh=YzljYTk1ODg3Zg==‎‏ 🐋`
    await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 100) {
      return await conn.sendMessage(m.chat, {text: '*[ ⛔ ] الحجم اكبر من 100 ميغا لا يمكن ارسالة لحماية البوت من البان.*'}, {quoted: m});
    }
    await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
  } catch {
    throw `*[❗] Error, no se encontrarón resultados para su búsqueda.*`;
  }    
};
handler.command = /^(apk)$/i;
export default handler;
