const request=require('request');
const geoCode =(address,callback)=>{
    const url =`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoic2FieWFzYWNoaTEyIiwiYSI6ImNqdDFwdXBvYzA1aXA0NGxzOWdlbGN3cmEifQ.uQmkMA7HqXvigB9qCfJSZw&limit=1`;
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('unable to connect to location services')
        }
        else if(response.body.features.length===0){
            callback('unable to find the location try another search',undefined)
        }
        else{
            callback(undefined,{
                latitude:response.body.features[0].center[1],
                longitude:response.body.features[0].center[0],
                location :response.body.features[0].place_name


            })
        }
    })
}

module.exports=geoCode