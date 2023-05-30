var signature = `[b][color=BlueViolet]Thank You, [/color]
[size=2][color=#E28A2B]Liam Fallon[/color][/size]
[color=BlueViolet]UIT User Support Associate
115G Renne Library | MSU-Bozeman
helpdesk@montana.edu | <a href="tel:(406) 994-1777">(406) 994-1777</a>
[/b][/color]`

var passwordString = `Hello,

Please use our password reset portal at [url=http://password.montana.edu/]http://password.montana.edu/[/url]. to reset your password, that should fix your issue.

`+ signature;

var VPN = `Hello,

Banner-VPN is no longer functioning. If that is the VPN you are attempting to connect to, please change the VPN you are connecting to MSU-Employee-VPN and try again. If this is not your issue, please reach out.

`+ signature;

var COPE = `Hello,

The new listing is
[quote]

[/quote]

`+ signature;

function copyChooser(source) {
  if (source == 1) {
    navigator.clipboard.writeText(signature);
  }else if(source == 2){
    navigator.clipboard.writeText(passwordString);
  }else if(source == 3){
    navigator.clipboard.writeText(VPN);
  }else if(source == 4){
    navigator.clipboard.writeText(COPE);
  }
  document.getElementById("done").removeAttribute("hidden");
  setTimeout(clearDone, 1000);
}

function clearDone(){
  document.getElementById("done").setAttribute("hidden", "hidden");
}
