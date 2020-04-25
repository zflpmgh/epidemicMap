const axios =require('axios');
const express=require('express');
const app=express();

app.use((req,res,next)=>{
    res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
    next();
})

app.get('/api',async (req,res)=>{
    let url='https://i.snssdk.com/forum/ncov_data/?activeWidget=1&data_type=%5B2%2C4%5D&src_type=map'
    let result=await axios.get(url);
    let data=JSON.parse(result.data.ncov_nation_data).provinces;

    let list=data.map(item=>{
        return {
            name:item.name,
            value:item.treatingNum,
            confirmedNum:item.confirmedNum,
            curesNum:item.curesNum,
            deathsNum:item.deathsNum,
            asymptomaticNum:item.asymptomaticNum
        }
    })
    res.send(list)
})

app.listen(3001,()=>{
    console.log('http://localhost:3001/api')
})