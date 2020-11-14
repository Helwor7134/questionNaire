// 检查问题是否都已回答
function checked(){
    var checkList = new Array()
    var question = document.getElementsByClassName("question");
    var warning = document.getElementsByClassName("warning");
    for(var i=0;i<question.length;i++){
        var option = document.getElementsByName("redio-"+i);
        for(var j=0;j<option.length;j++){
            if(option[j].checked){
                question[i].style.border="none";
                warning[i].style.display="none";
                checkList[i]=true;
                break;
            } else {
                question[i].style.border="1px solid rgb(255, 74, 74)";
                warning[i].style.display="block";
                checkList[i]=false;
            }
        }
    }
    for (var value of checkList) {
        if(!value){
            alert("您还有问题未回答");
            return false;
        }
    }
    return true;
}

// 进度条
function progress(){
    var checkList = new Array()
    var question = document.getElementsByClassName("question");
    var progress = document.getElementsByClassName("progress");
    var val = document.getElementsByClassName("progress-val");
    var hight = document.getElementsByClassName("progress-full");
    progress[0].style.display="block";
    for(var i=0;i<question.length;i++){
        var option = document.getElementsByName("redio-"+i);
        for(var j=0;j<option.length;j++){
            if(option[j].checked){
                checkList[i]=true;
                break;
            } else {
                checkList[i]=false;
            }
        }
    }

    var count = checkList.length;
    var countTrue = 0;
    var height = "0";
    for (var value of checkList) {
        if(value){
            countTrue++;
        }
    }
    height = parseInt(countTrue / count * 100);
    hight[0].style.height = height + "%";
    val[0].innerHTML = height + "%";
}