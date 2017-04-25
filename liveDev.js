
<!-- \_|\ LiveDev -->
<script type="text/javascript">

	var liveDev = {show: 0};

	var liveDevShow = function() {
		console.log("~  running show function");

		document.getElementById('liveDevOld').style.display = 'none';

		var elem = document.getElementById('liveDevNew');

		if (elem.style.removeProperty) {
		    elem.style.removeProperty('display');
		} else {
		    elem.style.removeAttribute('display');
		}
	}

	liveDev.watch('show', function (id, oldval, newval) {
		console.log('~  liveDev.' + id + ' changed from ' + oldval + ' to ' + newval);
		liveDevShow();
		return newval;
	});

</script>

<div id="liveDevOld">
	<p>
		Old Stuff
	</p>
</div>

<div id="liveDevNew" style="display:none">
	<p>
		New Stuff
	</p>
</div>
