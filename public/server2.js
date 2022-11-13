
const path = require('path');

const app = express();

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '/Save Ukraine website/index3.html'))
});

app.listen(3000, function(){

    console.log("Listening on port 3000!");
})