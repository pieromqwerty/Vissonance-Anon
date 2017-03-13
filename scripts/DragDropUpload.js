function DragDropUpload() {

    var dragdropupload = {
        filename: null,
        init: function( audioAnalyser ) {
            document.body.addEventListener( 'drop', drop_handler, false );
            document.body.addEventListener( 'dragover', dragover_handler, false );

            var audioname = $( '<div></div>' );
                audioname.attr( 'id', 'audioname' );
            $( 'body' ).append( audioname );

            var instructions = $( '<div></div>' );
                instructions.attr( 'id', 'instructions' );
                instructions.append( '<div>drop an .mp3</div>' );
                instructions.append( "<div id='defaultsong'>or play default</div>" );
            $( 'body' ).append( instructions );

            $( '#defaultsong' ).on( 'click', function() {

                var mp3name = 'DM Galaxy - Bad Motives ft. Aloma Steele [NCS Release].mp3';
                var request = new XMLHttpRequest();
 
                request.open('GET', 'songs/' + mp3name, true);
                request.responseType = 'arraybuffer';
                
                request.onload = function () {
                    audioname.text( mp3name.replace(/\.[^/.]+$/, "") );
                    $( '#instructions' ).remove();
                    audioAnalyser.makeAudio( request.response );
                };
                
                request.send();
            } );

            function drop_handler( e ) {
                e.preventDefault();

                var droppedFiles = e.target.files || e.dataTransfer.files;
                audioname.text( droppedFiles[0].name.replace(/\.[^/.]+$/, "") );

                var reader = new FileReader();

                reader.onload = function( fileEvent ) {
                    $( '#instructions' ).remove();
                    var data = fileEvent.target.result;
                    audioAnalyser.makeAudio( data );
                };
                reader.readAsArrayBuffer( droppedFiles[0] );

            }

            function dragover_handler( e ) {
                e.preventDefault();
            }
        }

    }

    return dragdropupload;
}