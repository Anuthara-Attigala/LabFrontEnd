const express=require('express');
const app=express();

app.use('/app',express.static(__dirname+'/public'));
app.get('/',(req,res,next)=>{
    res.sendFile(__dirname+'/public/index.html');
});

allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if ('OPTIONS' === req.method) {
        res.send(200);
    } else {
        next();
    }
};

app.use(allowCrossDomain);


app.listen(3001);