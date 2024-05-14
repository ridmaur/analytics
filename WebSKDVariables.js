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
                        "eVar1": "Web SDK example",
                        "eVar2": "And now for something completely different"
                    }
                }
            }
        },
        "_experience": {
            "analytics": {
                "contextData": {
                    "someValue": "1"
                }
            }
        }
    }
});

// retrieve the ECID
alloy("getIdentity")
  .then(function(result) {
    // The command succeeded.
    console.log("ECID:", result.identity.ECID);
    console.log("RegionId:", result.edge.regionId);
  })
  .catch(function(error) {
    // The command failed.
    // "error" will be an error object with additional information.
  });

  alloy("getLibraryInfo").then(function(result) {
    console.log("Library version: ", result.libraryInfo.version);
    console.log("Library commands: ", result.libraryInfo.commands);
    console.log("Library configs: ", result.libraryInfo.configs);
  }).catch(function(error) {
    // The command failed.
    // "error" will be an error object with additional information.
    console.error("Error: ", error)
  });
 