import shortid from 'shortid';

const Contacts = [
    {
        id: shortid.generate(),
        head: "Sales",
        paragraph: "Contact Sales Team at: ",
        email: "sales@vnmdating.com"
    },
    {
        id: shortid.generate(),
        head: "Dev",
        paragraph: "Contact Dev Team at: ",
        email: "dev@vnmdating.com"
    },
    {
        id: shortid.generate(),
        head: "General Queries",
        paragraph: "Contact for general queries at: ",
        email: "contact@vnmdating.com"
    },
    {
        id: shortid.generate(),
        head: "",
        paragraph: "Contact for Venue Partnerships, Investment Opportunities and other partnership avenues:",
        email: "naush@vnmdating.com"
    }
];

export default Contacts;