// JavaScript code for party selection, item management, cart, order summary, and sharing

// Party Selection
let selectedParty = null;
function selectParty(party) {
    selectedParty = party;
    console.log(`Selected party: ${party}`);
}

// Item Management
const items = [];
function addItem(item) {
    items.push(item);
    console.log(`Added item: ${item}`);
}

// Cart Management
const cart = [];
function addToCart(item) {
    cart.push(item);
    console.log(`Added to cart: ${item}`);
}

function viewCart() {
    console.log("Cart Items:", cart);
}

// Order Summary
function printOrderSummary() {
    console.log(`Order Summary for Party: ${selectedParty}`);
    cart.forEach((item, index) => {
        console.log(`Item ${index + 1}: ${item}`);
    });
}

// Sharing Functionality
function shareViaWhatsApp(message) {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function shareAsPDF() {
    const doc = new jsPDF();
    doc.text(`Order Summary for Party: ${selectedParty}`, 10, 10);
    cart.forEach((item, index) => {
        doc.text(`Item ${index + 1}: ${item}`, 10, 20 + (index * 10));
    });
    doc.save('order_summary.pdf');
}

// Example usage
selectParty("Birthday Party");
addItem("Cake");
addToCart("Cake");
printOrderSummary();
shareViaWhatsApp("Check out my order!");
shareAsPDF();