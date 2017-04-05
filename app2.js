const loaf = {
  flour: 300,
  water: 210,
  hydration: function(){
    return (this.water/this.flour)*100;
  }
};

console.log(`flour: ${loaf.flour}\nwater: ${loaf.water}`);
console.log("hydration level is " +loaf.hydration());
