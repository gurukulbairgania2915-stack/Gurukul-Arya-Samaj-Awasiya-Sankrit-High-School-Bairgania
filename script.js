// Simple lightbox for gallery
$(document).ready(function() {
    $('[data-lightbox="gallery"]').click(function() {
        const src = $(this).attr('src');
        $('body').append('<div class="lightbox"><img src="' + src + '"><span class="close">&times;</span></div>');
        $('.lightbox').fadeIn();
    });

    $(document).on('click', '.lightbox .close', function() {
        $('.lightbox').fadeOut(function() { $(this).remove(); });
    });
});

// Basic form submission (replace with real endpoint)
$('#contact-form').submit(function(e) {
    e.preventDefault();
    alert('Message sent! (Integrate with a service like Formspree for real functionality)');
});