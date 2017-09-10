var url = 'https://api.github.com/users/savespace/repos',
	projectList = $('#skill-js');

$('#search').click(searchSkills);

function searchSkills() {
	var projectName = $('#project-name').val();
	if(!projectName.length) {
		projectName = 'trello';
	}
	$ajax({
		url: url + projectName,
		method: 'GET',
		success: showProjectList
	});
}
