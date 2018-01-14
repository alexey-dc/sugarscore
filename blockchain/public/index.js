$(document).ready(function() {
  fetch('/candidates')
  .then(res => res.json())
  .then(res => {
    const candidatesTableHTML = res.candidates.map(function(candidate) {
      return `<tr><td>${candidate.name}</td><td id='${candidate.name}'>${candidate.votes}</td></tr>`;
    });

    $('#candidatesTable').html(candidatesTableHTML);
  }).catch(function(err) {
    // Error :(
  });

  $('#pay_back_currency').click(function(event) {

    alert('Thanks for paying back '+  $('#payback_ammount').val() +" ETH");
    
    const headers = new Headers({
      "Content-Type": "application/json",
    });

        fetch('/vote', {
          method: 'post',
          headers: headers,
          body: JSON.stringify({ candidateName: $('#candidateName').val() }),
        })
        .then(res => res.json())
        .then(res => {
          $('#' + res.name).html(res.votes);
        }).catch(function() {
          // Error
        });

  });//end pay back
});
