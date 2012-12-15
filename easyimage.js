var easyimg = require('easyimage');

function imeasy(param,colorselector)
{
//console.log('colorselector is 1');
if(colorselector == 0)
{
easyimg.exec('convert -background white -fill dodgerblue  -font Candice \
           -strokewidth 2  -stroke blue   -undercolor lightblue \
           -size 20x30 -gravity center label:'+param+' ./tempfolder/label'+param+'.jpg',function(err, stdout, stderr) {
    if (err) throw err;
    console.log('image created!');
});
}
if(colorselector == 1)
{
easyimg.exec('convert -background white -fill red  -font Candice \
           -strokewidth 2  -stroke red   -undercolor lightyellow \
           -size 20x20 -gravity center label:'+param+' ./tempfolder/label'+param+'.jpg',function(err, stdout, stderr) {
    if (err) throw err;
    console.log('image created!');
});

}
if(colorselector == 2)
{
easyimg.exec('convert -background white -fill green  -font Gothic \
           -strokewidth 2  -stroke white   -undercolor black \
           -size 40x30 -gravity center label:'+param+' ./tempfolder/label'+param+'.jpg',function(err, stdout, stderr) {
    if (err) throw err;
    console.log('image created!');
});
}
if(colorselector == 3)
{
easyimg.exec('convert -background white -fill dodgerblue  -font Candice \
           -strokewidth 2  -stroke blue   -undercolor lightblue \
           -size 20x30 -gravity center label:'+param+' ./tempfolder/label'+param+'.jpg',function(err, stdout, stderr) {
    if (err) throw err;
    console.log('image created!');
});
}
if(colorselector == 4)
{
easyimg.exec('convert -background white -fill red  -font Candice \
           -strokewidth 2  -stroke red   -undercolor lightyellow \
           -size 20x20 -gravity center label:'+param+' ./tempfolder/label'+param+'.jpg',function(err, stdout, stderr) {
    if (err) throw err;
    console.log('image created!');
});

}
if(colorselector == 5)
{
easyimg.exec('convert -background white -fill green  -font Gothic \
           -strokewidth 2  -stroke white   -undercolor black \
           -size 40x30 -gravity center label:'+param+' ./tempfolder/label'+param+'.jpg',function(err, stdout, stderr) {
    if (err) throw err;
    console.log('image created!');
});
}
if(colorselector == 6)
{
easyimg.exec('convert -background white -fill dodgerblue  -font Candice \
           -strokewidth 2  -stroke blue   -undercolor lightblue \
           -size 20x30 -gravity center label:'+param+' ./tempfolder/label'+param+'.jpg',function(err, stdout, stderr) {
    if (err) throw err;
    console.log('image created!');
});
}
if(colorselector == 7)
{
easyimg.exec('convert -background white -fill red  -font Candice \
           -strokewidth 2  -stroke red   -undercolor lightyellow \
           -size 20x20 -gravity center label:'+param+' ./tempfolder/label'+param+'.jpg',function(err, stdout, stderr) {
    if (err) throw err;
    console.log('image created!');
});

}
if(colorselector == 8)
{
easyimg.exec('convert -background white -fill green  -font Gothic \
           -strokewidth 2  -stroke white   -undercolor black \
           -size 40x30 -gravity center label:'+param+' ./tempfolder/label'+param+'.jpg',function(err, stdout, stderr) {
    if (err) throw err;
    console.log('image created!');
});
}
if(colorselector == 9)
{
easyimg.exec('convert -background white -fill dodgerblue  -font Candice \
           -strokewidth 2  -stroke blue   -undercolor lightblue \
           -size 20x30 -gravity center label:'+param+' ./tempfolder/label'+param+'.jpg',function(err, stdout, stderr) {
    if (err) throw err;
    console.log('image created!');
});
}
if(colorselector == 10)
{
easyimg.exec('convert -background white -fill red  -font Candice \
           -strokewidth 2  -stroke red   -undercolor lightyellow \
           -size 20x20 -gravity center label:'+param+' ./tempfolder/label'+param+'.jpg',function(err, stdout, stderr) {
    if (err) throw err;
    console.log('image created!');
});
}
}



exports.imeasy=imeasy;
