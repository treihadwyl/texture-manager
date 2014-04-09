/**
 * Manages the various textures used
 * Copyright © 2014 Matt Styles <matt@veryfizzyjelly.com>
 * Licensed under the ISC license
 * ---
 *
 */


var path = require( 'path' ),

    PIXI = require( 'pixi.js' ),
    findIndex = require( 'lodash-node/modern/arrays/findIndex' );


module.exports = (function() {

    /**
     * The memory store of textures frames
     */
    var store = {};

    var tm = {

        /**
         * Stores textures in the cache
         */
        save: {

            /**
             * Creates a new texture from frame info from a texture atlas
             * Namespaced by filename and framename
             */
            frame: function( filename, framename, data ) {
                filename = path.basename( filename, path.extname( filename ) );

                // console.log( filename, ':', framename );

                if ( tm.get.frame( filename, framename ) ) {
                    return false;
                }

                // Store texture
                if ( !store[ filename ] ) {
                    store[ filename ] = [];
                }

                store[ filename ].push({
                    framename: framename,
                    texture: PIXI.Texture.fromFrame( framename ),
                    data: data
                });

                return true;
            }
        },

        /**
         * A couple of methods for getting texture data
         */
        get: {

            /**
             * Returns an individual texture frame
             * @param filename {String} id of the texture file
             * @param framename {String} id of the specific frame in that file
             * returns {Object}
             */
            frame: function( filename, framename ) {
                if ( !store[ filename ] ) {
                    return false;
                }

                return store[ filename ][ findIndex( store[ filename ], { framename: framename } ) ];
            },

            /**
             * Returns the entire texture atlas array
             * @param filename {String} the identifier
             * @returns {Object}
             */
            atlas: function( filename ) {
                return store[ filename ];
            }
        },

        // @todo: only for testing, can be removed
        store: store
    }

    return tm;

})();
