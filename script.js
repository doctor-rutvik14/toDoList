$(function () {
    $("#add").on("click", function () {
        var value = $("input").val();
        if (value !== "") {
            var element = $("<li></li>").text(value);
            $(element).append("<button class='remove'><b>X</b></button>");
            $("#mylist").append(element);
            $("input").val("");
            $(".remove").on("click", function () {
                $(this).parent().remove();  
            });
        }
    }); 
});

