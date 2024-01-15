chrome.storage.sync.get('userText', function(data) {
    var savedText = data.userText;
    if (savedText) {
        if (document.URL.includes("benedu.co.kr/")) {
            // 자동으로 채울 입력 필드 선택
            var inputField = document.querySelector('#loginPW');
            if (inputField) {
                inputField.value = savedText; // 저장된 텍스트를 사용
            }

            // 클릭할 버튼 선택
            var submitButton = document.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.click();
            }
        }
        else{
            console.log("benedu.co.kr이 아닙니다")
        }
    }
});
