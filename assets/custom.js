$(function(){

  $(document).on('click', '.accordion [tag-name="accordion-header"]', function(e) {
    $(this).parent().find('[tag-name="accordion-content"]').slideToggle(500,"linear");
    $(this).find('[tag-name="accordion-arrow"] svg:last-child').fadeToggle(500,"linear");
  });


  if ( matchMedia('screen and (max-width: 768px)').matches ) {
    $('[section-name = store-features] .store-info').flickity( { prevNextButtons: true, pageDots: false } );

  }











})