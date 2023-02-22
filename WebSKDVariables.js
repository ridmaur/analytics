// configuring alloy with the datastream id and org id
alloy("configure", {
    "edgeConfigId": "f115e612-d86c-4f78-bf3e-5a06c5f5cbbc",
    "orgId":"53A16ACB5CC1D3760A495C99@AdobeOrg"
});

// sending the event with details for the XDM payload
alloy("sendEvent", {
    "xdm": {
        "web": {
            "webPageDetails": {
                "URL": window.document.URL,
                "name": window.document.title
            }
        },
        "_experience": {
            "analytics": {
                "customDimensions": {
                    "eVars": {
                        "eVar1": "Web SDK RIdM example value",
                        "eVar2": "And now for something completely different"
                    }
                }
            }
        }
    }
});