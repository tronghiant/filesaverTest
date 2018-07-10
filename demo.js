(function (view) {
	var document = view.document
	, text = document.getElementById("text")
	, text_filename = document.getElementById("text-filename");

	var cb = function(event) {
		event.preventDefault();
		var fileName = (text_filename.value || text_filename.placeholder) + '.csv';
		saveAs(new Blob([text.value || text.placeholder], {
			type: 'text/plain;charset=' + document.characterSet
		}), fileName);
	};

	document.querySelector('input[type="button"]').addEventListener("touchstart", function(event) {
		console.log("touchstart");
		cb(event);
	});
	document.querySelector('input[type="button"]').addEventListener("click", function(event) {
		console.log('click');
		cb(event);
	});
}(self));
