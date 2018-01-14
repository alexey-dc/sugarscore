$(document).ready(function() {

  fetch('/wallet_total')
    .then(res => res.json())
    .then(res => {

      //alert(JSON.stringify(res));

       $('.current_eth').html('<h2 class="current_eth"> Current ETH in wallet : '+res.total_amount_wallet+' </h2>');



    }).catch(function(err) {
      // Error :(
    });//fetch




//borrow button

$('#borrow_money').click(function(event) {
  var bAmmount = $('#borrow_ammount').val();


    const headers = new Headers({
      "Content-Type": "application/json",
    });

        fetch('/borrowMoney', {
          method: 'post',
          headers: headers,
          body: JSON.stringify({ ammount: $('#borrow_ammount').val() }),
        })
        .then(res => res.json())
        .then(res => {


          $('.table_of_transactions').append('<tr>'
          +'<th class="borrowed">+ 0xfcb635837db6315d20820ee7b3f018867fec0aca78e3e69a52c146b28d402709</th>'
            +'<th>'+bAmmount+' ETH</th>'
            +'<th></th>'
            +'<th>Jan/2/2018</th>'
          +'</tr>');

          //alert(JSON.stringify(res));

          $('.current_eth').html('Current ETH in wallet :'+res.ammount);
        }).catch(function() {

          // Error
        });

}); //end borrow money


//repay button click
  $('#pay_back_currency').click(function(event) {

      var bAmmount = $('#borrow_ammount').val();

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

          //alert(JSON.stringify(res));

          $('.table_of_transactions').append('<tr>'
          +'<th class="pay_back">+ 0xb486c98b3763fdea6d6e809d53fda51a0273b34bc31d3aa760664859a401be3e</th>'
            +'<th>'+bAmmount+' ETH</th>'
            +'<th>+10 points</th>'
            +'<th>Jan/2/2018</th>'
          +'</tr>');

          $('.current_eth').html('Current ETH in wallet :'+res.ammount);
        }).catch(function() {

          // Error
        });

  });//end pay back
});
