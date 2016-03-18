Invoice = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData(){
        Meteor.subscribe('invoice', this.props.invoice);

        return {
            invoice: Invoices.findOne(),
            items: InvoiceItems.find().fetch()
        };
    },
    getItems() {
        let items = his.data.items;

        if (items.length > 0) {
            return items.map((item, index) => {
                return <InvoiceItem
                ref='InvoiceItemRow'
                key={item._id}
                id={item._id}
                description={item.description}
                qty={item.qty}
                price={item.price}
                handleRemove={this.handleRemoveItem}
                />;
        });
        }
    },
    handleAddItem(){
        Meteor.call('addInvoiceItem', this.props.invoice, (error) => {
            if (error) {
                Bert.alert(error.reason, 'danger');
            }
        });
    },
    handleRemoveItem() {
        Meteor.call('removeInvoiceItem', itemId, (error) => {
            if (error) {
                Bert.alert (error.reason, 'danger');
            }
        });
    },
    render() {
        let invoice = this.data.invoice ? this.data.invoice: '';

        return <div className='Invoice'>
            <h4 className='page-header'>Invoice # {invoice.number}</h4>
        <div classname='panel panel-default'>
        <div className='panel-body'>
        <div className='row'>
        <div className='col-xs-12 col-sm-6'>
        <strong>Random Someone</strong>
    <p>Their address</p>
<p> second line of address</p>
        </div>
        <div className='col-xs-12 col-sm-6'>
        <strong>Someone Else</strong>
    <p>Their address</p>
<p> second line of address</p>
        </div>
        </div>
        </div>
        </div>
        <input type='text' name='invoiceSubject' className='form-control' placeholder='description' />
    <table className='table table-bordered table-stripped'>
    <thead>
    <tr>
    <th width='60%'>Item Name</th>
<th width='15%'>Qty</th>
<th width='15%'>Price</th>
<th width='10%'>Item Name</th>
    </tr>
    </thead>
    <tbody id ='invoice-items'>
    {this.getItems()}
    </tbody>
    </table>
    <button className='btn btn-success' onClick={this.handleAddItem}>Add Item</button>
        </div>
    }
});
