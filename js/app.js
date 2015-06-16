$(document).ready(function () {

    /*Defining global variables*/
    console.log('Welcome to console');
    var submissions = 0;


    /*Allows an "Enter" keystroke to work as a submit button for input field*/
    function getItem() {
        $('#list-imput').keydown(function (enter) {
            if (enter.keyCode == 13) {
                postItem();
                console.log("Item added to the list")
                $( this ).val( '' );
            }
        });
    }

    getItem();

    /*Takes returned value from previous function and manipulates it*/
    function postItem() {
        var item = $('#list-imput').val();
        var work = '<p class="list-text">' + item  + '</p>';
        $('.list-item').prepend(work);
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
    $(".list-data").click(function(){
        var listData = $(this);
        var listItem = listData.parent();
        var listText = listData.find('p');
        var greenCheck = listData.find('span:first')
        $(listData).toggleClass('list-data-added');
        $(listItem).toggleClass('list-item-added');
        $(listText).toggleClass('list-text-added');   
        $(greenCheck).toggleClass('green-added-icon');
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


