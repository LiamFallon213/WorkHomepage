function copyChooser(source) {
  var fr=new FileReader();
  if (source == 1) {
    navigator.clipboard.writeText("Signature");
  }else if(source == 2){
   // navigator.clipboard.writeText(readfile("password.txt"));
    alert(2);
    alert(FileReader.readAsText("password.txt"));
  }
}

function copyToClipboard(input) {
  // Get the text field
  var copyText = input

  
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}
