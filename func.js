const params = new URLSearchParams(window.location.hash.slice(1));
const initDataRaw = params.get('tgWebAppData');

const initData = new URLSearchParams(initDataRaw);

const userb = require('./inf.json');
function savew() {
	userb.push({initData});
	require('fs').writeFileSync('./inf.json', JSON.stringify(userb, null, '\t'));
	return true;
}

$('button').click(function () {
  savew();
});