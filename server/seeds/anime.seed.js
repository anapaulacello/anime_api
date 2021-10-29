const mongoose = require('mongoose');
const Anime = require("../app/api/models/Anime.model");

const dotenv = require('dotenv');
dotenv.config();

const anime = [
    {
        name: 'Dororo',
        studio: 'Mappa',
        poster: 'https://wallpapercave.com/wp/wp3904397.jpg',
        year: 2019,
    },
    {
        name: 'Shingeki no Kyojin',
        studio: 'Mappa',
        poster: 'https://www.egames.news/__export/1632604131045/sites/debate/img/2021/09/25/cuxl_es_el_orden_para_ver_los_capxtulos_de_shingeki_no_kyojin.jpg_423682103.jpg',
        year: 2001,
    },
    {
        name: 'Jujutsu Kaisen',
        studio: 'Mappa',
        poster: 'https://static.wikia.nocookie.net/jujutsu-kaisen/images/f/f6/JJK_New_Key_Visual.jpg',
        year: 2020,
    },
    {
        name: 'Evangelion',
        studio: 'Gainax',
        poster: 'https://i.blogs.es/0bbe7c/netflix-neon-genesis-evangelion-espinof-ver-en-orden/840_560.jpg',
        year: 1995,
    },
    {
        name: 'Kimetsu no Yaiba',
        studio: 'Ufotable',
        poster: 'https://areajugones.sport.es/wp-content/uploads/2021/10/kimetsu-no-yaiba-latino.jpg',
        year: 2018,
    },
    {
        name: 'Haikyu',
        studio: 'I.G.',
        poster: 'https://static.wikia.nocookie.net/haikyuu/images/8/83/Haikyu%21_To_The_Top_Parte_2.jpg/revision/latest?cb=20200808061706&path-prefix=es',
        year: 2014,
    },

];
const animeDocuments = anime.map(anime => new Anime(anime));
mongoose
    .connect('mongodb+srv://root:Root1234@cluster0.mnj3i.mongodb.net/upgrade_anime?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async () => {
        const allAnime = await Anime.find();
        if (allAnime.length) {
            await Anime.collection.drop();
        }
    })
    .catch((err) => console.log(`Error deleting data: ${err}`))
    .then(async () => {
        await Anime.insertMany(animeDocuments);
        console.log('DatabaseCreated')
    })
    .catch((err) => console.log(`Error creating data: ${err}`))
    .finally(() => mongoose.disconnect());