// Stubbed out for now; this assumes that map is global and initialized.
// It also assumes that you're using jQuery or Zepto.

function zoomByAbout(e) {
	var x = .5*$('#map').width(),
	    y = .5*$('#map').height(),
	    mouse_point = e.containerPoint,
	    new_center_point = new L.Point((x + mouse_point.x) / 2, (y + mouse_point.y) / 2),
	    new_center_location = map.containerPointToLatLng(new_center_point);
	           
		map.setView(new_center_location, map.getZoom() + 1); 
}