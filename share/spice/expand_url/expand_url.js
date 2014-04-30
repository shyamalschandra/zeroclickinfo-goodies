(function(env){    
    env.ddg_spice_expand_url = function(api_response) {
        "use strict";

        // Get the orignal query.
        var query = DDG.get_query().replace(/expand\s*/i, "");

        // Check if there are any errors.
        if (!api_response["long-url"] || api_response["long-url"] === query) {
            return;
        }

        // Display the plug-in.
        Spice.add({
            id: "expand_url",
            name: "Expand URL",
            data: api_response,
            meta: {
                sourceUrl: "http://longurl.org/expand?url=" + encodeURIComponent(query),
                sourceName: "LongURL"
            },
            template_group: 'info',
            templates: {
                options: {
                    content: Spice.expand_url.content
                }
            }
        });
    }
}(this));