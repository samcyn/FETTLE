
 $(document).ready(function() {

        $('#rootwizard').bootstrapWizard(
            {onNext: function(tab, navigation, index) {
                var error_message = '';
                var error_count = 0;
                if(index == 1){

                    return true;
                }
                if(index==2) {
                    return true;
                }

                else if(index == 3) {
                    return true;
                
                    }
                else if(index == 4) {
                    return true;
                }

                else if(index == 5){
                    return true;
                }

                else if(index == 6){
                    return true;
                }
                else if(index == 7){
                    if(!$('#myName').val()) {
                        error_message = 'Please enter Name.\n';
                        error_count++;
                    }

                    if(!$('#email').val()) {
                        error_message = error_message + 'Please enter an Email.\n';
                        error_count++   
                    }

                    if(!$('#pwd').val()){
                         error_message = error_message + 'Please enter your number.\n';
                        error_count++ 
                    }

                    if($('#email').val() != false) {
                        if(!is_valid_email($('#email').val())) {
                            error_message = error_message + 'Email ID entered is invalid.\n';
                            error_count++;
                        }
                        else {

                        }
                    }
                    if(error_count > 0) {
                        $("#error11").html(error_message);
                        return false;
                    }
                    else {
                        return true;
                    }
                    
                }

            }
    });

        // $('input[type=radio]').attr('checked',false);

            
   // $('select').addClass("selectpicker");

   $('.selectpicker').selectpicker('mobile');

   $("input[type='checkbox']").change(function() {
      //console.log('Toggle: ' + $(this).prop('checked'));
          
        var totalPoint = 0;
        $(":checkbox:checked").each(function() {
            totalPoint += Math.ceil($(this).val());
            return totalPoint;
        });

        if (totalPoint > 5) {
            $('#response').html('An Addiction').css('color', '#ff9933');
        };
        if (totalPoint < 5) {
            $('#response').html('No Addiction').css('color', '#b300b3');
        };
            //console.log(totalPoint);
    });


   var today = new Date().toDateString().substring(0, 10);
   //console.log(today);
   //console.log(today.toJSON().substring(0,10));
   $('#timeStamp').html(today);

    // form submission code

    $('form').submit(function(event) {
        var formData = {
            'name' : $('input[name=name]').val(),
            'email': $('input[name=email]').val(),
            'phone': $('input[name=phone]').val(),
            'comment': $('textarea[name=comment]').val(),
            'test': 'Addiction'
        };


        $.ajax({
            type    : 'POST',
            url     : "http://knowit.com.ng/entry/"+name+"/"+email+"/"+phone+"/"+comment+"/"+test+"/",
            data    : formData, 
            dataType: 'json', 
            encode  : true
        })
            
            .done(function(data) {
                console.log(data); 
        })
            .fail(function(data) {
            console.log(data);
        });
        event.preventDefault();
    });
});



function is_valid_email(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
};

