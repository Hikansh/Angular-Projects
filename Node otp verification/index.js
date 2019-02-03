var express=require('express');
var bodyParser=require('body-parser');
var exhb=require('express-handlebars');


var messagebird=require('messagebird')('FRV90c9kgtgG7dDFovWHwWRfj');

var app=express();
app.engine('handlebars',exhb({defaultLayout:'main'}) );
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.render('step1');
});
app.post('/step2', (req, res) => {
    var num=req.body.number;

    messagebird.verify.create(num,{
        template:"Your verification OTP is %token."
    },(err,response)=>{
        if(err){
            res.render('step1',{
                error:err.errors[0].description
            })
            
        }
        else{
         res.render('step2',{
             id:response.id
         })   
        }
    })
});

app.post('/step3', (req, res) => {
    var id=req.body.id;
    var token =req.body.token;

    messagebird.verify.verify(id,token,(err,response)=>{
        if(err){
            res.render('step2',{
                error:err.errors[0].description
            })
        }
        else{
            res.render('step3')
        }
    })
});
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});