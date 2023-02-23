// instantiating the analytics tracking object
var s_account = "adobecx1ridm";
var s = s_gi(s_account);

// required variable; sets the cookie domain
// stick with it to just not reset your visitors
s.trackingServer = "ridm.data.adobedc.net";
s.pageName = "Implement Adobe Analytics Using Javascript - AppMeasurement (Anonymized)";
s.eVar1 = "Exanple value (Anonymized)";
s.prop1 = "Prop (Anonymized)";
s.visitorID = "0"

// send the data to the report suite
s.t();
