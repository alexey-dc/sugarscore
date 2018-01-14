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

    $('.table_of_transactions').append('<tr>'
    +'<th class="pay_back">+ 0x9cf08124ceabe4aab030f6841b045de951232acd6a31f83247a4de19fc05eea8</th>'
      +'<th>5 ETH</th>'
      +'<th>+10 points</th>'
      +'<th>Jan/2/2018</th>'
    +'</tr>');


    $('.title_score').html('<h1>Your International Blockchain Credit Score : '+730+' pt</h1>');

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

          $('.current_eth').html('Current ETH in wallet :'+res.ammount);
        }).catch(function() {

          // Error
        });

  });//end pay back
});
