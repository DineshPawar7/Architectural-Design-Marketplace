// Create a Stripe client.
var stripe = Stripe('YOUR_PUBLIC_STRIPE_API_KEY');

// Create an instance of Elements.
var elements = stripe.elements();

// Create an instance of the card Element.
var card = elements.create('card');

// Add an instance of the card Element into the `card-element` div.
card.mount('#card-element');

// Handle form submission.
var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    stripe.createToken(card).then(function(result) {
        if (result.error) {
            // Inform the user if there was an error.
            console.log(result.error.message);
        } else {
            // Send the token to your server.
            fetch('/charge', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token: result.token.id, email: document.getElementById('email').value })
            }).then(function(response) {
                return response.json();
            }).then(function(data) {
                console.log(data);
            });
        }
    });
});



