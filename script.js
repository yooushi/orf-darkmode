var element = document.querySelector("#orfonTarget > img");
element.parentElement.removeChild(element);


$(function() {
  $('a').click(function() {
    chrome.tabs.create({url: $(this).attr('href')});
    return false;
  });
});


	document.querySelector('.but').addEventListener('click', function() {
		chrome.tabs.create({
			url: 'https://orf.at/'
		});

//element.parentElement.removeChild(element);
