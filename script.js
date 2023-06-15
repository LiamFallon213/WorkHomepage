var signature = `[b][color=BlueViolet]Thank You, [/color]
[size=2][color=#E28A2B]Liam Fallon[/color][/size]
[color=BlueViolet]UIT User Support Associate
115G Renne Library | MSU-Bozeman
helpdesk@montana.edu | <a href="tel:(406) 994-1777">(406) 994-1777</a>
[/b][/color]`

var passwordString = `Hello NAME,

Please use our password reset portal at [url=http://password.montana.edu/]http://password.montana.edu/[/url] to reset your password, that should fix your issue.

To reset your NetID password, you can do that by going to the Password Portal at [url=http://password.montana.edu/]http://password.montana.edu/[/url]

If you do not know your NetID, you can reclaim it here: [url=https://www3.montana.edu/netidclaim/]https://www3.montana.edu/netidclaim/[/url]

`+ signature;

var VPN = `Hello NAME,

If you have accessed the VPN previously, you will likely just need to download the Cisco AnyConnect software. Please visit the link at the bottom for instructions downloading Cisco AnyConnect and connecting to the VPN.

If you have never connected to the MSU VPN - whether Student or Employee - you will need to call the UIT Service Desk, or submit a ticket, and have them add your user account to the VPN Security Group. Once that is done you will be able to follow the link below to download and install the VPN software.

[url=http://www.montana.edu/uit/computing/desktop/vpn/index.html]VPN- Secure Remote Access[/url]

If you are having issues connecting, please reference the troubleshooting steps below, or contact the UIT Service Desk at 994-1777 or visit us on the first floor of the Renne Library.

[quote]Cisco AnyConnect VPN Troubleshooting:

Here is the information regarding changing specific settings in the VPN configuration, to help you connect:

Ensure you are following [url=http://www.montana.edu/uit/computing/desktop/vpn/index.html]these instructions[/url] for connecting to the MSU VPN. [/quote]

[b] Common Issues: [/b]

Banner-VPN has recently been taken offline, and therefore cannot be used to connect. Instead use the VPN group that is assoiated with your position. E.g: An employee should use MSU-Employee-VPN, where as a student should use MSU-Student-VPN.

Recently the VPN has also been updated to require DUO authentication, if you are not getting notifications, first check that the DUO app is allowed to send you notifications. Then if it can send notifications, but is not; open the app and try to login. You should see the prompt come up, and after that it should send the notifications properly.
If you have a DUO token, you will need to use [url=https://guide.duo.com/append-mode#how-to-use-append-mode]Append Mode[/url].  

`+ signature;

var COPE = `Hello NAME,

The new listing is
[quote]

[/quote]
`+ signature;

var callVisit = `Hello NAME,

It looks like your issue is a complex one. Due to the limitations of Email I would suggest you call us at <a href="tel:(406) 994-1777">(406) 994-1777</a>, or visit us in 115G Renne Library. 

`+ signature;

var redacted = `[u]Hello [NAME]
Please note[/u] that I removed the first 4 digits of your MSU ID number in your message above.  
 
Email is not a secure form of communication, so it's always best to list [u]only[/u] the last 4 digits of your MSU ID number in any email message, to protect your confidential information.

A tech will be reaching out shortly to help you with your problem.

`+signature;

function copyChooser(source) {
  if (source == 1) {
    navigator.clipboard.writeText(signature);
  }else if(source == 2){
    navigator.clipboard.writeText(passwordString);
  }else if(source == 3){
    navigator.clipboard.writeText(VPN);
  }else if(source == 4){
    navigator.clipboard.writeText(COPE);
  }else if(source == 5){
    navigator.clipboard.writeText("█");
  }else if(source == 6){
    navigator.clipboard.writeText(callVisit);
  }else if(source == 7){
    navigator.clipboard.writeText(redacted);
  }
  document.getElementById("done").removeAttribute("hidden");
  setTimeout(clearDone, 1000);
}

function clearDone(){
  document.getElementById("done").setAttribute("hidden", "hidden");
}
