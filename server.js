var port = 3011;

var server = require( 'http' ).createServer( ).listen( port, function () {
    console.log( "Express server listening on port " + port );
} );

var io = require( 'socket.io' ).listen( server );
const { v1: uuidv1 } = require('uuid');

io.on( "connection", function ( socket ) {
    console.log( 'Server: Incoming connection.' );
    
    socket.on( "posts", function ( msg, callback ) {
      console.log('Posts ')
      console.log(msg);
      io.emit("posts", msg);
    } );
    socket.on( "answer", function ( msg, callback ) {
      console.log('Reponse')
      console.log(msg);
      io.emit("answer", msg);
    } );
    socket.on( "newco", function ( msg, callback ) {
      console.log('Nouvelle connexion')
      console.log(msg);
      io.emit("newco", io.sockets.clients().length);
    } );
    socket.on( "answernewco", function ( msg, callback ) {
      console.log('Message reçu : Fichier créé ')
      console.log(msg);
      io.emit("answernewco", io.sockets.clients().length);
    } );
    socket.on( "newcoonprofile", function ( msg, callback ) {
      console.log('Nouvelle connexion aux reponses ')
      console.log(msg);
      io.emit("newcoonprofile", io.sockets.clients().length);
    } );
    socket.on( "newuser", function ( msg, callback ) {
      console.log('Nouveau utilisateur ')
      console.log(msg);
      io.emit("newuser", {uid: uuidv1(), id: msg});
    } );
    socket.on( "newposts", function ( msg, callback ) {
      console.log('Nouveau poste')
      console.log(msg);
      io.emit("newposts", {uid: uuidv1(), id: msg});
    } );
    
} );
