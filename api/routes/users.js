import express from 'express';
import { regiao, aparicoes,melhoresEp,tempoEp,epSeason,melhoresSeasons } from '../controllers/user.js'

const router = express.Router()

router.get('/regiao', regiao)
router.get('/aparicoes', aparicoes)
router.get('/melhoresep', melhoresEp)
router.get('/tempoep', tempoEp)
router.get('/epseason', epSeason)
router.get('/melhoreseasons', melhoresSeasons)


export default router;