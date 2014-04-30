(function(env) {    
    env.ddg_spice_is_it_up = function(api_result) {
        "use strict";

        if(!api_result){
            return Spice.failed('is_it_up');
        }

        api_result['status_code'] = (api_result['status_code'] === 1);

        Spice.add({
            id: 'is_it_up',
            name: 'Domain status',
            data: api_result,
            signal: 'high',
            meta: {
                sourceUrl: 'http://isitup.org/' + api_result['domain'],
                sourceName: 'Is it up?',
                sourceIcon: true
            },
            template_group: 'info',
            templates: {
                group: 'info',
                options: {
                    content: Spice.is_it_up.detail
                }
            }
        });
    }
}(this));
