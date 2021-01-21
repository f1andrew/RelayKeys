(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{357:function(e,t,a){e.exports=a.p+"assets/img/overview.c3f7cd72.png"},358:function(e,t,a){e.exports=a.p+"assets/img/windows-pairing.03a7a8eb.gif"},359:function(e,t,a){e.exports=a.p+"assets/img/ipad-pairing.7e5d47b2.gif"},360:function(e,t,a){e.exports=a.p+"assets/img/mac-pairing.77ce8139.gif"},378:function(e,t,a){"use strict";a.r(t);var o=a(42),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"⚙️-installation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#⚙️-installation"}},[e._v("#")]),e._v(" ⚙️ Installation")]),e._v(" "),o("blockquote",[o("p",[e._v("The easiest way to get up-and-running is with the "),o("a",{attrs:{href:"https://github.com/AceCentre/RelayKeys/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows Installer"),o("OutboundLink")],1),e._v(", which includes the RelayKeys-CLI, and the RelayKeys-QT software. Read on to see how to install and setup.")])]),e._v(" "),o("h2",{attrs:{id:"a-quick-reminder-of-how-this-works"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#a-quick-reminder-of-how-this-works"}},[e._v("#")]),e._v(" A quick reminder of how this works")]),e._v(" "),o("p",[e._v("So RelayKeys consists of a hardware solution that talks Bluetooth HID to secondary devices - anything that can pair with bluetooth and understand a keyboard works, and some software on the 'server' device; i.e. the device sending the key/mouse movements. So for our installation we really focus on the 'server' since the client needs no additional hardware or software.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(357),alt:"RelayKeys Overview"}})]),e._v(" "),o("h2",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),o("p",[e._v("RelayKeys is designed to work on Windows, Linux, Mac Operating Systems. We have built a Windows installer that makes the process a lot easier on that platform. For Mac & Linux you will need to build the app from source.")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Windows 7-10")])]),e._v(" "),o("li",[o("strong",[e._v("A USB Port")])]),e._v(" "),o("li",[o("strong",[e._v("Ability to Install software as Administrator")])]),e._v(" "),o("li",[o("strong",[e._v("A second device to connect to")]),e._v(" Could be a Windows computer, a Mac, an iPad etc")])]),e._v(" "),o("p",[e._v("and most importantly:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("A supported piece of RelayKeys ready hardware")]),e._v(" "),o("ul",[o("li",[e._v("Right now:  this is designed to work with the Adafruit nrf52840 express. Others will be added to the list as this is developed.")])])])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("If you have a RelayKeys stick provided by the AceCentre")]),e._v(" "),o("p",[e._v("Carry on reading below. If you wish to by your own hardware "),o("RouterLink",{attrs:{to:"/technical/supported-boards.html"}},[e._v("read this guide")]),e._v(".")],1)]),e._v(" "),o("h2",{attrs:{id:"download-and-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#download-and-setup"}},[e._v("#")]),e._v(" Download and Setup")]),e._v(" "),o("p",[e._v("Download the installer from "),o("a",{attrs:{href:"https://github.com/AceCentre/RelayKeys/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(". When downloaded 'Run' the program")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("The programme is not 'signed'")]),e._v(" "),o("p",[e._v("This means that you may need to allow it access to your computer to run. Hit 'more' to allow this")])]),e._v(" "),o("p",[e._v("Step-through the install procedure. Select 'Normal install' and let the RelayKeys setup software do its thing to install the software in the correct place (By default: C:\\Program Files (x86)\\AceCentre).")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("If you use 'Portable' or change the location of the software:")]),e._v(" "),o("p",[e._v("Make a note of where you have stored the programme as you will need this when linking it with your software.")])]),e._v(" "),o("h2",{attrs:{id:"plug-in-your-relaykeys-stick-pair-with-a-computer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#plug-in-your-relaykeys-stick-pair-with-a-computer"}},[e._v("#")]),e._v(" Plug-in Your RelayKeys stick & pair with a computer")]),e._v(" "),o("ol",[o("li",[e._v("Make sure the Micro-USB connector is attached to the stick and then attach the female end of the USB lead into your computer")]),e._v(" "),o("li",[e._v('You should see your stick light a solid blue ("Paired") or flashing blue ("Un-paired")')])]),e._v(" "),o("p",[e._v('If "Flashing". This means you have yet to pair the RelayKeys device with another computer.')]),e._v(" "),o("h3",{attrs:{id:"pair-with-a-windows-computer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pair-with-a-windows-computer"}},[e._v("#")]),e._v(" Pair with a Windows Computer")]),e._v(" "),o("p",[e._v('So to connect to Another Windows computer, go to Settings, Bluetooth, "Add a device", and connect to "RelayKeys"\n'),o("img",{attrs:{src:a(358),alt:"Pairing Windows"}})]),e._v(" "),o("h3",{attrs:{id:"pair-with-an-ios-device"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pair-with-an-ios-device"}},[e._v("#")]),e._v(" Pair with an iOS device")]),e._v(" "),o("p",[e._v('To connect to an iPad/iPhone, go to Settings, Bluetooth and add "Bluefruit52" or "RelayKeys"\n'),o("img",{attrs:{src:a(359),alt:"Pairing iPad"}})]),e._v(" "),o("h3",{attrs:{id:"pair-with-a-mac"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pair-with-a-mac"}},[e._v("#")]),e._v(" Pair with a Mac")]),e._v(" "),o("p",[e._v('To connect to a mac, Open up "System Preferences", Bluetooth and add "RelayKeys"')]),e._v(" "),o("p",[o("img",{attrs:{src:a(360),alt:"Pairing Mac"}})]),e._v(" "),o("h2",{attrs:{id:"checking-it-works"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#checking-it-works"}},[e._v("#")]),e._v(" Checking it works")]),e._v(" "),o("ol",[o("li",[e._v("Open up something on the second computer that you can enter text into. E.g. Notes on the iPad, Notepad on Windows or Notes on a mac")]),e._v(" "),o("li",[e._v('On your server computer (the one with RelayKeys attached) run "RelayKeys" (search for it in your Windows search bar). Alternatively find it in '),o("code",[e._v("C:\\Program Files(x86)\\AceCentre\\RelayKeys\\relaykeys-qt.exe")])]),e._v(" "),o("li",[e._v("With the window having focus - type into it. You should see the keystrokes appear on the second computer")])]),e._v(" "),o("h2",{attrs:{id:"using-it-with-your-aac-software"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-it-with-your-aac-software"}},[e._v("#")]),e._v(" Using it with your AAC software")]),e._v(" "),o("p",[e._v("You can get going by using one of these example files that work with your AAC Software:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://www.dropbox.com/s/3mcvnpnyi36lpdh/RelayKeysDemo.gridset?dl=1",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Grid 3"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.dropbox.com/s/pen6fcxnnm0byqr/RelayKeysQwerty.jmm?dl=1",target:"_blank",rel:"noopener noreferrer"}},[e._v("MindExpress"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Tobii Communicator")]),e._v(" "),o("li",[e._v("Dynavox Series 5")])]),e._v(" "),o("p",[e._v("When you are ready, "),o("RouterLink",{attrs:{to:"/guides/basic-principles.html"}},[e._v("have a read of how to integrate the features you need")]),e._v(".")],1),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("👍 You've successfully installed and setup RelayKeys! Now you may want to use the CLI or QT program. Read on to find out how these work.")]),e._v(" "),o("p",[e._v("😞 Got a problem? Dang! See our "),o("RouterLink",{attrs:{to:"/getting-started/contributing.html"}},[e._v("troubleshooting")]),e._v(" guide.")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);