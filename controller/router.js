const ProductRouting = require('./handlder/productRouting');
const NotFoundRouting = require('./handlder/notFoundRouting')
const handler={
    '':ProductRouting.showHome,
    'product/create':ProductRouting.showFormCreat
}
module.exports=handler;