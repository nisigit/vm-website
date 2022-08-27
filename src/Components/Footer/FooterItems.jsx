import React from 'react';
import shortid from 'shortid';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const FooterItems = {
    ContactItems: [
        {
            id: shortid.generate(),
            cName: 'footer-info-text',
            icon: <PhoneIcon className="material-icon" />,
            text: '+44-123456789'
        },
        {
            id: shortid.generate(),
            cName: 'footer-info-text',
            icon: <LocationOnIcon className="material-icon" />,
            text: 'Edinburgh, United Kingdom'
        },
        {
            id: shortid.generate(),
            cName: 'footer-info-text',
            icon: <MailIcon className="material-icon" />,
            text: 'contact@venusandmars.com'
        },
    ],

    FooterListLinks: [
        {
            id: shortid.generate(),
            cName: 'footer-list-link',
            to: '/safety',
            text: 'Safety'
        },
        {
            id: shortid.generate(),
            cName: 'footer-list-link',
            to: '/privacy',
            text: 'Privacy'
        },
    ],

    FooterMainLinks: [
        {
            id: shortid.generate(),
            to: '/faq',
            text: 'FAQ',
            cName: 'footer-main-link'
        },
        {
            id: shortid.generate(),
            to: '/contact',
            text: 'Contact',
            cName: 'footer-main-link'
        }
    ],

    SocialMediaItems: [
        {
            id: shortid.generate(),
            url: 'https://instagram.com/vnm_dating/',
            cName: 'footer-social-icon',
            icon: <i className="fab fa-instagram"></i>
        },
        {
            id: shortid.generate(),
            url: 'https://www.tiktok.com/@vnm_dating?',
            cName: 'footer-social-icon',
            icon: <i class="fab fa-tiktok"></i>
        },

        {
            id: shortid.generate(),
            url: 'https://www.linkedin.com/company/venus-and-mars-dating/',
            cName: 'footer-social-icon',
            icon: <i class="fab fa-linkedin"></i>
        }
    ],
};

export default FooterItems;