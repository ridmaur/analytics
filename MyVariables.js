// instantiating the analytics tracking object
var s_account = "adobecx1ridm";
var s = s_gi(s_account);

// required variable; sets the cookie domain
// stick with it to just not reset your visitors
s.trackingServer = "ridm.data.adobedc.net";
s.pageName = "RIdM Home Page";
s.eVar1 = "Exanple value";
s.prop1 = "Prop";
s.visitorID = "0000000" // strictly anonymizing AA implementation

// send the data to the report suite
s.t();
