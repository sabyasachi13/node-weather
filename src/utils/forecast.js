request=require('request');
const forecast=(lat,long,callback)=>{
    const url =`https://api.darksky.net/forecast/6049b7753eecd6f237b895d484d9ce66/${lat},${long}?units=si`;
    request({url:url,json:true},(error,response)=>{
        if(error){
           callback('unable to connect to weather services')
        }
        else if(response.body.error){
            callback('unable to find location')
        }
        else{
            callback(undefined,`${response.body.daily.data[0].summary}It is currently ${response.body.currently.temperature} there is ${response.body.currently.precipProbability*100}% chance of rain`)
        }
    })
}

module.exports=forecast