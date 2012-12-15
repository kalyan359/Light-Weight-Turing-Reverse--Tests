The following are neccessary  to run the library designed. These are instructions to install all these dependent libraries on Ubuntu machine.




1.Installing nodejs
Install the dependencies:
	sudo apt-get install g++ curl libssl-dev apache2-utils
	sudo apt-get install git-core

then run the following commands
	$git clone git://github.com/ry/node.git
	$cd node
	$./configure
	$make
	$sudo make install
	
2. Installing image libraries

Image magick:
	$npm install imagemagick
	
Easyimage:
	$npm install easyimage
	
node canvas:
	$npm install canvas

3. To execute change the path and npath in catchagen.js code and execute as below.

	$node captchagen.js