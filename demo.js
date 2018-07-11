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

	document.querySelector('#_1').addEventListener("click", function(event) {
		console.log('click');
		cb(event);
	});
	document.querySelector('#_1').addEventListener("touchstart", function(event) {
		console.log('touchstart');
		cb(event);
	});

	function aDownload(type) {
		var fileName = 'test.txt';
		var a = document.createElement("a");
		document.body.appendChild(a);
		var file = new Blob([text.value || text.placeholder], { type: type });
		var fileURL = window.URL.createObjectURL(file);
		a.href = fileURL;
		a.download = fileName;
		a.click();
	}

	document.querySelector('#_2').addEventListener("touchstart", function(event) {
		aDownload('text/plain;charset=' + document.characterSet)
	});

	document.querySelector('#_3').addEventListener("touchstart", function(event) {
		aDownload('application/octet-stream');
	});
}(self));
