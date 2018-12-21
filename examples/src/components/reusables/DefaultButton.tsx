import * as React from 'react';
import { Button } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';

export interface DefaultButtonProps extends ButtonProps {

}

const DefaultButton: React.SFC<DefaultButtonProps> = props => {
    return (
        <Button style={{marginRight: '1rem'}} variant="outlined" {...props}/>
    );
};

export default DefaultButton;