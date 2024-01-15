document.getElementById('saveButton').addEventListener('click', function() {
    var userText = document.getElementById('userText').value;
    chrome.storage.sync.set({'userText': userText}, function() {
        console.log('비밀번호가 저장되었습니다.');
    });
});
