exports = module.exports = (Contact, router) => {
    router.route('/contact')
        .post(Contact.addContact)
        .get(Contact.findAllcontacts);
};
