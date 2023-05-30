var signature = `[b][color=BlueViolet]Thank You, [/color]
[size=2][color=#E28A2B]Liam Fallon[/color][/size]
[color=BlueViolet]UIT User Support Associate
115G Renne Library | MSU-Bozeman
helpdesk@montana.edu | <a href="tel:(406) 994-1777">(406) 994-1777</a>
[/b][/color]`

var passwordString = `Hello,

Please use our password reset portal at [url=http://password.montana.edu/]http://password.montana.edu/[/url]. to reset your password, that should fix your issue.

To reset your NetID password, you can do that by going to the Password Portal at [url=http://password.montana.edu/]http://password.montana.edu/[/url]

If you do not know your NetID, you can reclaim it here: [url=https://www3.montana.edu/netidclaim/]https://www3.montana.edu/netidclaim/[/url]

`+ signature;

var VPN = `Hello,

Banner-VPN is no longer functioning. If that is the VPN you are attempting to connect to, please change the VPN you are connecting to MSU-Employee-VPN and try again. If that does not work, please try manually opening the DUO app when you try to logging to ensure you get the notification. 

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
