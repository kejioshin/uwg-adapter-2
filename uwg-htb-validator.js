'use strict';

////////////////////////////////////////////////////////////////////////////////
// Dependencies ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var Inspector = require('../../../libs/external/schema-inspector.js');

////////////////////////////////////////////////////////////////////////////////
// Main ////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/* =============================================================================
 * STEP 0 | Config Validation
 * -----------------------------------------------------------------------------
 * This file contains the necessary validation for the partner configuration.
 * This validation will be performed on the partner specific configuration object
 * that is passed into the wrapper. The wrapper uses an outside library called
 * schema-insepctor to perform the validation. Information about it can be found here:
 * https://atinux.fr/schema-inspector/.
 */
function partnerValidator(configs) {
   var result = Inspector.validate({
      type: 'object',
        properties: {
            xSlots: {
                type: 'object',
                properties: {
                    '*': {
                        type: 'object',
                        properties: {
                            placementId: {
                                type: 'string',
                                minLength: 1
                            },
                            sizes: {
                                type: 'array',
                                minLength: 1,
                                items: {
                                    type: 'array',
                                    exactLength: 2,
                                    items: {
                                        type: 'integer'
                                    }
                                }
                            }
                        }
                    }
                }
            },
            mapping: {
                type: 'object'
            }
        }
    },
   
    
                                
/* {
    "publisherId": "1488228",
    "websiteId": 123456,
    "xSlots":
    {
        "A":
        {
            "placementId": "15716552",
            "sizes": [[300, 250]]
        },
        "B":
        {
            "placementId": "15716555",
            "sizes": [[320, 50]]
        }
    },
    "mapping":
    {
        "desktopSlot1": ["A", "B"]
    }
}
*/
                                    
        
     configs);

    if (!result.valid) {
        return result.format();
    }

    return null;
}

module.exports = partnerValidator;

