require('dotenv').config();

const express = require('express');
const axios = require('axios');
const app = express();

const STEAM_API_KEY = process.env.STEAM_API_KEY;

app.use(express.static('public'));

app.set('view engine', 'ejs');

const resolveVanityURL = async (username) => {
    try {
        const response = await axios.get('https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/', {
            params: {
                key: STEAM_API_KEY,
                vanityurl: username
            }
        });

        if (response.data.response.success === 1) {
            return response.data.response.steamid;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Erro ao converter nome de usuário para Steam ID:', error);
        return null;
    }
};

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/perfil', async (req, res) => {
    let steamid = req.query.steamid;

    if (!steamid) {
        return res.send('Steam ID é necessário!');
    }

    if (!steamid.match(/^\d+$/)) {
        steamid = await resolveVanityURL(steamid);
        if (!steamid) {
            return res.send('Usuário não encontrado!');
        }
    }

    try {
        const response = await axios.get('https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/', {
            params: {
                key: STEAM_API_KEY,
                steamids: steamid
            }
        });

        const playerData = response.data.response.players[0];
        if (!playerData) {
            return res.send('Usuário não encontrado!');
        }

        res.render('profile', { player: playerData });
    } catch (error) {
        console.error(error);
        res.send('Erro ao buscar o perfil Steam.');
    }
});

const PORT = process.env.PORT || 3000; // Caso não esteja na Vercel, use a porta 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
