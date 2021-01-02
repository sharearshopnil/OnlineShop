
    function update_form_variables(pet_id, pet_name) {
      var pet_id_textbox = document.getElementById("update_pet_id");
      var pet_name_textbox = document.getElementById("update_pet_name");

      pet_id_textbox.value=pet_id
      pet_name_textbox.value=pet_name;
    }
    function delete_form_variables(pet_id) {
      var pet_id_textbox = document.getElementById("delete_pet_id");

      pet_id_textbox.value=pet_id
    }
    const get_info = {
        getpet_name(pet_id){
          var pets =[];
          pets[1] = "Dog";
          pets[6] = "Cat";
          pets[7] = "Fish";

          return pets[pet_id];
        },
        getpet_id(pet_name){
          var pets =[];
          pets[1] = "Dog";
          pets[6] = "Cat";
          pets[7] = "Fish";
          var i = 0;
          while(i<pets.length){
            if(pets[i]==pet_name){
              return i;
            }
            else {
              i++;
            }
          }
          return "Pet id invalid "
            
    }

    }
    module.exports = get_info;