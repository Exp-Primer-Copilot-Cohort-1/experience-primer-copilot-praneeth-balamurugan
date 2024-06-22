function calculateSkill() {
  var skill = 0;
  var skillForm = document.forms["skillForm"];
  var selectedSkill = skillForm.elements["skill"];
  skill += parseInt(selectedSkill.value);
  return skill;
}