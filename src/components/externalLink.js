import PropTypes from 'prop-types';
import React from 'react';
import '../styles/style.scss';

const ExternalLink = ({ children, ...rest }) => (
    <a
        {...rest}
        target='_blank'
        rel='noopener noreferrer'
        className='unstyled-link'
    >
        {children}
    </a>
);

ExternalLink.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ExternalLink;
