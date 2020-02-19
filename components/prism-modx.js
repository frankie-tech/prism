(function(Prism) {
    // Tag syntax regex \[\[!?(?:(?:-.*\]\])|(?:(?:\*|\$|\+|\+\+|~|%)?[\w-]*(?:@[\w-]*)?(?::[\w-]*(?:=`.*`)?)*\??\s*(?:(?:&[\w-]*=`.*`\s*)*)\]\]))
    const open = /\[\[!?/;
    const chunkToken = /\$/;
    const tvToken = /\*/;
    const lexiconToken = /%/;
    const propertySetToken = /(@[\w-]*)?/;
    const siteVariableToken = '\+{2}';
    const params = /\??\s*(&[a-zA-Z0-9]=`.*`)*/;
    const close = /\]\]/;
    const chunk = open.source + chunkToken.source + '.*';

    var regexes = {
        /* Simple chunk regex */
        
    }
    Prism.languages.modx = {
        tag: {
            pattern: /\[\[!?(?:(?:-.*\]\])|(?:(?:\*|\$|\+|\+\+|~|%)?[\w-.]*(?:@[\w-.]*)?(?::[\w-.]*(?:=`.*`)?)*\??\s*(?:(?:&[\w-.]*=`.*`\s*)*)\]\]))/,
            inside: {
                'chunk-start': /\[\[!?\$[\w-.]*/,
                'variable-start': /\[\[!?(?:\*|\++)[\w-.]*/,
                'snippet-start': /\[\[!?[\w-.]*/,
                'link-start': /\[\[!?~[\w-.[\]]*/,
                'lexicon-start': /\[\[!?%[\w-.[\]]*/,
                'tag-end': /\]\]/,
                'output-filter': /:[\w-.]*(?:=`.*`)?(?=\?|:)/,
                'property-set': /@[\w-.]+/,
                parameter: {
                    pattern: /&[\w-.]*(?:=`.*`)?(?=\s*|\])/
                }
            }
        },
    }

}(Prism))
