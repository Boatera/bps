$(document).ready(function(){
    $('#nomor-btn').attr('disabled',true);
    
    $('##nomor-input').keyup(function(){
        if($(this).val().length !=0){
            $('#nomor-btn').attr('disabled', false);
        }
        else
        {
            $('#nomor-btn').attr('disabled', true);
        }
    })
});


$(document).ready(function(){
    $('#nomor-btn').prop('disabled',true);
    $('#nomor-input').keyup(function(){
        $('#nomor-btn').prop('disabled', this.value == "" ? true : false);     
    })
});  