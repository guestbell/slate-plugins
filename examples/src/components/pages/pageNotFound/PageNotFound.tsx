import * as React from 'react';

export interface PageNotFoundProps {

}

const PageNotFound: React.SFC<PageNotFoundProps> = props => {
    return (
        <h2>Not found what you were looking for</h2>
    );
};

export default PageNotFound;