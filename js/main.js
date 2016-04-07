
 $(document).ready(function() {
        $('#rootwizard').bootstrapWizard(
            {onNext: function(tab, navigation, index) {
                var error_message = '';
                var error_count = 0;
                if(index == 1){
                    return true;
                }
                if(index==2) {
                    var value = $("input[type='radio'][name='one']:checked").val();
                    console.log(value);
                    $("input[name='one']").click(function(){
                        $("#error1").hide('slow');
                    })
                    if(value == undefined) {
                        $("#error1").show();
                         //$("#error1").hide();
                        return false;
                    }
                    else {
                        return true;
                    }
                
                }

                else if(index == 3) {
                        var value = $("input[type='radio'][name='two']:checked").val();
                        console.log(value);
                        $("input[name='two']").click(function(){
                            $("#error2").hide('slow');
                        })
                        if(value == undefined) {
                            $("#error2").show();
                             //$("#error1").hide();
                            return false;
                        }
                        else {
                            return true;
                        }
                
                    }
                else if(index == 4) {
                        var value = $("input[type='radio'][name='three']:checked").val();
                        console.log(value);
                        $("input[name='three']").click(function(){
                            $("#error3").hide('slow');
                        })
                        if(value == undefined) {
                            $("#error3").show();
                             //$("#error1").hide();
                            return false;
                    }
                    else {
                        return true;
                    }
                }

                else if(index == 5){
                        var value = $("input[type='radio'][name='four']:checked").val();
                        console.log(value);
                        $("input[name='four']").click(function(){
                            $("#error4").hide('slow');
                        })
                        if(value == undefined) {
                            $("#error4").show();
                             //$("#error1").hide();
                            return false;
                        }
                        else {
                            return true;
                        }
                }

                else if(index == 6){
                    var value = $("input[type='radio'][name='five']:checked").val();
                    console.log(value);
                    $("input[name='five']").click(function(){
                        $("#error5").hide('slow');
                    })
                    if(value == undefined) {
                        $("#error5").show();
                         //$("#error1").hide();
                        return false;
                    }
                    else {
                        return true;
                    }
                }

                else if(index == 7){
                    var value = $("input[type='radio'][name='six']:checked").val();
                    console.log(value);
                    $("input[name='six']").click(function(){
                        $("#error6").hide('slow');
                    })
                    if(value == undefined) {
                        $("#error6").show();
                         //$("#error1").hide();
                        return false;
                    }
                    else {
                        return true;
                    }
                }

                else if(index == 8){
                    var value = $("input[type='radio'][name='seven']:checked").val();
                    console.log(value);
                    $("input[name='seven']").click(function(){
                        $("#error7").hide('slow');
                    })
                    if(value == undefined) {
                        $("#error7").show();
                         //$("#error1").hide();
                        return false;
                    }
                    else {
                        return true;
                    }
                }

                else if(index == 9){
                    var value = $("input[type='radio'][name='eight']:checked").val();
                    console.log(value);
                    $("input[name='eight']").click(function(){
                        $("#error8").hide('slow');
                    })
                    if(value == undefined) {
                        $("#error8").show();
                         //$("#error1").hide();
                        return false;
                    }
                    else {
                        return true;
                    }
                }

                else if(index == 10){
                    var value = $("input[type='radio'][name='nine']:checked").val();
                    console.log(value);
                    $("input[name='nine']").click(function(){
                        $("#error9").hide('slow');
                    })
                    if(value == undefined) {
                        $("#error9").show();
                         //$("#error1").hide();
                        return false;
                    }
                    else {
                        return true;
                    }
                }

                else if(index == 11){
                    var value = $("input[type='radio'][name='ten']:checked").val();
                    console.log(value);
                    $("input[name='ten']").click(function(){
                        $("#error10").hide('slow');
                    })
                    if(value == undefined) {
                        $("#error10").show();
                         //$("#error1").hide();
                        return false;
                    }
                    else {
                        return true;
                    }
                }

                else if(index == 12){
                    

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

 $('input[type=radio]').attr('checked',false);

      
   $("[type='radio']").change(function () {
   var totalPoint = 0; 
    $("[type='radio']:checked").each(function () {
        totalPoint += Math.ceil($(this).val());
        console.log(totalPoint);
        if(totalPoint >= 0 &&  totalPoint <= 4){
            $("#response").html("MINIMAL DEPRESSION");
        }
        else if (totalPoint >= 5 &&  totalPoint <= 9){
            $("#response").html("MILD DEPRESSION").css("color", "#CCFF33");
        }
        else if (totalPoint >= 10 &&  totalPoint <= 14){
            $("#response").html("MODERATE DEPRESSION").css("color", "#FFCC00");
        }
        else if (totalPoint >= 15 &&  totalPoint <= 19){
            $("#response").html("MODERATELY SEVERE DEPRESSION").css("color", "#FF6600");
        }
        else if (totalPoint >= 20 &&  totalPoint <= 27){
            $("#response").html("SEVERE DEPRESSION").css("color", "red");
        }

    })
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
            'test': 'phq'
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

