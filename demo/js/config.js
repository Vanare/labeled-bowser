/**
 * Created by Aleksandr Beshkenadze <beshkenadze@gmail.com> on 26/05/15.
 */
require.config({
    baseUrl: "./bower_components",
    paths: {
        "labeledBowser": "../../labeled-bowser",
        "bowser": "bowser/bowser"
    }
});

require(["labeledBowser"], function (LabeledBowser) {
    new LabeledBowser()
});