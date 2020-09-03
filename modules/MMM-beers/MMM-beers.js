'use strict';

Module.register("MMM-beers", {
  // Default module config.
  defaults: {
    title: "Untitled"
  },

  getStyles: function() {
    return ['MMM-beers.css']
  },

  // Override dom generator.
  getDom: function () {
    var wrapper = document.createElement("div");

    var beerTitleWrapper = document.createElement("div")
    beerTitleWrapper.className = "normal"
    beerTitleWrapper.innerHTML = this.config.title

    wrapper.appendChild(beerTitleWrapper)

    var beers = this.config.beers

    var leftTap = this.config.leftTap
    var rightTap = this.config.rightTap

    var beerWrapper = document.createElement("div")
    beerWrapper.className = "normal small bright"
    beerWrapper.innerHTML = `
      <table class="mmm-beers-table">
        <tr class="mmm-beers-name">
          <td class="mmm-beers-leftTap">${leftTap.name}</td>
          <td class="mmm-beers-rightTap">${rightTap.name}</td>
        </tr>        
        <tr class="mmm-beers-description">
          <td class="mmm-beers-leftTap">${leftTap.description}</td>
          <td class="mmm-beers-rightTap">${rightTap.description}</td>
        </tr>
        <tr class="mmm-beers-abv">
          <td class="mmm-beers-leftTap">ABV: ${leftTap.abv}</td>
          <td class="mmm-beers-rightTap">AVB: ${rightTap.abv}</td>
        </tr>
        <tr class="mmm-beers-ibu">
          <td class="mmm-beers-leftTap">IBU: ${leftTap.ibu}</td>
          <td class="mmm-beers-rightTap">IBU: ${rightTap.ibu}</td>
        </tr>
      </table>
    `

    wrapper.appendChild(beerWrapper)

    //style="display: ${(leftTap.abv === '' && rightTap.abv === '') ? 'none' : 'block'};"}
    // beers.map(function(beer) {
    //   var beerWrapper = document.createElement("div")
    //   beerWrapper.className = "normal small bright"
    //   beerWrapper.innerHTML = `
    //     <table>
    //       <thead>
    //         <tr>
    //           <th>Name</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         <tr>
    //           <td>Things</td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   `

    //   wrapper.appendChild(beerWrapper)
    // })

    return wrapper;
  }
});