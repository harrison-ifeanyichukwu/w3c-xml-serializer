import Serializer from './modules/Serializer.js';

/**
 * XML Serializer public module
*/
export default class XMLSerializer {
    /**
     *@param {boolean} [preserveWhiteSpace=true] - boolean value indicating if white spaces
     * should be preserved as it is in the source
    */
    constructor(preserveWhiteSpace) {
        this.serializer = new Serializer(preserveWhiteSpace);
    }

    /**
     * return XMLSerializer as modules name
     *@private
    */
    get [Symbol.toStringTag]() {
        return 'XMLSerializer';
    }

    /**
     * produces an XML serialization of root passing a value of false for the
     * require well-formed parameter, and return the result.
     *@param {Node} root - the root node
     *@param {boolean} [requireWellFormed=false] - boolean value indicating if it should require xml
     * well formedness
     *@returns {string}
    */
    serializeToString(root, requireWellFormed) {
        return this.serializer.serializeToString(root, requireWellFormed);
    }
}