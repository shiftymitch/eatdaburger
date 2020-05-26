$(() => {
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
                console.log("changed eaten to", newEat);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

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
                console.log("created new burger");
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function() {
        let id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            () => {
                console.log("deleted burger", id);
                location.reload();
            }
        );
    });
});
