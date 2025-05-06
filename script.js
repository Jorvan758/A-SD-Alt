function select_audio() {
    document.getElementById("audio_file").src = "Referencias/" + document.getElementById("encoder_input").value + ".wav";
    document.getElementById("audio_file").parentElement.load();
    select_generation_selected();
    update_other_images();
}

function select_generation_selected() {
    var the_directory = "Generaciones/" + document.getElementById("model_version").value;
    var the_directory_alt = the_directory + "_yt";
    the_directory += "/" + document.getElementById("reference_image").value + " --- ['";
    the_directory_alt += "/" + document.getElementById("reference_image").value + " --- ['";
    the_directory += document.getElementById("encoder_input").value + "'] --- ";
    the_directory_alt += document.getElementById("encoder_input").value + "'] --- ";
    //console.log(the_directory_alt);
    document.getElementById("generation_selected_1").src = the_directory + "1.png";
    document.getElementById("generation_selected_2").src = the_directory + "2.png";
    document.getElementById("generation_selected_3").src = the_directory_alt + "1.png";
    document.getElementById("generation_selected_4").src = the_directory_alt + "2.png";
    //document.getElementById("generation_selected_1").parentElement.load();
}

function select_image() {
    document.getElementById("image_file").src = "Referencias/" + document.getElementById("reference_image").value + ".png";
    //document.getElementById("image_file").parentElement.load();
    select_generation_selected();
    update_other_images();
}

function update_other_images() {
    const the_folders = ['yo', 'chatgpt', 'deepseek', 'gemini', 'grok', 'llms', 'llmsyyo']
    var the_directory = document.getElementById("reference_image").value + " --- ['";
    the_directory += document.getElementById("encoder_input").value + "'] --- ";
    document.getElementById("generation_random_1").src = "Generaciones/random/" + the_directory + "1.png";
    document.getElementById("generation_random_2").src = "Generaciones/random/" + the_directory + "2.png";
    document.getElementById("generation_t_1").src = "Generaciones/t/" + the_directory + "1.png";
    document.getElementById("generation_t_2").src = "Generaciones/t/" + the_directory + "2.png";
    // document.getElementById("generation_p_1").src = "Generaciones/p/" + the_directory + "1.png";
    // document.getElementById("generation_p_2").src = "Generaciones/p/" + the_directory + "2.png";
    // document.getElementById("generation_p_3").src = "Generaciones/p_yt/" + the_directory + "1.png";
    // document.getElementById("generation_p_4").src = "Generaciones/p_yt/" + the_directory + "2.png";
    for (let folder_id = 0; folder_id < the_folders.length; folder_id++) {
        document.getElementById("generation_" + the_folders[folder_id] + "_1").src = "Generaciones/" +
                                                        the_folders[folder_id] + "/" + the_directory + "1.png";
        document.getElementById("generation_" + the_folders[folder_id] + "_2").src = "Generaciones/"
                                                        + the_folders[folder_id] + "/" + the_directory + "2.png";
        document.getElementById("generation_" + the_folders[folder_id] + "_3").src = "Generaciones/"
                                                        + the_folders[folder_id] + "_yt/" + the_directory + "1.png";
        document.getElementById("generation_" + the_folders[folder_id] + "_4").src = "Generaciones/"
                                                        + the_folders[folder_id] + "_yt/" + the_directory + "2.png";
    }

}

document.addEventListener("DOMContentLoaded", function() {
    select_audio();
    select_image();
});