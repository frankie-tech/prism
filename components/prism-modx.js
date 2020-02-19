(function(Prism) {
    // Tag syntax regex \[\[!?(?:(?:-.*\]\])|(?:(?:\*|\$|\+|\+\+|~|%)?[\w-]*(?:@[\w-]*)?(?::[\w-]*(?:=`.*`)?)*\??\s*(?:(?:&[\w-]*=`.*`\s*)*)\]\]))
    /*
    var open = /\[\[!?/;
    var chunkToken = /\$/;
    var tvToken = /\/;
    var lexiconToken = /%/;
    var propertySetToken = /(@[\w-]*)?/;
    var siteVariableToken = '\+{2}';
    var params = /\??\s*(&[a-zA-Z0-9]=`.*`)/;
    var close = /\]\]/;
    var chunk = open.source + chunkToken.source + '.*';
    */
    Prism.languages.modx = {
        tag: {
            pattern: /\[\[!?(?:(?:-.*\]\])|(?:(?:\*|\$|\+|\++|~|%)?[\w\d-.]*(?:@[\w\d-.]+)?(?::[\w\d-.]*(?:=`.*?`)?)*?\??\s*(?:(?:&[\w-.]*=`.*?`\s*?)*?)\]\]))/,
            inside: {
                'chunk-start': /\[\[!?\$[\w\d-.]*/,
                'variable-start': /\[\[!?(?:\*|\++)[\w\d-.]*/,
                'snippet-start': /\[\[!?[\w\d-.]*/,
                // ! figure out why link & lexicon start don't envelope the text inside the tag????
                'link-start': /\[\[!?~[\w\d-.[\]]*/,
                'lexicon-start': /\[\[!?%[\w\d-.[\]]*/,
                'tag-end': /\]\]/,
                'output-filter': /:[\w\d-.]+=?/,
                'property-set': /@[\w\d-.]+/,
                parameter: /&[\w\d-.]*=/,
                input: /`.*?`/,
                punctuation: /[?]/,
            }
        },
    }
}(Prism))
