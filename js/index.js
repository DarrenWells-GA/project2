

$("#new_workout").submit(function(event){
    alert("Data Inserted Successfully!");
})

$("#update_workout").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['typeOfWorkout']] = n['value']
    })
    console.log(data);

    var request = {
        "url" : `repulsive-trail-production.up.railway.app/api/workouts/${data.id}`,
        "method" : "PUT",
        "data" : data
    }
    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!")
    })
})


if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `repulsive-trail-production.up.railway.app/api/workouts/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you want to delete this workout?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!")
                location.reload()
            })
        }
    })
}