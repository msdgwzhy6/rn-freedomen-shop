

const names = ['张三','王五','李白','小黄','大毛', '阿星']
const messages = [
    '今天是星其一', '今天是昨天的两个', '我才不吃小鸡肉呢', '还有谁？', '这么漂亮的一个女人，就因为...', '还有王法么，还有法律么？'
]
const headers = [
    require('../assets/h1.png'), require('../assets/h2.png'), require('../assets/h3.png'), require('../assets/h4.png'), require('../assets/h5.png')
]
const images = [
    require('../assets/s1.png'), require('../assets/s2.png'), require('../assets/s3.png'), require('../assets/s4.png'), require('../assets/s5.png')
]


const products = [
    require('../assets/p1.png'), require('../assets/p2.png'), require('../assets/p3.png'), require('../assets/p4.png'), require('../assets/p5.png')
]
const productNames = [
    '白酒', '飲料', '香烟', '豬肉', '牛肉', '羊肉'
]
const prices = [68, 98, 125, 998, 12, 68]


const swipers = [
    require('../assets/m1.png'), require('../assets/m2.png'), require('../assets/m3.png'), require('../assets/m4.png'), require('../assets/m5.png')
]

function shequ(pageNo, pageSize = 15) {
    let list = []
    for (let i = 0; i < pageSize; i ++) {
        list.push({
            message: messages[parseInt(Math.random() * 6)],
            name: names[parseInt(Math.random() * 6)],
            date: new Date(),
            header: headers[parseInt(Math.random() * 5)],
            images: [images[parseInt(Math.random() * 5)], images[parseInt(Math.random() * 5)], images[parseInt(Math.random() * 5)]],
        })
    }
    return list
}

function shanchen(pageNo, pageSize = 15) {
    let list = []
    for (let i = 0; i < pageSize; i ++) {
        list.push({ 
            productName: productNames[parseInt(Math.random() * 6)],
            product: products[parseInt(Math.random() * 5)],
            price: prices[parseInt(Math.random() * 6)], 
        })
    }
    return list
}

function fetch (name) {
    let data
    switch (name) {
        case 'ShouYe': 
            data = {
                swiper: swipers[parseInt(Math.random() * 5)],
                kinds: [
                    {kindIcon: require('../assets/i1.png'), kindName: '吃的'},
                    {kindIcon: require('../assets/i2.png'), kindName: '喝的'},
                    {kindIcon: require('../assets/i3.png'), kindName: '玩的'},
                    {kindIcon: require('../assets/i4.png'), kindName: '樂的'},
                    {kindIcon: require('../assets/i5.png'), kindName: '可以的'},
                    {kindIcon: require('../assets/i6.png'), kindName: '調皮'},
                ],
                xsms: [
                    {product: require('../assets/p1.png'), productName: '羊肉'},
                    {product: require('../assets/p2.png'), productName: '羊肉'}, 
                    {product: require('../assets/p3.png'), productName: '羊肉'},
                    {product: require('../assets/p4.png'), productName: '香烟'}, 
                    {product: require('../assets/p5.png'), productName: '白酒'},
                ],
                jrjx: [
                    {product: require('../assets/p2.png'), productName: '羊肉'},
                    {product: require('../assets/p3.png'), productName: '羊肉'}, 
                    {product: require('../assets/p1.png'), productName: '羊肉'},
                    {product: require('../assets/p5.png'), productName: '香烟'}, 
                    {product: require('../assets/p4.png'), productName: '白酒'},
                ],
                zxtj: [
                    {product: require('../assets/p2.png'), productName: '羊肉'},
                    {product: require('../assets/p3.png'), productName: '羊肉'}, 
                    {product: require('../assets/p1.png'), productName: '羊肉'},
                    {product: require('../assets/p5.png'), productName: '香烟'}, 
                    {product: require('../assets/p4.png'), productName: '白酒'},
                    {product: require('../assets/p2.png'), productName: '羊肉'},
                    {product: require('../assets/p3.png'), productName: '羊肉'}, 
                    {product: require('../assets/p1.png'), productName: '羊肉'},
                    {product: require('../assets/p5.png'), productName: '香烟'}, 
                    {product: require('../assets/p4.png'), productName: '白酒'},
                    {product: require('../assets/p2.png'), productName: '羊肉'}, 
                ]
            }
            break;
        case 'SheQu':
            data = shequ()
            break;
        case 'ShanChen':
            data = shanchen()
            break;
    }

    return data
}




export default {fetch}