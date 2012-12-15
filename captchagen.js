//initialisations of objects
var http = require('http')
  , fs = require('fs')
  , Canvas=require('canvas');
var querystring = require('querystring');
var easyimg = require('easyimage'); 
var imeobject = require('./easyimage');
var summation_value=0;
//from now onwards everything should go into server module. Onload evrything whould change. That is the reason.

http.createServer(function(req, res) 
{
switch(req.url)
{
//on request case.
case '/':
	console.log("[200]" + req.method + " to " +req.url );
	res.writeHead(200, "OK", {'Content-Type': 'text/html'});
	res.write('<html><head><title>Hello Visitor </title></head><body>');

	var getdate = Date.parse(Date());
	var stringlength=((Math.ceil(Math.random()*10))%8+1);
	console.log("string length is "+stringlength);
	var tempvar1 = Math.ceil(Math.random()*10);
	var sub = getdate.toString().slice(tempvar1,tempvar1+1);
	for (var numbers_array=[],i=0;i<10;++i) numbers_array[i]=i;
	function shuffle(array) 
	{
		var tempvar2, current, top = array.length;
  		if(top) while(--top)
		{
    			current = Math.floor(Math.random() * (top + 1));
    			tempvar2 = array[current];
    			array[current] = array[top];
    			array[top] = tempvar2;
  		}
  	return array;
	}
	summation_value=0;
	numbers_array = shuffle(numbers_array);
	console.log("numbers_array is "+numbers_array);
//setting up the html form
	res.write('<html><head><title>Hello Visitor </title></head><body bgcolor = lightblue>');
	res.write('<h1>Welcome Visitor, Who are you??</h1><br /><br /><br /><br />');
  	res.write('<form enctype="application/x-www-form-urlencoded" action="/onsubmit" method="post" onsubmit="doClear()" >');
  	res.write('<center>What is your Name:<br /> <br /><input type="text" name="username" value="" /><br />');
  	res.write('<br />What is your password:<br /> <br /><input type="password" name="userpwd" value="" /><br />');
	res.write('<br />What is the value for this summation below:<br /> <br /><input type="text" name="userpwd" value="" /><br />');
//incremental recursive generation of CAPCTHA
	for (var imagepick=1;imagepick<stringlength+1;++imagepick)
	{		
		if(((sub%imagepick)%2)==0)
		{
		var imagepick=(Math.ceil(Math.random()*10))%stringlength;
		var tempvar3=numbers_array[imagepick];
		summation_value=summation_value+numbers_array[imagepick];
		console.log("tempvar3 value is "+tempvar3);
		var colorselector1=(Math.ceil(Math.random()))%8;	
		console.log("colorselector value is "+colorselector1);	
		imeobject.imeasy(tempvar3,imagepick);
		//trying to read the file that is created now by fsread
		var path = "/home/lakshmisarma/Desktop/CSE523/CSE523_code_and_readme_Kalyan/tempfolder/label"+tempvar3+".jpg";
		var counter=0;		
		while(counter<100000000){counter=counter+1;}
		var canvas_check1;		
		var condition=(Math.ceil(Math.random()))%9;
		function recursive1(condition)
		{
			condition_new=condition-(Math.ceil(Math.random()))%9;
			data = fs.readFileSync(path); 
			var img = new Canvas.Image; // Create a new Image
			img.src = data;
			// Initialiaze a new Canvas with the same dimensions	
			// as the image, and get a 2D drawing context for it.
			var canvas_check1 = new Canvas(img.width, img.height);
			var ctx = canvas_check1.getContext('2d');
			ctx.drawImage(img, 0, 0, img.width , img.height);
			recursive1(condition_new);
			if(condition_new==1)
			{
				res.write('<img src="' + canvas_check1.toDataURL() + '" />');
			}
			console.log("data is "+ data);
		}
		fs.unlinkSync(path);
		if(imagepick<stringlength)		
		res.write('+');		
		}
		else
		{
			res.write('<script type="text/javascript"> document.write('+numbers_array[imagepick]+'); </script>');
			summation_value=summation_value+numbers_array[imagepick];			
			if(imagepick<stringlength)
			res.write('+');
		}
	}
	res.write('<br /><br />Your Response:<br /><input type="text" name="ur" value="" /><br />');
	res.write('<br /><br /><input type="submit" /></center>');
  	res.write('</form></body></html');  
	res.end();
	var npath="/home/lakshmisarma/Desktop/CSE523/tempfolder/";
	fs.rmdirSync(npath);
	fs.mkdirSync(npath,0777);
	console.log("summation value is "+ summation_value);
  break; 
//validation of users response case.
	case '/onsubmit':
  		if (req.method == 'POST') {
    			console.log("[200] " + req.method + " to " + req.url);
    			req.on('data', function(chunk) {
     			console.log("Received body data:");
      			console.log(chunk.toString());
			console.log(querystring.parse(chunk.toString()));
			var kalyan = querystring.parse(chunk.toString());
			if(kalyan['ur'] == summation_value)	
				{
					res.write('<html><head><title>Congratulations</title></head><body bgcolor="lightyellow"><h1>You are human!!</h1><br /> <center>Thank you <h3>' + kalyan['username'] + '</h3>for Passing this Simple Test</center><br /> <br /><br /> <center><h1><a href="http://www.cs.sunysb.edu/">Enter the website</a></center></h1></body></html>');
				}
			else
				{	
					res.write('<html><head><title>Snap!!Sorry and retry</title></head><body bgcolor="orange"><h1> You did not crack it!! </h1><br /> <center>Oops You have failed the simple math logic based captcha test!!</center> </body></html>');
				}
    });
    
    		req.on('end', function() {
      			res.writeHead(200, "OK", {'Content-Type': 'text/html'});
      			res.end();
 });
		
    
  } else {
    console.log("[405] " + req.method + " to " + req.url);
    res.writeHead(405, "Method not supported", {'Content-Type': 'text/html'});
    res.end('<html><head><title>405 - Method not supported</title></head><body><h1>Method not supported.</h1></body></html>');
  }
  
  break;
default:
      res.writeHead(404, "Not found", {'Content-Type': 'text/html'});
      res.end('<html><head><title>404 - Not found</title></head><body><h1>Not found.</h1></body></html>');
      console.log("[404] " + req.method + " to " + req.url);
  };

}).listen(8124);
  console.log('Server running at http://localhost:8124/');




