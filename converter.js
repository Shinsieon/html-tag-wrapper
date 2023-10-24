const wrapBtn = document.getElementById("wrapBtn");

wrapBtn.addEventListener("click", () => {
  const htmlSource = document.getElementById("htmlSource");
  const ta = document.getElementById("ta");
  const originalText = htmlSource.value;
  const searchStrings = document.getElementById("keywords").value;

  const wrappedText = wrapStringsWithCodeTags(
    originalText,
    JSON.parse(searchStrings.replace(/'/g, '"'))
  );
  ta.innerText = wrappedText;
});

// 문자열을 찾아 <code></code> 태그로 감싸주는 함수
function wrapStringsWithCodeTags(text, searchStrings) {
  console.log(text);
  for (var i = 0; i < searchStrings.length; i++) {
    var searchString = searchStrings[i];
    var regex = new RegExp("(" + searchString + ")", "g");
    text = text.replace(regex, "<code>$1</code>");
  }
  return text;
}

// 문자열을 감싸진 결과로 대체
