
 $(document).ready(function() {
        
        $('#rootwizard').bootstrapWizard(
            {onNext: function(tab, navigation, index) {
                    var error_message = '';
                    var error_count = 0;
                    
                    if(index == 1){
                        return true;
                    }
                    if(index==2) {
                        if ( $('#once input:radio:checked').size() < 12 )    
                         {
                             helper($('#once'));  
                            return false;
                        }
                        else{
                            return true;
                        }
                    }

                    else if(index == 3) {
                            if ( $('#twice input:radio:checked').size() < 10 )    
                             {
                                helper($('#twice'));
                                return false;
                            }
                            else{
                                return true;
                            }
                        }
                    else if(index == 4) {
                            if ( $('#thrice input:radio:checked').size() < 9 )    
                             {
                                helper($('#thrice'));
                                return false;
                            }
                            else{
                                return true;
                            }
                    }

                    else if(index == 5){
                            if ( $('#fourth input:radio:checked').size() < 13 )    
                             {
                                helper($('#fourth'));
                                return false;
                            }
                            else{
                                return true;
                            }
                        }

                    else if(index == 6){
                        if( $('#fifth input:radio:checked').size() < 10 )    
                             {
                                helper($('#fifth'));
                                return false;
                            }
                            else{
                                return true;
                            }
                    }

                    else if(index == 7){
                        if ( $('#sixth input:radio:checked').size() < 6 )    
                             {
                                helper($('#sixth'));
                                return false;
                            }
                            else{
                                return true;
                            }
                    }

                    else if(index == 8){
                        if ( $('#seventh input:radio:checked').size() < 7 )    
                             {
                                helper($('#seventh'));
                                return false;
                            }
                            else{
                                return true;
                            }
                    }

                    else if(index == 9){
                        if ( $('#eighth input:radio:checked').size() < 6 )    
                             {
                                helper($('#eighth'));
                                return false;
                            }
                            else{
                                return true;
                        }
                    }

                    else if(index == 10){
                        if ( $('#ninth input:radio:checked').size() < 10 )    
                             {
                                helper($('#ninth'));
                                return false;
                            }
                            else{
                                return true;
                            }
                    }

                    else if(index == 11){
                        if ( $('#tenth input:radio:checked').size() < 7 )    
                             {
                                helper($('#tenth'));
                                return false;
                            }
                            else{
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

// when radio is checked remove error class
 $("input[type=radio]").click(function () {
    if ($(this).is(':checked')) {
        $(this).parent().parent().parent().removeClass('input-error');
    }
});

 // function
 function helper(u){
     $('input:radio', u).each(function() {
        /*if(name && name == $(this).attr('name'))
          {return true;} // Skip when checking the same element name. */

          name = $(this).attr('name');

        if(! $('input:radio[name="' + name + '"]:checked').length) {
             $('input:radio[name="' + name + '"]').focus().parent().parent().parent().addClass('input-error');
            //alert('question not  [' + name + ']');
            return false;
        } 
    });
}

//after refresh unchecked all radio button
$('input[type=radio]').attr('checked',false);


 //calculations of the total point..     
   $("[type='radio']").change(function () {
   var totalPoint = 0; 
    $("[type='radio']:checked").each(function () {
        totalPoint += Math.ceil($(this).val());
        mean1= totalPoint/12;
        mean2 = totalPoint/10;
        mean3 = totalPoint/9;
        mean4 = totalPoint/13;
        mean5 = totalPoint/10;
        mean6 = totalPoint/6;
        mean7 = totalPoint/7;
        console.log(mean1);
        console.log(totalPoint);
        
        if(mean1 < 15.5){
            $("#a").html("You are not having any psychological manifestation").css("color", "green");
        }
        if(mean1 >= 15.5){
            $("#a").html("You have an indication of psychological manifestation of bodily distress").css("color", "red");
        }
        if (mean2 < 16.15){
            $("#b").html("You have no obsessive compulsive tendencies").css("color", "green");
        }
        if (mean2 >= 16.15){
            $("#b").html("You have indication of obsessive compulsive tendencies ").css("color", "red");
        }
        if (mean3 < 13.20){
            $("#c").html("You have no problems as regards feeling inadequate or inferior compared to others. ").css("color", "green");
        }
        if (mean3 >= 13.20){
            $("#c").html("You will need the counsel of a specialist").css("color", "red");
        }
        if (mean4 < 13.70){
            $("#d").html("indicates the absence of depression.").css("color", "green");
        }
        if (mean4 >= 13.70){
            $("#d").html("Indicates symptoms of depression.").css("color", "red");
        }
        if (mean5 < 9.38){
            $("#e").html("Indicates absence of the symptoms of anxiety").css("color", "green");
        }
        if (mean5 >= 9.38){
            $("#e").html("You have shows symptoms of one with anxiety").css("color", "red");
        }
        if (mean6 < 6.50){
            $("#f").html(" You show absence of hostility which is presented by a negative state of anger").css("color", "green");
        }
        if (mean6 >= 6.50){
            $("#f").html("You show thoughts, feelings and actions that are signs of hostility ").css("color", "red");
        }
        if (mean7 < 3.71){
            $("#g").html("You have an absence of phobic-anxiety").css("color", "green");
        }
        if (mean7 >= 3.71){
            $("#g").html("You show symptoms of phobic-anxiety").css("color", "red");
        }
        if (mean6 < 3.71){
            $("#h").html("You have absence of paranoid ideation ").css("color", "green");
        }
        if (mean6 >= 3.71){
            $("#h").html("You have symptoms of paranoid ideation  ").css("color", "red");
        }
        if (mean5 < 9.76){
            $("#i").html("You show no symptoms of psychoticism").css("color", "green");
        }
        if (mean5 >= 9.76){
            $("#i").html("You have symptoms of psychoticism").css("color", "red");
        }
        if (mean7 < 9.76){
            $("#j").html("absence of symptoms of neuroticism ").css("color", "green");
        }
        if (mean7 >= 9.76){
            $("#j").html("indicates symptoms of neuroticism ").css("color", "red");
        }    

    })
});

/*
$("#submit").on('click', function(){
    $("myForm").submit();
});
*/
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
            'test': 'scl'
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

