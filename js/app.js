$(document).ready(function () {

    /*Defining global variables*/
    console.log('Welcome to console');
    var submissions = 0;
    var checkMark = '<span class="cross-off"></span>'
    var xMark = '<span class="delete"></span>'

    /*Allows an "Enter" keystroke to work as a submit button for input field*/
    function getItem() {
        $('#list-imput').keydown(function (enter) {
            if (enter.keyCode == 13) {
                postItem();
                console.log("This worked")
                $( this ).val( '' );
            }
        });
    }

    getItem();

    /*Takes returned value from previous function and manipulates it*/
    function postItem() {
        var item = $('#list-imput').val();
        var work = '<p class="full-width no-strikethrough">'+ xMark + item + checkMark + '</p>';
        $('#list-item').prepend(work);
        $('#add-items').val('');
        console.log("This posted");
        /*$('#list-area p:first-child')
        .css('opacity', "0")
        .css("margin-top", "-20px")
        .animate(
            { opacity: "1" },
            { queue: true, duration: 'slow' }
        )
        .animate(
            {marginTop: "0px"},
            { queue: false, duration: 'slow' }
        );*/
    }


/*Adds item to the purchased or added to cart list with green check*/
    $("p.list-text").click(function(){
        $(this).closest(".list-item").toggle(700);
        console.log("Item add to cart");
    });

});

/*Clears all items on list*/
$(document).on("click", "#delete-icon", function(){
	console.log("List cleared");
    $(".list-item").remove();
});

/*Allows user to delete items*/
$(document).on("click", ".grey-delete-icon", function(){
    console.log("item removed");
    $(this).closest('.list-item').remove();
});

/*Allows user to check off items*/
$(document).on("click", ".cross-off", function(){
    if (!$(this).closest('p').hasClass('strikethrough')) {
        console.log("I am going to add a strikethrough");
        $(this).closest('p').addClass("strikethrough");
        $(this).siblings('.delete').addClass("alt-delete");
        $(this).addClass("alt-cross-off");
   }
   else {
        console.log("I am going to remove a strikethrough");
        $(this).closest('p').removeClass("strikethrough");
        $(this).siblings('.delete').removeClass("alt-delete");
        $(this).removeClass("alt-cross-off");
   }
});
