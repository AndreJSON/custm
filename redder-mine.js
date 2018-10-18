const blueL = "rgba(16,90,150,.4)"
const blueD = "rgba(16,90,150,1)"
const greenL = "rgba(50, 200, 50,0.1)"
const greenD = "rgba(50, 200, 50,0.17)"
const redL = "rgb(255, 50, 50,0.1)"
const redD = "rgba(255, 50, 50,0.17)"
const purpleL = "rgba(200, 50, 200,0.1)"
const purpleD = "rgba(200, 50, 200,0.17)"
const grayL = "rgba(0, 50, 0,0.1)"
const grayeD = "rgba(0, 50, 0,0.17)"

main = () => {
	var issues = document.getElementsByClassName("hascontextmenu");
	for (var i = 0; i < issues.length; i++) {
		styleIssue(issues[i]);
	}
}

styleIssue = (issue) => {
	const status = issue.getElementsByClassName("status")[0].innerHTML;
	const even = issue.classList.contains("even");
	var assigneeElem = issue.getElementsByClassName("user")[0];
	const assignee = assigneeElem !== undefined? assigneeElem.innerHTML : undefined;
	setBackgroundColor(issue,status,even);
	setAssigneeColors(issue,assignee,assigneeElem);
}

setBackgroundColor = (issue,status,even) => {
	console.log(even);
	if(status === "Verified" || status === "Resolved" || status === "Passed")
		issue.style.backgroundColor = even? greenL : greenD;
	if(status === "Failed")
		issue.style.backgroundColor = even? redL : redD;
	if(status === "Assigned")
		issue.style.backgroundColor = even? purpleL : purpleD;
	if(status === "Unassigned")
		issue.style.backgroundColor = even? grayL : grayD;
}

setAssigneeColors = (issue,assignee,assigneeElem) => {
	if(assigneeElem === undefined)
		return;
	if(assignee.includes('Josefsson'))
		assigneeElem.style.color = blueD;
	else
		assigneeElem.style.color = blueL;
}

main();