import express from 'express';
<<<<<<< HEAD
import { regiao, aparicoes,melhoresEp,tempoEp,epSeason,melhoresSeasons } from '../controllers/user.js'
=======
import { regiao, aparicoes, melhoresEp, tempoEp, epSeason, melhoresSeasons} from '../controllers/user.js'
>>>>>>> fb81d6761826ee7fb34e5e54bf9476887b881b33

const router = express.Router()

router.get('/regiao', regiao)
router.get('/aparicoes', aparicoes)
router.get('/melhoresep', melhoresEp)
router.get('/tempoep', tempoEp)
router.get('/epseason', epSeason)
<<<<<<< HEAD
router.get('/melhoreseasons', melhoresSeasons)
=======
router.get('/melhoresseasons', melhoresSeasons)

>>>>>>> fb81d6761826ee7fb34e5e54bf9476887b881b33


export default router;