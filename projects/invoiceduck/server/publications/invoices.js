Meteor.publish( 'invoices', () => {
    return Invoices.find();
});


Meteor.publish( 'invoice', ( invoiceId ) => {
  check( invoiceId, String );

  return [
    Invoices.find( { _id: invoiceId } ),
    InvoiceItems.find( { invoice: invoiceId } )
  ];
});
