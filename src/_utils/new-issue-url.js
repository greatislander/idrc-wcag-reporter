import newGithubIssueUrl from 'new-github-issue-url';

export default function newIssueUrl(title, body, sample, issuesUrl) {
	issuesUrl ||= '';

	let issueUrl = '';

	body = sample === 'all' ? `${body}\n#### Pages\n\n- All pages` : `${body}\n#### Pages\n\n- ${sample}`;

	if (issuesUrl.includes('github')) {
		issueUrl = newGithubIssueUrl({
			repoUrl: issuesUrl,
			title,
			body,
		});
	}

	if (issuesUrl.includes('gitlab')) {
		issueUrl = new URL(`${issuesUrl}/-/issues/new?issue[title]=${encodeURIComponent(title)}&issue[description]=${encodeURIComponent(body)}`);
	}

	return `<a href="${issueUrl}" rel="external">Create an issue<span class="external">for '${title}' (external link)</span><svg aria-hidden="true" role="presentation" focusable="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="14" width="16"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M14 5C13.4477 5 13 4.55228 13 4C13 3.44772 13.4477 3 14 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4L21 10C21 10.5523 20.5523 11 20 11C19.4477 11 19 10.5523 19 10L19 6.41422L9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929L17.5858 5H14ZM3 7C3 5.89543 3.89543 5 5 5H10C10.5523 5 11 5.44772 11 6C11 6.55228 10.5523 7 10 7H5V19H17V14C17 13.4477 17.4477 13 18 13C18.5523 13 19 13.4477 19 14V19C19 20.1046 18.1046 21 17 21H5C3.89543 21 3 20.1046 3 19V7Z" fill="currentColor"></path></svg></a>`;
}
