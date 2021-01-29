jQuery(document).ready(function(){

    //fix search reset filter
    jQuery( document ).ajaxComplete(function() {
        jQuery('.form-submit[id^=edit-reset]').on('click keypress', function(e) {
            e.preventDefault();
            location.href = location.origin + location.pathname;
        });
    });
    jQuery('.form-submit[id^=edit-reset]').on('click keypress', function(e) {
        e.preventDefault();
        location.href = location.origin + location.pathname;
    });


    // Charger plus de résultats data
    jQuery('.load-more').click(function(){
        var page = Number(jQuery('#page').val());
        var allcount = Number(jQuery('#all').val());


        if(page <= allcount){
            jQuery("#page").val(page + 1);

            jQuery.ajax({
                url: '/get-data-communiques-presse',
                type: 'get',
                data: {page:page},
                beforeSend:function(){
                    jQuery(".load-more").text("Chargement...");
                },
                success: function(response){

                    // Setting little delay while displaying new content
                    setTimeout(function() {
                        // appending posts after last post with class="post"
                        jQuery(".post-ajax:last").after(response).show().fadeIn("slow");

                        var rowno = page + 1;

                        // checking row value is greater than allcount or not
                        if(rowno > allcount){

                            // Change the text and background
                            jQuery('.c-more-acces').hide();
                        }else{
                            jQuery(".load-more").text("Charger plus de résultats");
                        }
                    }, 2000);


                }
            });
        }else{
            jQuery('.load-more').text("Chargement...");

            // Setting little delay while removing contents
            setTimeout(function() {

                // When row is greater than allcount then remove all class='post' element after 3 element
                jQuery('.post-ajax:nth-child(3)').nextAll('.post-ajax').remove().fadeIn("slow");

                // Reset the value of row
                jQuery("#row").val(0);

                // Change the text and background
                jQuery('.load-more').text("Charger plus de résultats");
                jQuery('.load-more').css("background","#15a9ce");

            }, 2000);


        }

    });

});