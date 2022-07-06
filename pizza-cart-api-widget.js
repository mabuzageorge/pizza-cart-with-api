document.addEventListener('alpine:init', () => {
    Alpine.data('pizzaCartWithAPIWidget', function() {
      return {
        init() {
            axios
        .get('https://pizza-cart-api.herokuapp.com/api/pizzas')
        .then((result) => {
            this.pizzas = result.data.pizzas;

        })

        },
        username : '',
        pizzas : [],
        cartId : '',
        createCart(){
            
        },
        add(pizza) {
            alert(pizza.flavour + " "+ ":" + " " + pizza.size + " "+ ":" + " " + pizza.price)

        },
      }
    })
})