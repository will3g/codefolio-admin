import draftjs from 'draft-js';

export default {
    entityMap: {
    },
    blocks: [
        {
            key: draftjs.genKey(),
            text: "",
            type: "unstyled",
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {}
        }
    ]
};