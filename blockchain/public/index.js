$(document).ready(function() {

  fetch('/wallet_total')
    .then(res => res.json())
    .then(res => {

      //alert(JSON.stringify(res));

       $('.current_eth').html('<h2 class="current_eth"> Current ETH in wallet : '+res.total_amount_wallet+' </h2>');



    }).catch(function(err) {
      // Error :(
    });//fetch

  fetch('/candidates')
  .then(res => res.json())
  .then(res => {
    const candidatesTableHTML = res.candidates.map(function(candidate) {
      return `<tr><td>${candidate.name}</td><td id='${candidate.name}'>${candidate.votes}</td></tr>`;
    });

    $('#candidatesTable').html(candidatesTableHTML);
  }).catch(function(err) {
    // Error :(
  });  //fetch

  $('#pay_back_currency').click(function(event) {

  //  alert('Thanks for paying back '+  $('#payback_ammount').val() +" ETH");

    const headers = new Headers({
      "Content-Type": "application/json",
    });

        fetch('/payBackMoney', {
          method: 'post',
          headers: headers,
          body: JSON.stringify({ ammount: $('#payback_ammount').val() }),
        })
        .then(res => res.json())
        .then(res => {

          alert(JSON.stringify(res));

          $('.current_eth').html(res.ammount);
        }).catch(function() {

          // Error
        });

  });//end pay back
});
