window.onload = function () {

  var aSkillSubModule = document.getElementsByClassName("skill")[0].getElementsByClassName("sub-module");

  for (var i = 0; i < aSkillSubModule.length; i++) {
    aSkillSubModule[i].index = i;
    aSkillSubModule[i].onmouseover = function () {
      switch (this.index) {
        case 0:

          break;
      }
    }
  }


  // ! end window.onload()
}
