function skillsMember() {
  return {
    // Path: member.js
    skills: function() {
      return 'Skills: ' + this.skills.join(', ');
    }
  };
}