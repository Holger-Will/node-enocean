// run this file from the command line with a paramter
// "node send.js on" sends a switch on command. it can b eused as a teach in command
// "node send.js off" sends a switch off command
var enocean = require( "../" )( )             // require node-enocean
var Button = require( "node-enocean-button" )
enocean.listen( "/dev/ttyUSB0" );              // open the serialport

enocean.on( "ready" , async function( base ) {           // when ready
	var button = new Button( enocean , 1 )       // use enocean to sen on chanal 1
	if(process.argv[ 2 ] == "on" ) {
		await button.A1.click( )
	}else{
		await button.A0.click( )
	}
	enocean.close( )
});
