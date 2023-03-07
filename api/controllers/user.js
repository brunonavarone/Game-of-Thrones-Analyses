import { db } from '../db.js';

export const regiao = (_, res) =>{
  const regiao = "SELECT region AS Regiao, COUNT(region) AS Quantidade FROM casas GROUP BY region;";

  db.query(regiao, (err, data) =>{
    if(err) return res.json(err);

    return res.status(200).json(data.recordset);
  });
};

export const aparicoes = (_, res) =>{
  const aparicoes = "SELECT TOP 10 Characters as personagens, episodes_appeared/(last_appearance - first_appearance) as media_aparicoes_por_ano FROM personagens WHERE last_appearance - first_appearance <> 0;";

  db.query(aparicoes, (err, data) =>{
    if(err) return res.json(err);

    return res.status(200).json(data.recordset);
  });
};

export const melhoresEp = (_, res) =>{
  const melhoresEp = "SELECT TOP 13 season, episode, Rating FROM episódios ORDER BY Rating DESC;";

  db.query(melhoresEp, (err, data) =>{
    if(err) return res.json(err);

    return res.status(200).json(data.recordset);
  });
};

export const tempoEp = (_, res) =>{
  const tempoEp = `SELECT count(case when Duration >= 60 then Duration END) AS maior60, 
                            count(case when Duration <= 55 then Duration END) AS menor55, 
                            count(case when Duration > 55 AND Duration < 60 then Duration END) AS between5560 
                    FROM episódios;`;

  db.query(tempoEp, (err, data) =>{
    if(err) return res.json(err);

    return res.status(200).json(data.recordset);
  });
};

export const epSeason = (_, res) =>{
  const epSeason = `SELECT season, count(season) AS Quantidade_de_ep FROM episódios GROUP BY season ORDER BY season;`;

  db.query(epSeason, (err, data) =>{
    if(err) return res.json(err);

    return res.status(200).json(data.recordset);
  });
};