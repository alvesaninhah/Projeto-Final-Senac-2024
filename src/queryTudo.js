const conn = require('./conn');

const queryTudo = async () =>{
    const [query] = await conn.execute('SELECT * FROM dbWebc');
    return query;
}