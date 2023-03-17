//Button & eventlistener
var button = document.getElementById("new-article-button");
button.addEventListener("click", newArticle);

var div = document.getElementById("articles");
var clickNr = 1;

function newArticle(){
    console.log("Click nr: " + clickNr);
    if (clickNr == 1){
        
        div.insertAdjacentHTML("afterbegin", '<div id="remove" style="margin-top: 20px;"><h3 class="text">Title</h3><input type="text" class="background text centered" style="width: 801px;"><h3 class="text">Text</h3><textarea type="text" rows="15" cols="100" class="background text centered"></textarea></div>');
        console.log("Textboxes added");
        button.innerText = "Post article";
    }
    else if (clickNr == 2){
        



        document.getElementById("remove").remove();
        console.log("Textboxes removed");
        button.innerHTML = "New Article";
        clickNr = 0;
    }
    clickNr++;
}