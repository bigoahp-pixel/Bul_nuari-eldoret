document.addEventListener('DOMContentLoaded', function() {
    const payButton = document.getElementById('payButton');

    payButton.addEventListener('click', payWithPaystack);

    function payWithPaystack() {
        const ref = 'TICKET_' + Date.now();

        const handler = PaystackPop.setup({
            key: 'pk_live_f8078a8450492a8eafee302e524614fe8f14f8d9',
            email: 'customer@example.com',
            amount: 35000, // Amount in kobo (35000 kobo = 350 KES)
            currency: 'KES',
            ref: ref,
            label: "Event Ticket Payment",
            callback: function(response) {
                alert(`Payment successful! Reference: ${response.reference}`);
            },
            onClose: function() {
                alert('Payment was not completed. You can try again.');
            }
        });

        handler.openIframe();
    }
});