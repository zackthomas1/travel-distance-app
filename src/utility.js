export const GenerateRandomString = () => {
    return Math.random().toString(36).substring(7);
}

export const Haversine = (start, target) => {
    const earthRadius = 3959.9; // earth's radius in miles
    const radian = Math.PI / 180.0;

    let [lat1, long1] = parseLatLong(start.lat, start.long);
    let [lat2, long2] = parseLatLong(target.lat, target.long);

    lat1 = lat1 * radian; 
    long1 = long1 * radian;
    lat2 = lat2 * radian;
    long2 = long2 * radian;

    let dlat = lat2 - lat1; 
    let dlong = long2 - long1; 

    let a = Math.sin(dlat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlong / 2) ** 2; 
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    let d = earthRadius * c; 

    return d;
}

export const parseLatLong = (latStr, longStr) => {  
    
    // ex. '188.35/S'
    const pattern = /^\d+(\.\d+)?\/[A-Z]$/
    const regex = new RegExp(pattern);

    // ex. '-188.35'
    const pattern2 = /^-?\d+(\.\d+)?$/;
    const regex2 = new RegExp(pattern2);

    latStr = latStr.trim(); 
    longStr = longStr.trim(); 

    let latValue = 0;
    let longValue = 0;
    if(regex.test(latStr) ){
        latValue = parseFloat(latStr.substring(0,latStr.indexOf('/')));
        const latDir = latStr.substring(latStr.indexOf('/')+1);   

        if(latDir.toLowerCase() === 's'){
            latValue *= -1; 
        }
    }else if(regex2.test(latStr)){
        latValue =  parseFloat(latStr)
    }else{
        // error
        return;
    }

    if(regex.test(longStr) === true){
        longValue = parseFloat(longStr.substring(0,longStr.indexOf('/')));
        const longDir = longStr.substring(longStr.indexOf('/')+1); ;
    
        if(longDir.toLowerCase() === 'w'){
            longValue *=-1
        }
    }else if(regex2.test(longStr)){
        longValue =  parseFloat(longStr)
    }else{
        // error
        return;
    }

    return [latValue, longValue];
}