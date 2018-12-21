/** @jsx h */
// @flow
// eslint-disable-next-line
import { createHyperscript } from 'slate-hyperscript';

const h = createHyperscript({
    blocks: {
        heading: 'heading',
        paragraph: 'paragraph',
        blockquote: 'blockquote'
    }
});

const value = (
    <value>
        <document>
            <heading>Slate + Quote Editing</heading>
            <paragraph>
                {
                    'This page is a basic example of Slate + slate-edit-blockquote plugin.'
                }
            </paragraph>
            <blockquote>
                <paragraph>{'Some text in the blockquote'}</paragraph>
            </blockquote>
            <paragraph>End paragraph</paragraph>
        </document>
    </value>
);

export default value;
