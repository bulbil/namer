/*   *   *   *   *   *   *   *   *   *   *

*
 		<コ:彡
*
 		namer
* 

* 		nabil kashyap (www.nabilk.com)
 		MIT license
* 		crowdsourced metadata tagging for
 		Swarthmore Colleges local contentDM instance
*

*   *   *   *   *   *   *   *   *   *   */ 


var namer = {

	args: {
			q: 'dmGetCollectionList/json',
		},

	url: {
			base: 'http://triptych.brynmawr.edu',
			port: ':81',
			params: 'dmwebservices/index.php'
		},


	getPages: function(collectionListBool){

		var crntURL = (collectionListBool == true) ?
			namer.url.base + namer.url.port + '/' + namer.url.params
			: implode('/', namer.url);

		$.ajax({

	        type: 'GET',
	        url: crntURL,
	        data: namer.args,
	        dataType: 'jsonp json',
	        error: function(e, f, g) {
	            console.log(e);
	            console.log(f);
	            console.log(g);
	        }
	    }).done(function(d){console.log('what')});
	},
}

function implode(glue, pieces) {
  // discuss at: http://phpjs.org/functions/implode/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Waldo Malqui Silva
  // improved by: Itsacon (http://www.itsacon.net/)
  // bugfixed by: Brett Zamir (http://brett-zamir.me)

  var i = '',
    retVal = '',
    tGlue = '';
  if (arguments.length === 1) {
    pieces = glue;
    glue = '';
  }
  if (typeof pieces === 'object') {
    if (Object.prototype.toString.call(pieces) === '[object Array]') {
      return pieces.join(glue);
    }
    for (i in pieces) {
      retVal += tGlue + pieces[i];
      tGlue = glue;
    }
    return retVal;
  }
  return pieces;
}

$(document).ready(function(){

	var p = $('<p>');

	// p.append(namer.getPages())
	// 	.appendTo('div#container')

	namer.getPages(true);
});