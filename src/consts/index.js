const backUrl = true ? 'https://uspex-calc.herokuapp.com' : 'http://ab4100cc0ce4.ngrok.io'

const typeBlocks = {
    CORPUS: 'CORPUS',               // Комплект Корупса
    FASAD: 'FASAD',                 // Косплект Фасадов
    FACCES: 'FACCES',               // Фурнитура
    FPETLI: 'FPETLI',               // Ф Петли
    FBOX: 'FBOX',                   // Ф Ящики
    FPOWERUP: 'FPOWERUP',           // Ф Подъемные механизмы
    FSLIDING: 'FSLIDING',           // Ф Раздвижные механизмы
    ETABLE: 'ETABLE',               // Столещница
    ETABLEpsc: 'ETABLEpsc',         // Столещница (ПСЦ)
    EWALLPANAL: 'EWALLPANEL',       // Стеновая панель
    EWALLPANALpsc: 'EWALLPANELpsc', // Стеновая панель (ПСЦ)
    EPAN: 'EPAN',                   // Ручки
    EPANpsc: 'EPANpsc',             // Ручки (ПСЦ)
    EANY: 'EANY',                   // Прочие
    EANYpsc: 'EANYpsc',             // Прочие (ПСЦ)
}


module.exports = {
    backUrl,
    typeBlocks
}