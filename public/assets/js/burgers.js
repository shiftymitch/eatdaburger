$(() => {
    //! change eaten status on button click
    $(".change-eat").on("click", function() {
        let id = $(this).data("id");
        let newEat = $(this).data("neweat");

        let newEatState = {
            eaten: newEat
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatState
        }).then(
            () => {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    //! create a new burger with input form
    $(".create-form").on("submit", () => {
        event.preventDefault();

        var newBurger = {
            name: $("#burg").val().trim(),
            eaten: $("[name=eaten]:checked").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            () => {
                location.reload();
            }
        );
    });

    //! delete a burger
    $(".delete-burger").on("click", function() {
        let id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            () => {
                location.reload();
            }
        );
    });
});
