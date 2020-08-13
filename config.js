// config.js
export default {
  site: {
    title: 'Faure Josmy'
  },
  bucket: {
    slug: process.env.COSMIC_BUCKET || 'da82e570-dc74-11ea-800e-f7a11a9358de',
    media_url: 'https://cosmicjs.com/uploads',
    read_key: process.env.COSMIC_READ_KEY || 'p8Fbqdi4i67iSC6gcEPGsegH1dkOdFIrCeUjCcWbYbtXdpUDQe',
    write_key: process.env.COSMIC_WRITE_KEY || '7BfIJcXKencbL83rZVytIUsSFA3hGsoMHKqvCVlcfJdTvj84ic'
  },
}
