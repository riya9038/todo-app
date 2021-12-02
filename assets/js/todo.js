{
  let id = $("#item2");
  console.log(id);

  //  $( function() {
  //      $( "#date" ).datepicker();
  //    } );

  // function to set background colour  of category

  /*  let val= $('#item2').val();
      console.log('value of category is ',val);
        if(val=='work')
        {
         $('#item2').css("background-color", "red");
        }
          console.log(val);
          */

  // jquery code to delete list which is checked
  //        $("#del").on("click",function(){
  //         $("input:checkbox").each(function() {
  //             if ($(this).is(":checked")) {
  //                 $(this).parentElement().remove();

  //                 let id=($(this).val());
  //                 $.ajax({
  //                    method:'get',
  //                    url:`/delete-contact/?id=${id}`,
  //                    success:function(data)
  //                    {
  //                        console.log(data);
  //                       // $(this).parent().remove();
  //                    },error:function(err)
  //                    {
  //                        console.log(err);
  //                    }
  //                }
  //            );
  //          // $(this).parent().remove();
  //            //var v=$(this).val();
  //        }
  //    });
  //  });

  const deleteEle = document.querySelector("#del");
  deleteEle.addEventListener("click", deleteTodos);

  async function deleteTodos() {
    const checkedTodos = document.querySelectorAll("[type='checkbox']");
    checkedTodos.forEach(async (checkedEle) => {
      if (checkedEle.checked) {
        checkedEle.parentElement.parentElement.parentElement.parentElement.remove();
        let id = checkedEle.value;

        const res = await fetch(`/delete-contact/?id=${id}`, {
          method: "delete",
        });
        const data = await res.json();
        console.log("res is", data);
      }
    });
  }
}
