(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{374:function(e,t,o){"use strict";o.r(t);var a=o(42),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"daemon-reference"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#daemon-reference"}},[e._v("#")]),e._v(" Daemon reference")]),e._v(" "),o("p",[e._v("The daemon (or RPC server) is the component that opens up a connection to the COM port and sends the correct AT command to the board. You can control it with some arguments")]),e._v(" "),o("h2",{attrs:{id:"noserial"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#noserial"}},[e._v("#")]),e._v(" --noserial")]),e._v(" "),o("p",[e._v("Run the daemon and dont try and connect to hardware. If you are on linux/MacOS you can fake a serial port "),o("RouterLink",{attrs:{to:"/developers/supported-boards.html#developing-without-a-board"}},[e._v("following these tips")]),e._v(". If you are on Windows just fix a COM port in the config file or use the "),o("code",[e._v("--dev")]),e._v(" option - just choose a non-existent COM port")],1),e._v(" "),o("h2",{attrs:{id:"dev"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dev"}},[e._v("#")]),e._v(" --dev")]),e._v(" "),o("p",[e._v("Force the daemon to use a COM port rather than auto detecting one.")]),e._v(" "),o("p",[e._v("e.g.")]),e._v(" "),o("p",[o("code",[e._v("python relaykeysd.py --noserial --dev=COM7")])]),e._v(" "),o("p",[e._v("For more info see "),o("RouterLink",{attrs:{to:"/developers/relaykeys-cfg.html#dev-defining-your-port-of-the-relaykeys-hardware"}},[e._v("here")])],1),e._v(" "),o("h2",{attrs:{id:"debug"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#debug"}},[e._v("#")]),e._v(" --debug")]),e._v(" "),o("p",[e._v("Sets a more verbose debugging output on the console.")]),e._v(" "),o("h2",{attrs:{id:"pidfile-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pidfile-file"}},[e._v("#")]),e._v(" --pidfile=file")]),e._v(" "),o("p",[e._v("Give a pidfile for the daemon to crate - or link to one.")]),e._v(" "),o("p",[o("strong",[e._v("Default: pidfile")])]),e._v(" "),o("h2",{attrs:{id:"logfile-logfile"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#logfile-logfile"}},[e._v("#")]),e._v(" --logfile=logfile")]),e._v(" "),o("p",[e._v("File to use as a log file for the debugging messages.")]),e._v(" "),o("p",[o("strong",[e._v("Default: logfile")])]),e._v(" "),o("h2",{attrs:{id:"config-configfile"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#config-configfile"}},[e._v("#")]),e._v(" --config=configfile")]),e._v(" "),o("p",[e._v("File to use as a config file. For more info see "),o("RouterLink",{attrs:{to:"/developers/relaykeys-cfg.html"}},[e._v("here")])],1),e._v(" "),o("p",[o("strong",[e._v("Default: relaykeys.cfg")])])])}),[],!1,null,null,null);t.default=r.exports}}]);